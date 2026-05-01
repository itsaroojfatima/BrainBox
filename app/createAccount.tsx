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

export default function CreateAccount() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={20} />
      </TouchableOpacity>

      <Text style={styles.title}>Create your Account</Text>
      <TouchableOpacity>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email Your Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/enterPhone")}
      >
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.jan}>
        <Text style={styles.janText}>Already Have An Account?Sign In</Text>
        onPress={() => router.push("/login")}
      </TouchableOpacity>
      <Text style={styles.or}>Continue with Accounts</Text>
      <View style={styles.row}>
        <View style={[styles.social, { backgroundColor: "#DB4437" }]}>
          <Text style={styles.txt}>Google</Text>
        </View>

        <View style={[styles.social, { backgroundColor: "#4267B2" }]}>
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
    backgroundColor: "white",
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

  btnText: { color: "#fff" },
  jan: {
    fontSize: 15,
  },

  or: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontSize: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 10,
  },

  social: {
    borderRadius: 5,
  },

  txt: {
    color: "#fff",
  },
});
