// Prayer Timings

import React from "react";
import {
  VStack,
  HStack,
  Text,
  NativeBaseProvider,
  Center,
  Box,

} from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";

export function Example() {
  return (
    <>
      <VStack space={3}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="#ffe4e6"
          borderColor="#fda4af"
          borderWidth="2"
          borderRadius="12"
          marginTop="5"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#be123c" fontSize={14} fontWeight="bold">
                Fajar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="3" color="#be123c" fontSize={14} fontWeight="bold">
                5 : 05
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 color="#be123c" name="bell" size={24} />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="#fce7f3"
          borderColor="#f9a8d4"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#be185d" fontSize={14} fontWeight="bold">
                Zuhar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="2" color="#be185d" fontSize={14} fontWeight="bold">
                1 : 30
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#be185d" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="#f3e8ff"
          borderColor="#d8b4fe"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#7e22ce" fontSize={14} fontWeight="bold">
                Asar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="4" color="#7e22ce" fontSize={14} fontWeight="bold">
                5 : 20
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#7e22ce" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="#d1fae5"
          borderColor="#6ee7b7"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#047857" fontSize={14} fontWeight="bold">
                Magrib
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text color="#047857" fontSize={14} fontWeight="bold">
                7 : 10
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#047857" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          // backgroundColor="#ffedd5"
          borderColor="#fdba74"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#c2410c" fontSize={14} fontWeight="bold">
                Isha
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="4" color="#c2410c" fontSize={14} fontWeight="bold">
                8 : 15
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#c2410c" />
            </Box>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
