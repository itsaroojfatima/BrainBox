import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VerifyEmail() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>Verify Email</Text>

      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
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
});
