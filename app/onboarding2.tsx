import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={require("@/assets/images/robot.png")}
        style={styles.image}
      />
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
      <Text style={styles.subtitle}>Chat With Your Favourite AI</Text>

      <Text style={styles.heading}>
        Chat with the smartest AI. Experience power of AI with us
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <AntDesign name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 250,
    height: 250,
  },

  dots: {
    flexDirection: "row",
    marginTop: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "#141718",
  },

  title: {
    position: "absolute",
    top: 50,
    right: 20,
    fontSize: 14,
    color: "gray",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },

  heading: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#white",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
});
