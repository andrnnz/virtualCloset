import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image} from 'react-native';
import Boton from './components/boton';

export default function App() {
  const [contador, setContador] = useState(0);
  var contador2 = 0;

  const aumetarContador = () =>{
    contador2 = contador + 1;
    setContador(contador + 1);
  }

  useEffect(()=>{

  },[contador2]);

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./images/RopaView1.jpg')} style={{ width: '100%', height: '35%'}}/>
        <View style={styles.header}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Closet Virtual</Text>
        </View>
      </View>
      <View style={styles.cointenerButtons}>
        <Boton/>
        <Text></Text>
        <Text>
          No tienes cuenta?{' '}
          <Text style={styles.signInLink} onPress={()=>{alert("Tocando")}}> 
            Sign in 
          </Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header:{
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  cointenerButtons:{
    flex:0.4,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  signInLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
