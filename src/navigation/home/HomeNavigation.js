import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import ROUTES from "..";
import TripDetail from "../../screens/Home/TripDetail";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME_NAVIGATION.HOME} component={Home} />
      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.TRIP_DETAIL}
        component={TripDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
