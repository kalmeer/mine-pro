import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Full name</Text>
      <TextInput placeholder="Please enter your Full name" />
      <Text>Username</Text>
      <TextInput placeholder="Please enter your username" />
      <Text>Password</Text>
      <TextInput placeholder="Please enter your Password" />
      <Button title="Signup" />

      <Pressable
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
        }}
      >
        <View>
          <Text>have an account? Login </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
