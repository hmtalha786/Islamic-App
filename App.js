import React from "react";
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./files/Main";
import Asmaullah from "./files/Asmaullah";
import Asmaunabi from "./files/Asmaunabi";
import Books from "./files/Books";
import Calander from "./files/Calander";
import Calculator from "./files/Calculator";
import Prayers from "./files/Prayers";
import Ziker from "./files/Ziker";
import Others from "./files/Others";

const Drawer = createDrawerNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Islamic World">
          <Drawer.Screen
            name="Overview"
            component={Main}
            options={{
              headerStyle: {
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen
            name="Asma u Nabi"
            component={Asmaunabi}
            options={{
              headerStyle: {
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
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
                backgroundColor: "#881337",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
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
