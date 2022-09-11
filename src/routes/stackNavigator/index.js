import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from "../../screens/SignIn";
import {SignUp} from "../../screens/SignUp";
import RouteTab from "../TabNavigator";

const Stack = createNativeStackNavigator();

export function RouteStack() {
    return (
        <Stack.Navigator initialRouteName="SignIn" screenOptions ={{headerShown:false}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Home" component={RouteTab}/>
            <Stack.Screen name="Profile" component={RouteTab}/>
        </Stack.Navigator>
    );
}

export default RouteStack;
