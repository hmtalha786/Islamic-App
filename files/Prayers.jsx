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
          borderColor="#881337"
          borderWidth="2"
          borderRadius="12"
          marginTop="5"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                Fajar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="3" color="#881337" fontSize={14} fontWeight="bold">
                5 : 05
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#881337" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderColor="#881337"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                Zuhar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="2" color="#881337" fontSize={14} fontWeight="bold">
                1 : 30
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#881337" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderColor="#881337"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                Asar
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="4" color="#881337" fontSize={14} fontWeight="bold">
                5 : 20
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#881337" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderColor="#881337"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                Magrib
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                7 : 10
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#881337" />
            </Box>
          </HStack>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderColor="#881337"
          borderWidth="2"
          borderRadius="12"
        >
          <HStack>
            <Box px="10" py="3">
              <Text color="#881337" fontSize={14} fontWeight="bold">
                Isha
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <Text pl="4" color="#881337" fontSize={14} fontWeight="bold">
                8 : 15
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box px="10" py="3">
              <FontAwesome5 name="bell" size={24} color="#881337" />
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
