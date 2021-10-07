// Near by Mosques

// Ramadan Calander

// Six Kalamas

// Rate App

// Share App

// More Apps

// Donations

// About Us

// Contact Us

// Settings

import React from "react";
import {
  IconButton,
  SimpleGrid,
  Icon,
  NativeBaseProvider,
  Box,
  Text
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Other() {

  return (
    <SimpleGrid columns={5} spacingY={8} spacingX={4}>
      <Box alignItems="center">
        <FontAwesome5 name="compass" size={24} color="black" />
        <Text>Qibla</Text>
      </Box>
      <Box alignItems="center">
        <AntDesign name="book" size={24} color="black" />
        <Text>Quran</Text>
      </Box>
      <Box alignItems="center">
        <MaterialIcons name="date-range" size={24} color="black" />
        <Text>Ramadan Calander</Text>
      </Box>
      <Box alignItems="center">
        <AntDesign name="setting" size={24} color="black" />
        <Text>Settings</Text>
      </Box>
      <Box alignItems="center">
        <FontAwesome5 name="compass" size={24} color="black" />
        <Text>Hello</Text>
      </Box>
      <Box alignItems="center">
        <FontAwesome5 name="compass" size={24} color="black" />
        <Text>Hello</Text>
      </Box>
    </SimpleGrid>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Box alignItems="center" justifyContent="space-between" pt="8" flex={1}>
        <Other />
      </Box>
    </NativeBaseProvider>
  );
}

