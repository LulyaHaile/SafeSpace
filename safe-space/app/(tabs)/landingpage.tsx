import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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
        <Text style={styles.emergencyText}>EMERGENCY HELP!</Text>
      </TouchableOpacity>

      {/* Grid Buttons */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Call")}>
          <View style={[styles.iconCircle, { backgroundColor: "#FF5B5B" }]}>
            <FontAwesome name="phone" size={32} color="white" />
          </View>
          <Text style={styles.gridText}>call for help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Resources")}>
          <View style={[styles.iconCircle, { backgroundColor: "#4C6CD9" }]}>
            <FontAwesome name="search" size={32} color="white" />
          </View>
          <Text style={styles.gridText}>find resources</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Chat")}>
          <View style={[styles.iconCircle, { backgroundColor: "#4CD94C" }]}>
            <FontAwesome name="comments" size={32} color="white" />
          </View>
          <Text style={styles.gridText}>chat with mentor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Guide")}>
          <View style={[styles.iconCircle, { backgroundColor: "#D9D44C" }]}>
            <FontAwesome name="lightbulb-o" size={32} color="white" />
          </View>
          <Text style={styles.gridText}>safety guide</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="location-outline" size={28} color="white" />
          <Text style={styles.navText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={28} color="white" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10123F",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 80, // to make room for bottom nav
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#7CFC00",
    marginBottom: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  emergencyButton: {
    backgroundColor: "#D94C4C",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    marginBottom: 30,
  },
  emergencyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 40,
  },
  gridButton: {
    width: "45%",
    height: 120,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    backgroundColor: "#2E3BFF", // consistent background
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  gridText: {
    color: "white",
    marginTop: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#2E3BFF",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});




