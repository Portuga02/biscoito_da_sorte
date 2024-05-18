/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/pig.jpeg'))
  const [textoFrase, setTextoFrase] = useState('');
  let frases = ['dorime', 'poico', 'poico poico', 'poico poico poico poiquinho poico']

 
  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    
    setTextoFrase(' " ' + frases[numeroAleatorio] +' " ');
    setImg(require('./src/pig.jpeg'));
  }

  function reiniciar() {
    setImg(require('./src/pigoso.jpg'))
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text>Quebrar o biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar o biscoito</Text>
        </View>
      </TouchableOpacity>
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
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;