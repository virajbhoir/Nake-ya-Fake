import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function Dashboard() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    try {
      // 🔹 Call backend API (you can switch between /scan-breach or /scan-website)
      const res = await axios.post("http://localhost:5000/scan-breach", {
        email: "test@test.com", // later you can take input from user
      });

      // ✅ Navigate to Result screen with API response
      navigation.navigate("Result", { resultData: res.data });
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Could not fetch scan results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.description}>
        Upload or enter data to check if it’s Fake.
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#22c55e" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <Text style={styles.buttonText}>Run Fake Check</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

