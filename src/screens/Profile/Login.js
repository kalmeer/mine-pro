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
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import UserContext from "../../context/UserContext";

const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const { mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
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
        Login
      </Text>
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
        placeholder="Username"
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
        placeholder=" Password"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      {error && (
        <Text style={{ color: "red", marginBottom: 15 }}>
          {JSON.stringify(error?.response?.data)}
        </Text>
      )}
      <Button title="Login" onPress={() => mutate()} />
      <Pressable
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_NAVIGATION.SIGNUP);
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "blue" }}>Don't have an account? Signup</Text>
      </Pressable>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>UserName</Text>
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
    //   {error && <Text>{JSON.stringify(error?.response?.data)}</Text>}
    //   <Button title="login" onPress={() => mutate()} />

    //   <Pressable
    //     onPress={() => {
    //       navigation.navigate(ROUTES.AUTH_NAVIGATION.SIGNUP);
    //     }}
    //   >
    //     <View>
    //       <Text>Don't have an account? Signup</Text>
    //     </View>
    //   </Pressable>
    // </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
