import React from "react";
import { Ionicons } from '@expo/vector-icons';

import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";

const AppHeader = ({ ...props }) => {
  {
    /*TODO: Terminar estilo de la barra*/
  }
  return (
    <Header
      style={{
        backgroundColor: "#1175EE",
        paddingLeft: 20,
        paddingRight: 20,
        height: 70,
        paddingTop:20
      }}
    >
      <Left>
        <Button transparent>
          <Icon type= 'FontAwesome' 
            style={{
              color: "#fff"
            }}
            name="home"
          />
        </Button>
      </Left>
      <Body>
        <Title style={{ alignSelf: "flex-end" }}>Prueba</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon style={{ color: "#ffff" }} name="ios-notifications-outline" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
