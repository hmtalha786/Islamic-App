import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
export const Example = () => {
  return (
    <>
      <Box
        bg="primary.500"
        p="3"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        This is a ramdan
      </Box>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
