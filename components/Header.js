import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (  
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Clothing App</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
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