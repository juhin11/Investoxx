import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../Provider/Auth";

const Entry = ({ navigation }) => {

  const USER_KEY = "@user_key";
  const { user, updateUser } = React.useContext(UserContext);

  React.useEffect(() => {
    AsyncStorage.getItem(USER_KEY)
      .then((user) => {
        if (user) {
          updateUser({ loginStatus: true, user: JSON.parse(user) });
          navigation.navigate("Main");
        }else{ 
            navigation.navigate("Login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.img}
        source={{
          uri: "https://investoxx-assets.oss-ap-south-1.aliyuncs.com/darkLogo.png",
        }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Investoxx</Text>
      <Text style={styles.tagLine}>Invest with Confidence</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={{fontSize:20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },

  img: {
    width: "50%",
    height: "50%",
  },

  text: {
    fontSize: 32,
    fontWeight: "700",
    position: "absolute",
    bottom: -50,
    bottom: 200,
  },

  tagLine: {
    fontSize: 20,
  },
});
