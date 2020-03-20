import React from 'react';
import {Text, Button, Icon} from 'native-base';

const CurrentTrip = ({...props}) => {
    return <Button full dark style={{justifyContent: 'flex-start', backgroundColor: '#233F70', height: 60, padding: 5}}>
        <Text style={{flexGrow: 1}}>Tienes un viaje en curso</Text>
        <Icon name='ios-planet' />
    </Button>
};

export default CurrentTrip;