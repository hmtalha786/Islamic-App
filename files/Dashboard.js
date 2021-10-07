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
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

function Dashboard() {
  return (
    <>
      {/* App Bar Code */}
      <StatusBar backgroundColor="#005db4" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#005db4" />

      {/* Bottom Design Code */}
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          mb: "4",
        }}
      >
        <Divider my="2" />
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Box p="3" ml="2">
              <VStack space={2} alignItems="center">
                <Text p="3" color="green.700" fontSize={14} fontWeight="bold">
                  23 Sha`ban 1478
                </Text>
                <Text p="3" color="blue.700" fontSize={14} fontWeight="bold">
                  28 September 2021
                </Text>
                <Pressable
                  borderColor="green.700"
                  borderWidth="1"
                  borderRadius="28"
                  marginY="2"
                  // onPress={() => {
                  //   console.log("Hello world");
                  // }}
                >
                  <Text
                    py="1"
                    px="4"
                    color="red.700"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    Set Prayer Alarm
                  </Text>
                </Pressable>
              </VStack>
            </Box>
          </HStack>
          <HStack alignItems="center">
            <Box p="3" mr="5" alignItems="center">
              <VStack space={2} alignItems="center">
                <Text p="3" color="red.700" fontSize={14} fontWeight="bold">
                  (Remaining Time)
                </Text>
                <Text p="3" color="green.700" fontSize={14} fontWeight="bold">
                  23 : 14 : 04
                </Text>
                <Text p="3" color="red.700" fontSize={14} fontWeight="bold">
                  Fajar ( Now )
                </Text>
              </VStack>
            </Box>
          </HStack>
        </HStack>

        <Divider my="2" />

        <VStack space={4} alignItems="center">
          <Pressable
            borderColor="green.700"
            borderWidth="1"
            borderRadius="15"
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5">
              <HStack alignItems="flex-start">
                <Text color="gray.500" fontSize={14} fontWeight="bold">
                  Get Actual Salah Timings
                </Text>
                <Spacer />
                <Text color="gray.600" fontSize={10} fontWeight="bold" pt="1">
                  Set Reminder
                </Text>
              </HStack>
              <Text mt="3" color="green.700" fontWeight="bold" fontSize={20}>
                Prayer Time
              </Text>
              <Text mt="2" fontSize={14} color="darkBlue.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                <Text mt="2" color="red.600" fontSize={12} fontWeight="medium">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            borderColor="green.700"
            borderWidth="1"
            borderRadius="15"
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="gray.500" fontWeight="bold">
                  Verse of the Day
                </Text>
                <Spacer />

                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="gray.600"
                    />
                  }
                />
              </HStack>
              <Text color="green.700" mt="3" fontWeight="bold" fontSize={20}>
                Al - Yaseen ( 59 - 60 )
              </Text>
              <Text mt="2" fontSize={14} color="darkBlue.700">
                Did I not enjoin upon you, O children of Adam, that you not
                worship Satan - [for] indeed, he is to you a clear enemy -
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="red.600">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            borderColor="green.700"
            borderWidth="1"
            borderRadius="15"
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="gray.500" fontWeight="bold">
                  Hadith of the Day
                </Text>
                <Spacer />
                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="gray.600"
                    />
                  }
                />
              </HStack>
              <Text color="green.700" mt="3" fontWeight="bold" fontSize={20}>
                Al - Bukhari (303)
              </Text>
              <Text mt="2" fontSize={14} color="darkBlue.700">
                The Prophet (ﷺ) appointed `Abdullah bin Jubair as the commander
                of the infantry men (archers) who were fifty on the day (of the
                battle) of Uhud.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="red.600">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            borderColor="green.700"
            borderWidth="1"
            borderRadius="15"
            marginBottom="6"
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="gray.500" fontWeight="bold">
                  Dua of the Day
                </Text>
                <Spacer />
                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="gray.600"
                    />
                  }
                />
              </HStack>
              <Text color="green.700" mt="3" fontWeight="bold" fontSize={20}>
                Dua e Hajat
              </Text>
              <Text mt="2" fontSize={14} color="darkBlue.700">
                There is no god but Allah, the Ever-Clement, the Most Generous.
                I celebrate the Glory of Allah, the Lord of the Magnificent
                Throne.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="red.600">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </VStack>
      </ScrollView>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Dashboard />
    </NativeBaseProvider>
  );
}
