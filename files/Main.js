import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  ScrollView,
  Heading,
  Container,
  Stack,
  View,
  Spinner,
  Pressable,
  Spacer,
  Flex,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
// import ProgressCircle from "react-native-progress-circle";

function Main() {
  return (
    <>
      {/* App Bar Code */}
      <StatusBar backgroundColor="#831843" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#831843" />

      <HStack
        bg="#831843"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Islamic World
          </Text>
        </HStack>
        <HStack space="2">
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="favorite" />}
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="more-vert" />}
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
      {/* Bottom Design Code */}
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          mb: "4",
        }}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="4" alignItems="center">
            <Box
              p="3"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "#000",
                letterSpacing: "lg",
              }}
            >
              <Text p="3">23 Sha`ban 1478</Text>
              <Text p="3">28 September 2021</Text>
            </Box>
          </HStack>
          <HStack space="4" alignItems="center">
            <Box
              p="3"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "#000",
                letterSpacing: "lg",
              }}
            >
              <Text p="3">Fajar (Now)</Text>
              <Text p="3">23 : 14 : 04</Text>
              {/* <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 18 }}>{"30%"}</Text>
              </ProgressCircle> */}
            </Box>
          </HStack>
        </HStack>

        <VStack space={4} alignItems="center">
          <Pressable
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5" rounded="8" bg="#e4e4e7">
              <HStack alignItems="flex-start">
                <Text color="#881337" fontSize={14} fontWeight="medium">
                  Get Actual Salah Timings
                </Text>
                <Spacer />
                <Text color="#881337" fontSize={10} pt="1">
                  Set Reminder
                </Text>
              </HStack>
              <Text mt="3" color="#881337" fontWeight="medium" fontSize={20}>
                Prayer Time
              </Text>
              <Text mt="2" fontSize={14} color="#000">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                <Text mt="2" color="#881337" fontSize={12} fontWeight="medium">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5" rounded="8" bg="#e4e4e7">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="#881337" fontWeight="medium">
                  Verse of the Day
                </Text>
                <Spacer />

                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="#881337"
                    />
                  }
                />
              </HStack>
              <Text color="#881337" mt="3" fontWeight="medium" fontSize={20}>
                Al - Yaseen ( 59 - 60 )
              </Text>
              <Text mt="2" fontSize={14} color="#000">
                Did I not enjoin upon you, O children of Adam, that you not
                worship Satan - [for] indeed, he is to you a clear enemy -
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#881337">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5" rounded="8" bg="#e4e4e7">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="#881337" fontWeight="medium">
                  Hadith of the Day
                </Text>
                <Spacer />
                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="#881337"
                    />
                  }
                />
              </HStack>
              <Text color="#881337" mt="3" fontWeight="medium" fontSize={20}>
                Al - Bukhari (303)
              </Text>
              <Text mt="2" fontSize={14} color="#000">
                The Prophet (ﷺ) appointed `Abdullah bin Jubair as the commander
                of the infantry men (archers) who were fifty on the day (of the
                battle) of Uhud.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#881337">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Hello world");
            }}
          >
            <Box p="5" rounded="8" bg="#e4e4e7">
              <HStack alignItems="flex-start">
                <Text fontSize={14} pt="2" color="#881337" fontWeight="medium">
                  Dua of the Day
                </Text>
                <Spacer />
                <IconButton
                  icon={
                    <Icon
                      as={<MaterialIcons name="favorite" />}
                      size="sm"
                      color="#881337"
                    />
                  }
                />
              </HStack>
              <Text color="#881337" mt="3" fontWeight="medium" fontSize={20}>
                Dua e Hajat
              </Text>
              <Text mt="2" fontSize={14} color="#000">
                There is no god but Allah, the Ever-Clement, the Most Generous.
                I celebrate the Glory of Allah, the Lord of the Magnificent
                Throne.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#881337">
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
      <Main />
    </NativeBaseProvider>
  );
}
