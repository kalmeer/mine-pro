import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BASE_URL } from "../api";
import download from "../image/download.jpeg";
const TripCard = ({ image, title, description, onPress = () => {} }) => {
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
            // source={download}
            source={{ uri: `${BASE_URL}${image}` }}
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 25 }}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TripCard;
