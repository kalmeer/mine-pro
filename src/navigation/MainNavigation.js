import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ROUTES from ".";
import HomeNavigation from "./home/HomeNavigation";
import ProfileNavigation from "./profile/ProfileNavigation";

const Tap = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tap.Navigator screenOptions={{ headerShown: false }}>
      <Tap.Screen
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tap.Screen
        name={ROUTES.PROFILE_NAVIGATION.INDEX}
        component={ProfileNavigation}
      />
    </Tap.Navigator>
  );
};

export default MainNavigation;
