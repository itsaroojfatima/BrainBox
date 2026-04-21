import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>BrainBox</Text>
      <Text style={styles.subtitle}>Version 10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 119.02,
    height: 142.49,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    color: "000000",
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
});
