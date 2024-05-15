/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

function App() {
  const [] = useState
  return (
    <View style={styles.container}>
      <Text>o poico</Text>
      <Image source={require('./src/poico.jpeg')}
        style={styles.img} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  }
})

export default App;