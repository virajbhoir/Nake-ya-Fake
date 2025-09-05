import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// 👇 Import screens from your mobile app folder
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import Result from "./src/screens/Result";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          // Show Login screen first
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Result" component={Result} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

