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
      }}
    >
      <Text>{data?.title}</Text>
      <Text>{data?.description}</Text>
      <Image
        // source={download}
        width={100}
        height={100}
        source={{ uri: `${BASE_URL}${data?.image}` }}
      />
    </View>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
