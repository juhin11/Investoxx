import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Entry from "./screens/Entry";
import Login from "./screens/Login";
import Main from "./screens/Main";
import { UserProvider } from "./Provider/Auth";
import Loading from "./components/Loading";

const Stack = createStackNavigator();
export default function App() {
  
  
  const Options = {
    headerShown:false,
  }
  return (
    <NavigationContainer >
      <UserProvider>
      <Stack.Navigator initialRouteName='Entry' screenOptions={Options} >
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
