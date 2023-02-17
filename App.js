import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [yesClick, setYes] = useState(true);
  const click = true;

  return (
    <View style={styles.container}>
      if ({click}) {
        <Text>I love you jora c:</Text>
      } 
      {/* else {
        <>
          <Text>Do You love me?</Text>
          <Button onPress={() => setYes(yesClick = true)}>Yes</Button>
          <Button onPress={() => setYes(yesClick = true)}>Yes</Button>
        </>
        
      } */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
