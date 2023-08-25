import axios from "axios";
import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Loading from "../components/Loading";
import { UserContext } from "../Provider/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({ navigation }) => {

  const USER_KEY = '@user_key';
  const { user, updateUser } = React.useContext(UserContext);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);



  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }
    setLoading(true);
    axios
      .post(
        "https://investoxx-node-qquk7nohb-karankewat02.vercel.app/api/auth/login",
        {
          password: password,
          email: email,
        }
      )
      .then(
        (response) => {
          var userData = response.data.result[0];
          AsyncStorage.setItem(USER_KEY, JSON.stringify(userData))
          updateUser({ loginStatus: true, user: userData });
          navigation.navigate("Main");
          setLoading(false);
          ToastAndroid.showWithGravity(
            "Login Successful",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        },
        (error) => {
          setLoading(false);

          error.response?.data?.message
            ? ToastAndroid.showWithGravity(
                error.response.data.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              )
            : ToastAndroid.showWithGravity(
                "Something went wrong",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
      );
  };

  const handleSignup = () => {
    if ( !username || !email || !password) {
      alert("Please enter your email and password");
      return;
    }
    setLoading(true);
    axios
      .post(
        "https://investoxx-node-qquk7nohb-karankewat02.vercel.app/api/auth/register",
        {
          password: password,
          email: email,
          name: username,
        }
      )
      .then(
        (response) => {
          alert("Signup Successfull Now Login");
        },
        (error) => {
          setLoading(false);

          error.response?.data?.message
            ? ToastAndroid.showWithGravity(
                error.response.data.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              )
            : ToastAndroid.showWithGravity(
                "Something went wrong",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
      );
  };

  const imgURL ="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/bgImg.png";

  return (
      <ImageBackground
          // source={require('../assets/bgImg.png')}
          source={{ uri: imgURL }}
        resizeMode="cover"
        style={styles.backgroundImage}
        >
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{isSignup ? "Sign up" : "Log in"}</Text>
          </View>
          {isSignup && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                />
            </View>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={isSignup ? handleSignup : handleLogin}
          >
            <Text style={styles.buttonText}>
              {isSignup ? "Sign up" : "Log in"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsSignup(!isSignup)}
            >
            <Text style={styles.switchButtonText}>
              {isSignup
                ? "Already have an account? Log in"
                : "Don’t have an account? Sign up"}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    width: "80%",
  },
  input: {
    height: 50,
    flex: 1,
    paddingLeft: 20,
    fontSize: 18,
    color: "#444",
  },
  button: {
    backgroundColor: "#ef7f1a",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  switchButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  switchButton: {
    marginTop: 20,
  },
});
