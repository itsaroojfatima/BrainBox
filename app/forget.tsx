import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ForgetPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>Forget Password</Text>

      <Text style={styles.subHeading}>
        Select which contact details should we use to reset your password
      </Text>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="mail" size={20} color="#000" />
        <View style={styles.inner}>
          <Text style={styles.cardTitle}>Email</Text>
          <Text style={styles.cardSub}>Code send to your email</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="call" size={20} color="#000" />
        <View style={styles.inner}>
          <Text style={styles.cardTitle}>Phone</Text>
          <Text style={styles.cardSub}>Code send to your phone</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/verifyEmail")}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
  },

  subHeading: {
    color: "gray",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  inner: {
    marginLeft: 10,
  },

  cardTitle: {
    fontWeight: "bold",
  },

  cardSub: {
    color: "gray",
    fontSize: 12,
  },

  btn: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
  },
});
