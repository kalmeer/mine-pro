import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BASE_URL } from "../api";
import download from "../image/download.jpeg";
const TripCard = ({ onPress = () => {} }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 200,
        width: "70%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onPress();
          // alert("HI amal :)");
        }}
      >
        <View style={{ width: "100%", height: "70%", backgroundColor: "gray" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            source={download}
            // source={{ uri: `${BASE_URL}/${image}` }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            height: 70,
            backgroundColor: "gray",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Amal 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TripCard;
