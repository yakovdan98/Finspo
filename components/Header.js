import { Text, View, StyleSheet } from "react-native";
import React from 'react';



const Header = (props) => {

  return (  
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: '#fab9d8'
  },
  header: {
    textAlign: "center",
    fontSize: 30
  }
})
export default Header;