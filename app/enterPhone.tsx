import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PhoneNumber() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter Your Phone Number</Text>
      <View style={styles.inputBox}>
        <Text style={styles.code}>+92</Text>
        <TextInput placeholder="Phone Number" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}> Verification</Text>

        <Text style={styles.subBtn}>Later</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  code: {
    marginRight: 10,
    fontWeight: "bold",
  },

  input: {
    flex: 1,
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
  subBtn: {
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  subBtnText: {
    color: "gray",
  },
});
