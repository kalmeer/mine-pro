import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { createTrip } from "../api/trips";

const CreateTrip = () => {
  const [user, setUser] = useContext(UserContext);
  const [tripInfo, setTripInfo] = useState({ user: user });
  const [image, setImage] = useState(null);

  const { mutate } = useMutation({
    mutationKey: ["createTrip"],
    mutationFn: () => createTrip(userInfo),
    // onSuccess: () => {
    //   console.log(" success");
    // },
    // onError: (error) => {
    //   alert(console.log(error));
    // },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setTripInfo({ ...tripInfo, image: result.uri });
    }
  };

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     overflow: "hidden",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
    //     <Text>bio</Text>
    //     <TextInput
    //       placeholder="Title"
    //       onChangeText={(text) => {
    //         setTripInfo({ ...tripInfo, title: text });
    //       }}
    //     />
    //     <Text>bio</Text>
    //     <TextInput
    //       placeholder="Description of the trip"
    //       onChangeText={(text) => {
    //         setTripInfo({ ...tripInfo, description: text });
    //       }}
    //     />
    //     <Button
    //       title="Add trip"
    //       color={"black"}
    //       style={{ backgroundColor: "red" }}
    //       onPress={() => alert("Add trip function")}
    //     />
    //   </View>
    // </View>
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8f8f8",
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Title
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            width: "100%",
            marginBottom: 20,
            paddingLeft: 10,
          }}
          placeholder="Title"
          onChangeText={(text) => {
            setTripInfo({ ...tripInfo, title: text });
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Description
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            width: "100%",
            marginBottom: 20,
            paddingLeft: 10,
          }}
          placeholder="Description of the trip"
          onChangeText={(text) => {
            setTripInfo({ ...tripInfo, description: text });
          }}
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </View>
      <Button
        title="Add trip"
        style={{ backgroundColor: "blue", padding: 10, borderRadius: 10 }}
        onPress={mutate}
      />
    </View>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({});