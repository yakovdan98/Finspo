import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [yesClick, setYes] = useState(false);

  let content = null;

  if (yesClick) {
    content = <Text>I love you jora c:</Text>
  } else {
    content = 
      <>
        <Text>Do You love me?</Text>
        <Button 
          onPress={() => setYes(yesClick => !yesClick)}
          title="Yes"
        />
        <Button 
          onPress={() => setYes(yesClick => !yesClick)}
          title="Yes"
        />
      </>
  }
  return (
    <View style={styles.container}>
      {content}
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
