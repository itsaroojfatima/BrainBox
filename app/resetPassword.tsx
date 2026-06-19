import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResetPassword() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>Reset Your Password</Text>

      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  back: {
    top: 50,
    left: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#eee",
    borderRadius: 10,
    marginTop: 10,
  },

  btn: {
    backgroundColor: "#000",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
  },
});
