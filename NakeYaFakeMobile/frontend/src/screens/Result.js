import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function Result() {
  const navigation = useNavigation();
  const route = useRoute();

  // 🔹 Get the data passed from Dashboard
  const { resultData } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scan Result</Text>

      {resultData ? (
        <ScrollView style={styles.resultBox}>
          <Text style={styles.label}>URL / Email:</Text>
          <Text style={styles.value}>{resultData.url || resultData.email}</Text>

          <Text style={styles.label}>Risk Level:</Text>
          <Text
            style={[
              styles.value,
              resultData.risk === "High"
                ? styles.high
                : resultData.risk === "Medium"
                ? styles.medium
                : styles.low,
            ]}
          >
            {resultData.risk}
          </Text>

          <Text style={styles.label}>Findings:</Text>
          {resultData.checks?.length > 0 ? (
            resultData.checks.map((check, index) => (
              <Text key={index} style={styles.finding}>
                • {check}
              </Text>
            ))
          ) : (
            <Text style={styles.finding}>No detailed findings available.</Text>
          )}

          <Text style={styles.label}>Timestamp:</Text>
          <Text style={styles.value}>{resultData.timestamp}</Text>
        </ScrollView>
      ) : (
        <Text style={styles.description}>No results available.</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  resultBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
  finding: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 3,
  },
  high: {
    color: "red",
    fontWeight: "bold",
  },
  medium: {
    color: "orange",
    fontWeight: "bold",
  },
  low: {
    color: "green",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#6b7280",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
