

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
const cards = [
  {
    place: "Oaxaca,Oaxaca",
    stars: "4.5",
    image: require("./img/image1.jpg"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis vel doloribus, ullam soluta in tempore tempora dolorum accusantium inventore rerum."
  },
  {
    place: "La Montaña,Hidalgo",
    stars: "4",
    image: require("./img/image2.jpg"),
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis vel doloribus, ullam soluta in tempore tempora dolorum accusantium inventore rerum."
  },
  
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>loremImpusm</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                 </CardItem>
                <Body style={{alignSelf:"center" ,
                flexDirection:"row"}}  >
                <Text >{item.text}</Text>

                </Body>
                <CardItem >
                  
                  <Icon name="navigate" style={{ color: 'aquamarine' }} />
                  <Text>{item.place}</Text>
                <Right style={{
                      alignSelf: "flex-end",
                     
                    }}>

                      
                <CardItem >
                  <Icon name="star" style={{ color: 'aquamarine' }} />
                  <Text>{item.stars}</Text>
                </CardItem>
                </Right>
                </CardItem>
               
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}