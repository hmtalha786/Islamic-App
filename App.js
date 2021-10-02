import React from "react";
import { NativeBaseProvider } from "native-base";
import Main from "./files/Main";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}
