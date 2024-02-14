import { View, Text, ScrollView, Button } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { getAllItrips } from "../../api/trips";
import TripCard from "../../component/TripCard";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["alltrips"],
    queryFn: () => getAllItrips(),
  });
  //console.log(data);
  const navigation = useNavigation();
  const items = data?.map((trip) => (
    <TripCard
      image={trip.image}
      title={trip.title}
      description={trip.description}
      onPress={() => {
        navigation.navigate(ROUTES.HOME_NAVIGATION.TRIP_DETAIL, {
          _id: trip._id,
        });
      }}
    />
  ));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        padding: 30,
        marginTop: 25,
      }}
    >
      <View
        style={{
          backgroundColor: "#007BFF",
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          borderRadius: 5,
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Title
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Button
            title="Add trip"
            color={"white"}
            onPress={() =>
              navigation.navigate(ROUTES.HOME_NAVIGATION.CREATE_TRIP)
            }
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Content here */}
        </ScrollView>
      </View>
    </View>
    // <View style={{ flex: 1, gap: 20 }}>
    //   <View
    //     style={{
    //       backgroundColor: "gray",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       height: 50,
    //       borderRadius: 5,
    //       gap: 20,
    //     }}
    //   >
    //     <ScrollView
    //       horizontal
    //       contentContainerStyle={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: 10,
    //       }}
    //     >
    //       <View style={{ width: 50, height: 30 }}>
    //         <Text
    //           style={{
    //             justifyContent: "center",
    //             alignItems: "center",
    //             fontSize: 25,
    //             fontWeight: "bold",
    //             color: "white",
    //           }}
    //         ></Text>
    //       </View>
    //       <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
    //         <Button
    //           title="Add trip"
    //           color={"black"}
    //           style={{ backgroundColor: "red" }}
    //           onPress={() =>
    //             navigation.navigate(ROUTES.HOME_NAVIGATION.CREATE_TRIP)
    //           }
    //         />
    //       </View>
    //     </ScrollView>
    //   </View>
    //   <View
    //     style={{
    //       // backgroundColor: "green",
    //       flex: 85,
    //       gap: 20,
    //     }}
    //   >
    //     <ScrollView
    //       contentContainerStyle={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: 20,
    //       }}
    //     ></ScrollView>
    //   </View>
    // </View>
  );
};

export default Home;
