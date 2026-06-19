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
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signup}
        onPress={() => router.push("/createAccount")}
      >
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Continue With Accounts</Text>

      <View style={styles.row}>
        <View style={styles.google}>
          <Text style={styles.googleText}>GOOGLE</Text>
        </View>

        <View style={styles.facebook}>
          <Text style={styles.facebookText}>FACEBOOK</Text>
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
    paddingHorizontal: 25,
    backgroundColor: "#f5f5f5",
  },

  logo: {
    width: 70,
    height: 70,
    marginBottom: 30,
    resizeMode: "contain",
  },

  welcomeText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },

  brandText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#000",
  },

  login: {
    backgroundColor: "#0E1414",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 12,

    // shadow like UI
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },

  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  signup: {
    backgroundColor: "#EAEAEA",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 25,
  },

  signupText: {
    color: "#999",
    fontSize: 15,
    fontWeight: "600",
  },

  or: {
    color: "#999",
    marginBottom: 15,
    fontSize: 13,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },

  google: {
    flex: 1,
    backgroundColor: "rgba(212,70,56,0.25)",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  googleText: {
    color: "#D44638",
    fontWeight: "600",
    fontSize: 12,
  },

  facebook: {
    flex: 1,
    backgroundColor: "rgba(66,103,178,0.25)",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  facebookText: {
    color: "#4267B2",
    fontWeight: "600",
    fontSize: 12,
  },
});
