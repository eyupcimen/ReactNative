import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style={styles.textInputContainer}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    //flex: 1,
    backgroundColor: 'lightgray',
    padding: 50
  },
  inputContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInputContainer: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
