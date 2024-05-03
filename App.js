import React, { useState } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import AppLab2 from "./src/Lab2/AppLab2";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppLab2 />
    </SafeAreaProvider>
  );
};
export default App;
