import React, { Component, useEffect, useState } from "react";
import { Container, Content, Icon, Text } from "native-base";
import CurrentTrip from "./components/CurrentTrip";
import AppHeader from "./components/AppHeader";
import SwipCards from "./components/SwipCards";
import FormTour from "./components/FormTour";
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf")
    });
    setFontsLoaded(true);
  };
  return (
    <Container>
      <AppHeader />
      <Content>
        <CurrentTrip />
        <FormTour/>
        <SwipCards/>
      </Content>
    </Container>
  );
}
