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

export default function VerifyPhone() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingMain}>Verify Phone Number</Text>
          <Text style={styles.subHeading}>
            We Have Sent Code To Your Phone Number
          </Text>
        </View>

        <Text style={styles.phoneNumber}>+00 000000 0000</Text>

        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpBox}
            placeholder=""
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpBox}
            placeholder=""
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpBox}
            placeholder=""
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpBox}
            placeholder=""
            maxLength={1}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.verifyBtn}
          onPress={() => router.push("/")}
        >
          <Text style={styles.verifyBtnText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendAgainBtn}>
          <Text style={styles.sendAgainBtnText}>Send Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  headingContainer: {
    marginBottom: 30,
    alignItems: "center",
  },

  headingMain: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },

  subHeading: {
    fontSize: 13,
    color: "#999",
    fontWeight: "400",
    textAlign: "center",
  },

  phoneNumber: {
    fontSize: 14,
    color: "#999",
    marginBottom: 30,
    fontWeight: "500",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 30,
  },

  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    backgroundColor: "#f5f5f5",
  },

  verifyBtn: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  verifyBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  sendAgainBtn: {
    width: "100%",
    backgroundColor: "#e8e8e8",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },

  sendAgainBtnText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },
});
