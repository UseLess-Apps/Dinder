import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Styles from '../styles/Styles';

class RestaurantInfoScreen extends React.Component {

    static navigationOptions = {
        title: 'Restaurant Details',
    };

    render() {
        const restaurantData = this.props.navigation.getParam('restaurantData', { name: "Failed"})
        console.log(restaurantData);
        return(
            <View>
                <Text>{restaurantData.name}</Text>
                <Text>{restaurantData.location.address}</Text>
                <Text>Cost: {restaurantData.currency.repeat(restaurantData.price)}</Text>
            </View>
        );
    }

}

export default connect()(RestaurantInfoScreen);