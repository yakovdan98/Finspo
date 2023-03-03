import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
const FormButton = (props) => {
    return (  
        <View style={styles.FormButton}>
            <Button title=""onPress={props.onPress}/>
        </View>
    );
}
 
const styles = StyleSheet.create({
  FormButton: {
    margin: 10,
  }
})

export default FormButton;