import React from "react";
import {
  NativeBaseProvider,
  Text,
  HStack,
  Center,
  Spacer,
  Pressable,
} from "native-base";
import {
  Fontisto,
  Foundation,
  Ionicons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
import Qibla from "./files/Qibla";
import Ramadan from "./files/Ramadan";
import Tasbeeh from "./files/Tasbeeh";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <>
      {/* Header Bar and App Drawer Navigation */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              drawerIcon: ({ focused }) => (
                <FontAwesome
                  px="1"
                  name="home"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),

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
              drawerIcon: ({ focused }) => (
                <FontAwesome5
                  ml="3"
                  name="pray"
                  size={28}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
            name="Tasbeeh Counter"
            component={Tasbeeh}
            options={{
              drawerIcon: ({ focused }) => (
                <FontAwesome5
                  ml="3"
                  name="heartbeat"
                  size={23}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
            name="Qibla Direction"
            component={Qibla}
            options={{
              drawerIcon: ({ focused }) => (
                <FontAwesome5
                  ml="3"
                  name="compass"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
              drawerIcon: ({ focused }) => (
                <FontAwesome5
                  name="canadian-maple-leaf"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
              drawerIcon: ({ focused }) => (
                <Ionicons
                  name="rose"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
            name="Hijri Calander"
            component={Calander}
            options={{
              drawerIcon: ({ focused }) => (
                <Fontisto
                  name="date"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
              drawerIcon: ({ focused }) => (
                <AntDesign
                  name="calculator"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
            name="Ramadan Treasure"
            component={Ramadan}
            options={{
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name="treasure-chest"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name="bookshelf"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
              drawerIcon: ({ focused }) => (
                <FontAwesome5
                  name="book"
                  size={24}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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
            name="More Stuff"
            component={Others}
            options={{
              drawerIcon: ({ focused }) => (
                <Foundation
                  name="indent-more"
                  size={28}
                  color={focused ? "#0080ff" : "#999999"}
                />
              ),
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

      <HStack alignItems="center" backgroundColor="#005db4">
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
