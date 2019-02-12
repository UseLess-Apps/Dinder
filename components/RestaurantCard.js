import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import ComponentStyles from '../styles/ComponentStyles.js';

class RestaurantCard extends React.Component {

    render() {

        return(
            <View style={[Styles.foodCard]}>
                <Text>{restaurantData.name}</Text>
                <Image style={{height:150, width: 150}} source={{uri:restaurantData.thumbnail}}/>
            </View>
        );
    }
}

export default connect()(RestaurantCard);
