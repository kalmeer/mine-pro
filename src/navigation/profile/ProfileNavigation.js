import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Profile/Login";
import Signup from "../../screens/Profile/Signup";
import ROUTES from "..";
import MyProfile from "../../screens/Profile/MyProfile";

const Stack = createStackNavigator();

const AuthNavigation = () => {
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
      <Stack.Screen
        name={ROUTES.PROFILE_NAVIGATION.MY_PROFILE}
        component={MyProfile}
      />
      {/* <Stack.Screen name={ROUTES.AUTH_NAVIGATION.SIGNUP} component={Signup} options={{ title: 'Sign Up' }} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
