import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function LandingPage({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      {/* App Name */}
      <Text style={styles.title}>SafeSpace</Text>
      <Text style={styles.subtitle}>Your safe space for support & growth</Text>

      {/* Emergency Button */}
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={() => navigation.navigate("Emergency")}
      >
        <View style={styles.emergencyContent}>
          <Ionicons name="alert-circle-outline" size={28} color="white" />
          <Text style={styles.emergencyText}>EMERGENCY HELP</Text>
        </View>
      </TouchableOpacity>

      {/* Main Feature Buttons */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate("Call")}
        >
          <View style={styles.iconBox}>
            <FontAwesome name="phone" size={36} color="black" />
          </View>
          <Text style={styles.featureText}>call for help</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate("Resources")}
        >
          <View style={styles.iconBox}>
            <FontAwesome name="search" size={36} color="black" />
          </View>
          <Text style={styles.featureText}>find resources</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate("Guide")}
        >
          <View style={styles.iconBox}>
            <FontAwesome name="lightbulb-o" size={36} color="black" />
          </View>
          <Text style={styles.featureText}>safety guide</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={28} color="white" />
          <Text style={styles.navText}>resources</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="basketball-outline" size={28} color="white" />
          <Text style={styles.navText}>dunk dash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={28} color="white" />
          <Text style={styles.navText}>profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0D35", // deep navy background
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 80,
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#00FF5B", // neon green
    fontFamily: "Courier", // pixelated font substitute
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    color: "#DADADA",
    fontSize: 16,
    marginBottom: 30,
  },
  emergencyButton: {
    backgroundColor: "#D70000",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 18,
    marginBottom: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  emergencyContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  emergencyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier",
  },
  featuresContainer: {
    width: "90%",
    alignItems: "center",
    gap: 20,
  },
  featureCard: {
    backgroundColor: "#383C7F",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  iconBox: {
    backgroundColor: "#84A9FF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 10,
  },
  featureText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#8A7DFF",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 14,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
    textTransform: "lowercase",
  },
});



