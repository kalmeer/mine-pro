import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import download from "../../image/download.jpeg";
import TripCard from "../../component/TripCard";
import UserContext from "../../context/UserContext";
import { removeToken } from "../../api/storage";
const MyProfile = () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    removeToken();
    setUser(false);
  };
  //data.map?
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 15,
          }}
          source={download}
          // source={{ uri: `${BASE_URL}/${image}` }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
          username
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "black",
          marginBottom: 20,
        }}
      ></View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TripCard />
      </ScrollView>

      <View style={{ width: "100%", marginTop: 20 }}>
        <Button
          title="Logout"
          color="#007BFF"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </View>
    // <View
    //   style={{
    //     backgroundColor: "white",
    //     overflow: "hidden",
    //     objectFit: "fill",
    //     height: "100%",
    //   }}
    // >
    //   <View>
    //     <View style={{ alignItems: "flex-start" }}>
    //       <Image
    //         style={{
    //           width: 70,
    //           height: 70,
    //           alignItems: "flex-start",
    //           // Apply borderRadius to the Image
    //           borderTopLeftRadius: 25,
    //           borderTopRightRadius: 25,
    //           borderBottomLeftRadius: 25,
    //           borderBottomRightRadius: 25,
    //           objectFit: "fill",
    //         }}
    //         source={download}
    //         // source={{ uri: `${BASE_URL}/${image}` }}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         justifyContent: "center",
    //         alignItems: "flex-start",
    //         gap: 20,
    //       }}
    //     >
    //       <Text
    //         style={{
    //           alignItems: "flex-start",
    //           fontSize: 25,
    //           fontWeight: "bold",
    //           color: "black",
    //         }}
    //       >
    //         username
    //       </Text>
    //     </View>
    //   </View>

    //   <View style={{ borderWidth: 1, borderColor: "black" }}></View>

    //   <View>
    //     <ScrollView
    //       scontentContainerStyle={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <TripCard />
    //     </ScrollView>
    //   </View>
    //   <Button
    //     title="Logout"
    //     onPress={() => {
    //       logout();
    //     }}
    //   />
    // </View>
  );
};

export default MyProfile;
