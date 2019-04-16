import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');



export default Styles = StyleSheet.create({
  // Home Screen styles
  homeText: {
    textAlign: 'center',
    marginTop: height * 0.1,
    color: 'white',
    fontSize: 50,
  },
  homeScreenContainer: {
    backgroundColor: '#FB4F6A',
    height: height,
    flexDirection : 'column',
    alignItems: 'center',
  },
  location: {
    padding: 10,
    flex: 0.8,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
  },
  logo: {
    width: width * 0.25,
    height: width * 0.25,
  },
  locationImage: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    maxHeight: 50,
    flexDirection: 'row',
    marginTop: height * 0.1,
    marginHorizontal: width * 0.05,
    height: height * 0.1,
  },
  findCuisinesBtn: {
    width: width - (width * 0.1),
    marginTop: height * 0.1,
  },
  findCuisinesBtnEnabled: {
    backgroundColor: '#E24782'
  },
  // Food Types screen styles
  foodTypeHeaderStyle: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
  foodTypeScreenContainer: {
    backgroundColor: '#FB4F6A',
  },
  // Dinder Screen styles
  foodCardContainer: {
    padding: 0,
    margin: 0
  },
  foodCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    margin: 0,
    backgroundColor: 'red',
  },

  });