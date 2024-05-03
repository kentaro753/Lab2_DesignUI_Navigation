import React, { useState } from "react";
import BottomTab from "./components/BottomTab";
import { PaperProvider } from "react-native-paper";
import DrawerNav from "./components/DrawerNav";

const AppLab2 = () => {
  return (
    <PaperProvider>
      <BottomTab />
      {/* <DrawerNav/> */}
    </PaperProvider>
  );
};
export default AppLab2;
