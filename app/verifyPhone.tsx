import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VerifyPhone() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>Verify Phone Number</Text>
      <Text style={styles.subTitle}>
        We Have Sent Code To Your Phone Number
      </Text>
      <Text style={styles.roohi}>+00 000000 0000</Text>
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/")}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Send Again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    top: 50,
    left: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },

  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  subTitle: {
    color: "gray",
    marginBottom: 5,
  },

  roohi: {
    color: "#000",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  btn: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  btnText: { color: "#fff" },
  text: {
    marginTop: 15,
    color: "gray",
  },
});
