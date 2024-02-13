import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import TripCard from "./src/component/TripCard";
import AuthNavigation from "./src/navigation/Auth/AuthNavigation";

export default function App() {
  //if there is no token  <AuthNavigation /> other wise
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
