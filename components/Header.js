import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (  
    <View style={styles.header}>
      <Text style={styles.header}>Clothing App</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30
  }
})
export default Header;