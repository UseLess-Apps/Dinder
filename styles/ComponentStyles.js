import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export default Styles = StyleSheet.create({
    // cuisine type item Styles
    cuisineTypeItem: { 
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: width * 0.1,
        marginTop: height * 0.025,
        height: height * 0.05,
    },
    selected: { 
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: width * 0.1,
        marginTop: height * 0.025,
        height: height * 0.05,
        backgroundColor: 'green',
    }
  });