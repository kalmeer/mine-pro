import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import ROUTES from "..";
import TripDetail from "../../screens/Home/TripDetail";
import CreateTrip from "../../component/CreateTrip";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007BFF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name={ROUTES.HOME_NAVIGATION.HOME} component={Home} />
      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.TRIP_DETAIL}
        component={TripDetail}
      />
      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.CREATE_TRIP}
        component={CreateTrip}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
