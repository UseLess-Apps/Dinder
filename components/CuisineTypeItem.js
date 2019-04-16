import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import ComponentStyles from '../styles/ComponentStyles.js';
import { removeCuisineID, setCuisineID } from '../redux/actions.js';


class CuisineTypeItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { selected : false }
  }

  render() {
    return  <TouchableOpacity onPress={this.ponchoman}>
        <Text style={[this.props.style, this.state.selected ? ComponentStyles.selected : ComponentStyles.cuisineTypeItem ]}>{this.props.text}</Text>
      </TouchableOpacity>;
  }

  ponchoman = () => {
    if (this.state.selected) {
      this.props.dispatch(removeCuisineID(this.props.id));
    } else {
      this.props.dispatch(setCuisineID(this.props.id));
    }
    this.setState({selected: !this.state.selected})
  }
}

function mapStateToProps(state) {
  return {
    // lat: state.lat,
    // long: state.long,
    // selectedCuisines: state.selectedCuisines,
  };
}

export default connect(mapStateToProps)(CuisineTypeItem);

