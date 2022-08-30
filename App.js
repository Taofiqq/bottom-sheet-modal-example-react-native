import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Homes from "./components/Homes";
import { useState, useEffect, useRef, useMemo } from "react";
import { getProperties } from "./utils/homesApi";
import BottomSheetModalComponent from "./components/BottomSheetModalComponent";

export default function App() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [houseDataModal, setHouseDataModal] = useState(null);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = (item) => {
    setHouseDataModal(item);
    bottomSheetModalRef.current.present();
  };

  useEffect(() => {
    const fetchHouseData = async () => {
      const data = await getProperties();
      setHomes(data);
      setLoading(false);
    };
    fetchHouseData();
  }, []);

  if (loading)
    return (
      <View style={styles.loading}>
        <Text>Loading Properties...</Text>
      </View>
    );
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Find your Real Estate Properties Listing in Dubai
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={homes}
          renderItem={({ item }) => (
            <Homes {...item} onPress={() => openModal(item)} />
          )}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <BottomSheetModalComponent {...houseDataModal} />
        {/* <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View> */}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
