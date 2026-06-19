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
      <View style={styles.card}>
        <Text style={styles.title}>Verify Email</Text>

        <Text style={styles.subTitle}>We Have Sent Code To Your Email</Text>

        <Text style={styles.heading}>Joseph---Mail.Com</Text>

        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/resetPassword")}
        >
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>

        <Text style={styles.subBtn}>Send Again</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subTitle: {
    color: "gray",
    marginTop: 5,
  },

  heading: {
    marginTop: 5,
    marginBottom: 15,
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
    width: "100%",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
  },

  subBtn: {
    marginTop: 10,
    color: "gray",
  },
});
