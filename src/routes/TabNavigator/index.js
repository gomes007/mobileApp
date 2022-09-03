import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from "../../screens/Home";
import {Profile} from "../../screens/Profile";


const Tab = createBottomTabNavigator();

export default function RouteTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}
