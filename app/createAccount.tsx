import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateAccount() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Feather name="chevron-left" size={28} color="#000" />
      </TouchableOpacity>

      <View style={styles.headingContainer}>
        <Text style={styles.headingMain}>Create your</Text>
        <Text style={styles.headingMain}>Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <Feather name="user" size={18} color="#999" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#ccc"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="mail" size={18} color="#999" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={18} color="#999" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={18}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => router.push("/enterPhone")}
      >
        <Text style={styles.registerBtnText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInPrompt}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>Continue With Accounts</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.social, { backgroundColor: "#F5A299" }]}
        >
          <Text style={styles.socialText}>GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.social, { backgroundColor: "#C5D3F0" }]}
        >
          <Text style={styles.socialText}>FACEBOOK</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 30,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  headingContainer: {
    marginBottom: 40,
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
    marginBottom: 20,
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

  registerBtn: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },

  registerBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  signInPrompt: {
    fontSize: 13,
    color: "#999",
    fontWeight: "400",
    marginRight: 5,
  },

  signInLink: {
    fontSize: 13,
    color: "#1a1a1a",
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  or: {
    textAlign: "center",
    fontSize: 13,
    color: "#999",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 15,
  },

  social: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  socialText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1a1a1a",
  },
});
