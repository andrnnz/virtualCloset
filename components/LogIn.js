import { View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import SignIn from "./SignIn";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogIn(){
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const accederCuenta = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('SE ACCEDIÓ A LA CUENTA');
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={{color: '#fff', fontSize: 16}}>Log in</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
                <TextInput onChangeText={(text)=>setEmail(text)} placeholder="Correo" style={styles.input}/>
                <TextInput onChangeText={(text)=>setPassword(text)} placeholder="Contraseña" secureTextEntry style={styles.input}/>
                <TouchableOpacity style={styles.button2} onPress={accederCuenta}>
                  <Text style={{color: '#fff', fontSize: 16}}>Log in</Text>
                </TouchableOpacity>
                <Text></Text>
                <SignIn/>
                <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalCloseButton}>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </>
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
  modalCloseButton: {
    color: 'blue',
    textAlign: 'right',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  button2: {
    width: '80%',
    padding: 15,
    backgroundColor: '#656FAF', 
    borderRadius: 50,
    alignItems: 'center',
  },
});
