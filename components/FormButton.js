import React from 'react';
import { Text,  TouchableOpacity } from 'react-native';
const FormButton = (props) => {
    return (  
        <TouchableOpacity onPress={props.onPress} style={props.style} >
          <Text style={{
            fontSize: props.fontSize,
          }}>{props.title}</Text>
        </TouchableOpacity>

    );
}


export default FormButton;