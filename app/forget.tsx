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

export default function ForgetPassword() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subHeading}>
        Select which contact details should we useto reset your password
      </Text>
      <TouchableOpacity>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Phone" syle={styles.input} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/enterPhone")}
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
    top: 50,
    left: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
  },

  btn: {
    backgroundColor: "#000",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  btnText: { color: "#fff" },
});
