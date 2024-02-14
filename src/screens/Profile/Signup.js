import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { signup } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../../context/UserContext";

const Signup = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate, error } = useMutation({
    mutationKey: ["signup"],
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8f8f8",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Signup
      </Text>
      <Text style={{ alignSelf: "flex-start" }}>Bio</Text>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingLeft: 10,
        }}
        placeholder="Please enter your Bio"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, bio: text });
        }}
      />
      <Text style={{ alignSelf: "flex-start" }}>Username</Text>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingLeft: 10,
        }}
        placeholder="Please enter your Username"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, username: text });
        }}
      />
      <Text style={{ alignSelf: "flex-start" }}>Password</Text>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderColor: "blue",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingLeft: 10,
        }}
        placeholder="Please enter your Password"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      <Button title="Signup" onPress={mutate} />
      <Pressable
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "blue" }}>Have an account? Login</Text>
      </Pressable>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>bio</Text>
    //   <TextInput
    //     placeholder="Please enter your Bio"
    //     onChangeText={(text) => {
    //       setUserInfo({ ...userInfo, bio: text });
    //     }}
    //   />
    //   <Text>Username</Text>
    //   <TextInput
    //     placeholder="Please enter your UserName"
    //     onChangeText={(text) => {
    //       setUserInfo({ ...userInfo, username: text });
    //     }}
    //   />
    //   <Text>Password</Text>
    //   <TextInput
    //     placeholder="Please enter your Password"
    //     onChangeText={(text) => {
    //       setUserInfo({ ...userInfo, password: text });
    //     }}
    //   />
    //   <Button title="Signup" onPress={mutate} />

    //   <Pressable
    //     onPress={() => {
    //       navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
    //     }}
    //   >
    //     <View>
    //       <Text>have an account? Login </Text>
    //     </View>
    //   </Pressable>
    // </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
