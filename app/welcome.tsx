import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BrainBox</Text>

      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Continue with Accounts</Text>

      <View style={styles.row}>
        <View style={[styles.btn, { backgroundColor: "#DB4437" }]}>
          <Text style={styles.txt}>Google</Text>
        </View>

        <View style={[styles.btn, { backgroundColor: "#4267B2" }]}>
          <Text style={styles.txt}>Facebook</Text>
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
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },

  login: {
    backgroundColor: "#000",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
  },

  signup: {
    backgroundColor: "#eee",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  signupText: {
    color: "#000",
  },

  or: {
    marginTop: 20,
    color: "gray",
  },

  row: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },

  btn: {
    padding: 10,
    borderRadius: 5,
  },

  txt: {
    color: "#fff",
  },
});
