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
  Feather,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

function Dashboard() {
  return (
    <>
      {/* Status Bar Code */}
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
            <Box p="3">
              <VStack alignItems="flex-start">
                <Text fontSize={10}>Now</Text>
                <Text color="#000" fontSize={14} fontWeight="bold">
                  Zuhar
                </Text>
                <Divider my="2" />
                <Text fontSize={10}>Upcoming</Text>
                <Text color="#000" fontSize={14} fontWeight="bold">
                  Asar
                </Text>
                <Text fontSize={10}>04:04 pm</Text>
              </VStack>
            </Box>
          </HStack>
          <HStack alignItems="center">
            <Box p="3" alignItems="center">
              <VStack alignItems="flex-end">
                <Ionicons name="sunny-sharp" size={30} color="black" />
                <Divider my="2" />
                <Text fontSize={18} fontWeight="bold">
                  12
                </Text>
                <Text color="#000" fontSize={10}>
                  Rajab, 1446
                </Text>
                <Text color="#000" fontSize={10}>
                  Thursday 25-05-2021
                </Text>
              </VStack>
            </Box>
          </HStack>
        </HStack>

        <HStack alignItems="center" px="2" py="2">
          <Pressable cursor="pointer" py="3" flex={1}>
            <Center>
              <Feather name="sunrise" size={24} color="black" />
              <Text color="black" fontSize="12">
                Fajar
              </Text>
            </Center>
          </Pressable>
          <Spacer />
          <Pressable cursor="pointer" py="3" flex={1}>
            <Center>
              <Ionicons name="sunny-sharp" size={24} color="black" />
              <Text color="black" fontSize="12">
                Zuhar
              </Text>
            </Center>
          </Pressable>
          <Spacer />

          <Pressable cursor="pointer" py="3" flex={1}>
            <Center>
              <Feather name="sunset" size={24} color="black" />
              <Text color="black" fontSize="12">
                Asar
              </Text>
            </Center>
          </Pressable>
          <Spacer />
          <Pressable cursor="pointer" py="3" flex={1}>
            <Center>
              <MaterialCommunityIcons
                name="weather-sunset"
                size={26}
                color="black"
              />
              <Text color="black" fontSize="12">
                Magrib
              </Text>
            </Center>
          </Pressable>
          <Spacer />
          <Pressable cursor="pointer" py="3" flex={1}>
            <Center>
              <FontAwesome name="moon-o" size={24} color="black" />
              <Text color="black" fontSize="12">
                Isha
              </Text>
            </Center>
          </Pressable>
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
              <Text mt="2" fontSize={12} color="darkBlue.700">
                Anas (RA) reported: The Messenger of Allah, peace and blessings
                be upon him, said,
              </Text>
              <Text mt="2" fontSize={12} color="darkBlue.700" fontWeight="bold">
                “Beloved to me in the world are women and perfume, yet the
                delight of my eyes is in prayer.”
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
