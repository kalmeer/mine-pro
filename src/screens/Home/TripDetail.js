import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../api";
import { getTripById } from "../../api/trips";

const TripDetail = () => {
  const route = useRoute();
  const { _id } = route.params;
  // const { data } = useQuery({
  //   queryKey: ["trip"],
  //   queryFn: () => getAllItrip(),
  // });
  const { data } = useQuery({
    queryKey: ["trip_", _id],
    queryFn: () => getTripById(_id),
  });
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f8f8",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {data?.title}
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#666",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        {data?.description}
      </Text>
      <Image
        // source={download}
        style={{ width: 200, height: 200, borderRadius: 10 }}
        source={{ uri: `${BASE_URL}${data?.image}` }}
      />
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Text>{data?.title}</Text>
    //   <Text>{data?.description}</Text>
    //   <Image
    //     // source={download}
    //     width={100}
    //     height={100}
    //     source={{ uri: `${BASE_URL}${data?.image}` }}
    //   />
    // </View>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
