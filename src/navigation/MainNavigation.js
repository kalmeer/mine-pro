import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import ROUTES from ".";
import HomeNavigation from "./home/HomeNavigation";
import ProfileNavigation from "./profile/ProfileNavigation";

const Tab = createBottomTabNavigator();

// const MainNavigation = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={ROUTES.HOME_NAVIGATION.INDEX}
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "lightblue",
//       }}
//     >
//       <Tab.Screen
//         name={ROUTES.HOME_NAVIGATION.INDEX}
//         component={HomeNavigation}
//         options={{ tabBarLabel: "Home" }}
//       />
//       <Tab.Screen
//         name={ROUTES.PROFILE_NAVIGATION.INDEX}
//         component={ProfileNavigation}
//         options={{ tabBarLabel: "Profile" }}
//       />
//     </Tab.Navigator>
//   );
// };
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === ROUTES.HOME_NAVIGATION.INDEX) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.PROFILE_NAVIGATION.INDEX) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "ligbtblue",
        showLabel: false, // This line hides the label
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen
        name={ROUTES.PROFILE_NAVIGATION.INDEX}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
