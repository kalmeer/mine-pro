import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getTripById } from "../../api/trips";

const TripDetail = () => {
  const route = useRoute();
  const { _id, name } = route.params;
  useQuery({
    queryKey: ["trips_", _id],
    queryFn: () => getTripById(_id),
  });
  return (
    <View>
      <Text>TripDetail</Text>
    </View>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
