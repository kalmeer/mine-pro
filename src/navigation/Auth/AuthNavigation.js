import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Profile/Login";
import Signup from "../../screens/Profile/Signup";
import ROUTES from "..";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.AUTH_NAVIGATION.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTH_NAVIGATION.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
