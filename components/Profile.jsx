import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../Provider/Auth";

const Profile = ({ navigation }) => {
  const { user, updateUser } = React.useContext(UserContext);

  const USER_KEY = "@user_key";
  const handleLogout = () => {
    AsyncStorage.removeItem(USER_KEY);
    navigation.navigate("Entry");
  };

  return (
    <View>
      <Text style={styles.profileHeading}>User Profile</Text>
      <View style={styles.profileContentContainer}>
        <View>
          <Text style={styles.userInfoText}>Name: {user.user.name}</Text>
          <Text style={styles.userInfoText}>Email: {user.user.email}</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.dashboardBTN}
            onPress={() => Linking.openURL("https://investoxx.tech/dashboard")}
          >
            <Text style={styles.removeBTNtxt}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.removeBTN} onPress={handleLogout}>
            <Text style={styles.removeBTNtxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileHeading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  profileContentContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#aaa",
    borderRadius: 10,
  },
  userInfoText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  removeBTN: {
    backgroundColor: "red",
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardBTN: {
    backgroundColor: "green",
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  removeBTNtxt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
