import React from "react";
import {
  NativeBaseProvider,
  Text,
  HStack,
  Center,
  Spacer,
  Pressable,
} from "native-base";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./files/Dashboard";
import Asmaullah from "./files/Asmaullah";
import Asmaunabi from "./files/Asmaunabi";
import Books from "./files/Books";
import Calander from "./files/Calander";
import Calculator from "./files/Calculator";
import Prayers from "./files/Prayers.js";
import Ziker from "./files/Ziker";
import Others from "./files/Others";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <>
      {/* Header Bar and App Drawer Navigation */}
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Prayer Times"
            component={Prayers}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Asma ul Husnah"
            component={Asmaullah}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Asma u Nabi (SAW)"
            component={Asmaunabi}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Drawer.Screen
            name="Islamic Calander"
            component={Calander}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Zakat Calculator"
            component={Calculator}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Islamic Books"
            component={Books}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Ziker & Duas"
            component={Ziker}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Other"
            component={Others}
            options={{
              headerStyle: {
                backgroundColor: "#005db4",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>

      {/* Footer Design Start From Here */}

      <HStack pb="2.5" pt="1.5" alignItems="center" backgroundColor="#005db4">
        <Spacer />
        <Pressable cursor="pointer" py="3" flex={1}>
          <Center>
            <FontAwesome5 name="home" size={24} color="white" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="3" flex={1}>
          <Center>
            <FontAwesome name="book" size={24} color="white" />
            <Text color="white" fontSize="12">
              Quran
            </Text>
          </Center>
        </Pressable>
        <Spacer />

        <Pressable cursor="pointer" py="3" flex={1}>
          <Center>
            <FontAwesome5 name="mosque" size={24} color="white" />
            <Text color="white" fontSize="12">
              Prayer
            </Text>
          </Center>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="3" flex={1}>
          <Center>
            <FontAwesome5 name="praying-hands" size={24} color="white" />
            <Text color="white" fontSize="12">
              Ziker
            </Text>
          </Center>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="3" flex={1}>
          <Center>
            <Ionicons name="ios-apps" size={24} color="white" />
            <Text color="white" fontSize="12">
              More
            </Text>
          </Center>
        </Pressable>
        <Spacer />
      </HStack>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}
