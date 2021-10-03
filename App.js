import React from "react";
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./files/Main";
import Noti from "./files/Noti";

const Drawer = createDrawerNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Islamic World">
          <Drawer.Screen
            name="Islamic World"
            component={Main}
            options={{
              title: "Islamic World",
              headerStyle: {
                backgroundColor: "#881337",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen name="Noti" component={Noti} />
        </Drawer.Navigator>
      </NavigationContainer>

      {/* <Main /> */}
    </>
  );}

  export default function () {
    return (
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    );
  }