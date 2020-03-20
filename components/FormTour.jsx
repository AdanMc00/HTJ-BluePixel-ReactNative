import React from "react";


import {
  Button,
  Header,
  Icon,
  Input,
  Form,
  Item,
  Picker
} from "native-base";

const FormTour = props => {
  return (
    <Form>
      <Item>
        <Input
          placeholderTextColor="#88BAF6"
          placeholder="¡Busca tu tour!"
          underlineColorAndroid="#88BAF6"
        />

        <Button transparent>
          
          <Icon
            style={{
              color: "#88BAF6"
            }}
            name="search"
          />
        </Button>
      </Item>

      <Item>
        <Picker
          note
          mode="dropdown"
          iosIcon={<Icon style={{ color: "#88BAF6" }} name="arrow-down" />}
          placeholder="Fecha"
          placeholderStyle={{ color: "#88BAF6" }}
          placeholderColor="#88BAF6"
        />

        <Picker
          mode="dropdown"
          Icon={<Icon style={{ color: "#88BAF6" }} name="arrow-down" />}
          placeholder="Fecha"
          placeholderStyle={{ color: "#88BAF6" }}
          placeholderIconColor="#88BAF6"
        />
      </Item>
    </Form>
  );
};

export default FormTour;
