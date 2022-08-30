import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Homes = ({ title, coverPhoto, onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: coverPhoto.url }} style={styles.image} />
      <Text style={styles.text}>Name:{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homes;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#121212",
    fontSize: 10,
    textAlign: "center",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    width: 80,
    marginTop: 10,
    padding: 6,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
  },
});
