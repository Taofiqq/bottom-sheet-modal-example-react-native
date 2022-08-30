import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomSheetModalComponent = ({
  contactName,
  agency,
  rooms,
  baths,
  title,
  price,
  coverPhoto,
  isVerified,
  area,
  phoneNumber,
}) => {
  return (
    <View style={styles.container}>
      {/* text header */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {/* image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: coverPhoto.url }} style={styles.image} />
      </View>

      {/* furniture */}
      <View style={styles.furniture}>
        {/* rooms */}
        <View style={styles.roomsContainer}>
          <Fontisto name="room" size={24} color="black" />
          <Text style={styles.subtext}>{rooms}</Text>
        </View>

        {/* baths */}
        <View style={styles.bathsContainer}>
          <FontAwesome name="bathtub" size={24} color="black" />
          <Text style={styles.subtext}>{baths}</Text>
        </View>

        {/* area */}
        <View style={styles.areaContainer}>
          <MaterialCommunityIcons name="island" size={24} color="black" />
          <Text>{area.toLocaleString()} Sq.km</Text>
        </View>
        <Text style={styles.price}> AED {price.toLocaleString()}</Text>
      </View>
      {/* end of furniture */}

      <View style={styles.details}>
        <MaterialIcons
          name={isVerified ? "verified" : null}
          size={24}
          color="blue"
        />
        <Image source={{ uri: agency.logo.url }} style={styles.logo} />
        <Text style={styles.name}>{contactName}</Text>
        <Text style={styles.phone}>{phoneNumber.mobile}</Text>
      </View>
    </View>
  );
};

export default BottomSheetModalComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  furniture: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    alignItems: "center",
  },
  roomsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    marginLeft: 5,
  },
  bathsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 15,
    marginLeft: 15,
  },
  image: {
    width: 180,
    height: 180,
  },
  price: {
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
    marginRight: 10,
  },
  phone: {
    fontWeight: "bold",
  },
  areaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
