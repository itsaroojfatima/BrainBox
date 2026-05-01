import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PhoneNumber() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.headingContainer}>
        <Text style={styles.headingMain}>Enter Your Phone</Text>
        <Text style={styles.headingMain}>Number</Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call" size={18} color="#999" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#ccc"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={styles.verificationBtn}
        onPress={() => router.push("/verifyPhone")}
      >
        <Text style={styles.verificationBtnText}>Verification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.laterBtn}>
        <Text style={styles.laterBtnText}>Later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  backBtn: {
    marginBottom: 40,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  headingContainer: {
    marginBottom: 50,
  },

  headingMain: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    lineHeight: 32,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 30,
    height: 50,
  },

  iconStyle: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: "#000",
    fontSize: 14,
    paddingVertical: 12,
  },

  verificationBtn: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  verificationBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  laterBtn: {
    width: "100%",
    backgroundColor: "#e8e8e8",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },

  laterBtnText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },
});
