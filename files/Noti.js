import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function Noti() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
