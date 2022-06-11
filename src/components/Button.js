import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MyButton = (props) => {
    return(
        <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
            <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default MyButton;