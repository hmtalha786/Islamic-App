import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import profile from "./assets/profile.png";
// Tab ICons...
import home from "./assets/home.png";
import search from "./assets/search.png";
import notifications from "./assets/bell.png";
import settings from "./assets/settings.png";
import logout from "./assets/logout.png";
// Menu
import menu from "./assets/menu.png";
import close from "./assets/close.png";

// Photo
import photo from "./assets/photo.jpg";

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

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        {/* <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image> */}

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Jenna Ezarik
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          borderRadius: showMenu ? 10 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              // Animated.timing(scaleValue, {
              //   toValue: showMenu ? 1 : 0.88,
              //   duration: 300,
              //   useNativeDriver: true,
              // }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              // Animated.timing(closeButtonOffset, {
              //   // YOur Random Value...
              //   toValue: !showMenu ? -30 : 0,
              //   duration: 300,
              //   useNativeDriver: true,
              // }).start();

              setShowMenu(!showMenu);
            }}
          >
            <HStack alignItems="flex-start">
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "black",
                  marginLeft: 20,
                  marginTop: 40,
                }}
              ></Image>
              <Spacer />
              <Text
                fontSize={14}
                fontWeight="bold"
                style={{
                  marginTop: 40,
                }}
                color="#000"
              >
                Islamic World
              </Text>
              <Spacer />
              <IconButton
                icon={
                  <Icon
                    as={<MaterialIcons name="more-vert" />}
                    size="sm"
                    color="black"
                    style={{
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  />
                }
              />
            </HStack>
          </TouchableOpacity>

          <ScrollView
            _contentContainerStyle={{
              px: "20px",
              mb: "10",
            }}
          >
            {/* <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "black",
                paddingTop: 20,
              }}
            >
              {currentTab}
            </Text> */}

            {/* <Image
              source={photo}
              style={{
                width: "100%",
                height: 300,
                borderRadius: 15,
                marginTop: 25,
              }}
            ></Image> */}

            {/* <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 15,
                paddingBottom: 5,
              }}
            >
              Jenna Ezarik
            </Text> */}

            {/* <Text style={{}}>
              Techie, YouTuber, PS Lover, Apple Sheep's Sister
            </Text> */}

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
                  <Text
                    mt="3"
                    color="#881337"
                    fontWeight="medium"
                    fontSize={20}
                  >
                    Prayer Time
                  </Text>
                  <Text mt="2" fontSize={14} color="#000">
                    Unlock powerfull time-saving tools for creating email
                    delivery and collecting marketing data
                  </Text>
                  <Flex>
                    <Text
                      mt="2"
                      color="#881337"
                      fontSize={12}
                      fontWeight="medium"
                    >
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
                    <Text
                      fontSize={14}
                      pt="2"
                      color="#881337"
                      fontWeight="medium"
                    >
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
                  <Text
                    color="#881337"
                    mt="3"
                    fontWeight="medium"
                    fontSize={20}
                  >
                    Al - Yaseen ( 59 - 60 )
                  </Text>
                  <Text mt="2" fontSize={14} color="#000">
                    Did I not enjoin upon you, O children of Adam, that you not
                    worship Satan - [for] indeed, he is to you a clear enemy -
                  </Text>
                  <Flex>
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      color="#881337"
                    >
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
                    <Text
                      fontSize={14}
                      pt="2"
                      color="#881337"
                      fontWeight="medium"
                    >
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
                  <Text
                    color="#881337"
                    mt="3"
                    fontWeight="medium"
                    fontSize={20}
                  >
                    Al - Bukhari (303)
                  </Text>
                  <Text mt="2" fontSize={14} color="#000">
                    The Prophet (ﷺ) appointed `Abdullah bin Jubair as the
                    commander of the infantry men (archers) who were fifty on
                    the day (of the battle) of Uhud.
                  </Text>
                  <Flex>
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      color="#881337"
                    >
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
                    <Text
                      fontSize={14}
                      pt="2"
                      color="#881337"
                      fontWeight="medium"
                    >
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
                  <Text
                    color="#881337"
                    mt="3"
                    fontWeight="medium"
                    fontSize={20}
                  >
                    Dua e Hajat
                  </Text>
                  <Text mt="2" fontSize={14} color="#000">
                    There is no god but Allah, the Ever-Clement, the Most
                    Generous. I celebrate the Glory of Allah, the Lord of the
                    Magnificent Throne.
                  </Text>
                  <Flex>
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      color="#881337"
                    >
                      Read More
                    </Text>
                  </Flex>
                </Box>
              </Pressable>
            </VStack>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#831843",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
