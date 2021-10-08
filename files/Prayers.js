// Prayer Timings

import React from "react";
import {
  VStack,
  HStack,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Box,
  StatusBar,
  ScrollView,
  Pressable,
  Spacer,
  Flex,
  Divider,
  Center,
} from "native-base";

import {
  FontAwesome5,
  Feather,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export function Example() {
  return (
    <>
      <Divider my="3" />

      <Center my="2">
        <Ionicons name="sunny-sharp" size={30} color="black" />
        <Text fontSize={18} fontWeight="bold">
          Zuhar
        </Text>
      </Center>

      <HStack>
        <Box alignItems="flex-start" mr="10">
          <Text fontSize={10}>Start Time</Text>
          <Text color="#000" fontSize={14} fontWeight="bold">
            12:16 pm
          </Text>
        </Box>

        <Box alignItems="flex-end" ml="10">
          <Text fontSize={10}>Last Time</Text>
          <Text color="#000" fontSize={14} fontWeight="bold">
            04:04 pm
          </Text>
        </Box>
      </HStack>

      <Divider my="2" />

      <Pressable>
        <Box mx="8" my="3">
          <Text mt="2" fontSize={12} color="darkBlue.700" textAlign="justify">
            Anas (RA) reported: The Messenger of Allah, peace and blessings be
            upon him, said,
          </Text>
          <Text
            mt="2"
            fontSize={12}
            color="darkBlue.700"
            fontWeight="bold"
            textAlign="center"
          >
            “Beloved to me in the world are women and perfume, yet the delight
            of my eyes is in prayer.”
          </Text>

          <Text
            mt="2"
            color="red.600"
            fontSize={12}
            fontWeight="medium"
            textAlign="center"
          >
            Read More
          </Text>
        </Box>
      </Pressable>

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
