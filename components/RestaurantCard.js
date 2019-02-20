import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import Styles from '../styles/Styles';
import ComponentStyles from '../styles/ComponentStyles.js';

class RestaurantCard extends React.Component {

    render() {

        return(
            <View style={[Styles.foodCard]}>
                <Text>{this.props.restaurantData.name}</Text>
                <Image style={{height:150, width: 150}} source={{uri:this.props.restaurantData.thumbnail}}/>
            </View>
        );
    }
}

export default connect()(RestaurantCard);
