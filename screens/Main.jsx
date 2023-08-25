import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profolio from "../components/Profolio";
import Watchlist from "../components/Watchlist";
import Profile from "../components/Profile";


const Tab = createMaterialBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Portfolio"
      activeColor="#aaa"
      inactiveColor="#ccc"
      barStyle={{ backgroundColor: "#ddd" }}
    >
      <Tab.Screen name="Portfolio" component={Profolio} options={{
        tabBarLabel: 'Portfolio',

        tabBarIcon: ({ focused }) => {
          return(
            <Image 
              source={{uri:"https://investoxx-assets.oss-ap-south-1.aliyuncs.com/icons/portfolio.png"}}
              style={{width:30,height:30,tintColor:focused?"#000":"#777"}}
              resizeMode="contain"
            />
          )
        }

      }}  />
      <Tab.Screen name="Watchlist" component={Watchlist} options={{
        tabBarLabel: 'Watchlist',
        tabBarIcon: ({ focused }) => {
          return(
            <Image 
              source={{uri:"https://investoxx-assets.oss-ap-south-1.aliyuncs.com/icons/watchlist.png"}}
              style={{width:30,height:30,tintColor:focused?"#000":"#777"}}
              resizeMode="contain"
            />
          )
        }

      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Watchlist',
        tabBarIcon: ({ focused }) => {
          return(
            <Image 
              source={{uri:"https://investoxx-assets.oss-ap-south-1.aliyuncs.com/icons/profile.png"}}
              style={{width:30,height:30,tintColor:focused?"#000":"#777"}}
              resizeMode="contain"
            />
          )
        }

      }} />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
