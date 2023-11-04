import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Boton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>{alert("Tocando")}}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#656FAF', 
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Boton;
