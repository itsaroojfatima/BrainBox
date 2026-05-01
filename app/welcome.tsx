import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.brandText}>BrainBox</Text>

      <TouchableOpacity
        style={styles.login}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signup}
        onPress={() => router.push("/createAccount")}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Continue with Accounts</Text>

      <View style={styles.row}>
        <View
          style={[styles.btn, { backgroundColor: "rgba(212, 70, 56, 0.25)" }]}
        >
          <Text style={[styles.txt, { color: "#D44638" }]}>Google</Text>
        </View>

        <View
          style={[styles.btn, { backgroundColor: "rgba(66, 103, 178, 0.25)" }]}
        >
          <Text style={[styles.txt, { color: "#4267B2" }]}>Facebook</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
    resizeMode: "contain",
  },

  welcomeText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    fontWeight: "500",
  },

  brandText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#000",
  },

  login: {
    backgroundColor: "#000",
    width: "100%",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  signup: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 30,
  },

  signupText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },

  or: {
    marginBottom: 20,
    color: "#999",
    fontSize: 14,
    fontWeight: "500",
  },

  row: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
  },

  btn: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
