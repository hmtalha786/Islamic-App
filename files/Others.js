import React from "react";
import { NativeBaseProvider, Box, Text, Pressable, HStack } from "native-base";
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

function Others() {
  return (
    <>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <Entypo name="share" size={30} color="#15803d" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              Share App
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <MaterialIcons name="star-rate" size={30} color="#1d4ed8" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              Rate App
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <FontAwesome5 name="donate" size={30} color="#c2410c" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              Donations
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <Entypo name="users" size={30} color="#047857" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              About Us
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <MaterialIcons name="contacts" size={30} color="#be185d" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              Contact Us
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <Ionicons name="logo-apple-appstore" size={32} color="#c2410c" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              More Apps
            </Text>
          </HStack>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Hello world");
        }}
      >
        <Box p="5" ml="5">
          <HStack alignItems="flex-start">
            <Ionicons name="settings-outline" size={30} color="#be123c" />

            <Text ml="5" mt="1" fontSize={16} color="#000" fontWeight="bold">
              Settings
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Box mt="5" flex={1}>
        <Others />
      </Box>
    </NativeBaseProvider>
  );
}
