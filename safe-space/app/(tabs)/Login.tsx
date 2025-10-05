import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Rocket Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="rocket-outline" size={60} color="white" />
        </View>
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        {/* App Name */}
        <Text style={styles.title}>SafeSpace</Text>
        <Text style={styles.subtitle}>Your safe space for support & growth</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username or Phone"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Sign In Button */}
        <TouchableOpacity onPress={() => console.log("Login pressed")}>
          <LinearGradient
            colors={["#4C6CD9", "#8A7DFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.signInButton}
          >
            <Text style={styles.signInText}>Sign In Safely</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity>
          <Text style={styles.signUpText}>
            Need an account? <Text style={{ color: "#4C6CD9" }}>Sign up</Text>
          </Text>
        </TouchableOpacity>

        {/* Emergency Button */}
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => navigation.navigate("Emergency")}
        >
          <View style={styles.emergencyContent}>
            <Ionicons name="alert-circle-outline" size={24} color="white" />
            <Text style={styles.emergencyText}>EMERGENCY HELP</Text>
          </View>
        </TouchableOpacity>

        {/* Privacy Note */}
        <View style={styles.privacyContainer}>
          <Ionicons name="lock-closed-outline" size={16} color="#DADADA" />
          <Text style={styles.privacyText}>
            Your privacy and safety are our top priority
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// ---------------------- STYLES ----------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1470", // gradient-like deep purple background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  logoCircle: {
    backgroundColor: "#303985",
    borderRadius: 50,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#0B0D35",
    width: "100%",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#00FF5B", // neon green
    fontFamily: "Courier", // pixel-like font style
    marginBottom: 5,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    color: "#DADADA",
    fontSize: 15,
    marginBottom: 25,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  signInButton: {
    borderRadius: 10,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "white",
    fontSize: 14,
    marginBottom: 15,
  },
  emergencyButton: {
    backgroundColor: "#D70000",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  emergencyContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  emergencyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Courier",
  },
  privacyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 5,
  },
  privacyText: {
    color: "#DADADA",
    fontSize: 12,
  },
});
