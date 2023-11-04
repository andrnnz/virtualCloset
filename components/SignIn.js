import { View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

export default function SignIn(){
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const createAccount = () =>{
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential)=>{
            console.log('CUENTA CREADA');
            const user = userCredential.user;
          })
          .catch(error =>{
            console.log(error);
        })
    }

    return(
        <>
            <Text>
                No tienes cuenta?{' '}
                <Text style={styles.signInLink} onPress={toggleModal}> 
                    Sign in 
                </Text>
            </Text>
            <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
                <TextInput placeholder="Nombre" style={styles.input}/>
                <TextInput placeholder="Apellidos" style={styles.input}/>
                <TextInput placeholder="Telefono" style={styles.input}/>
                <TextInput onChangeText={(text)=>setEmail(text)} placeholder="Correo" style={styles.input}/>
                <TextInput onChangeText={(text)=>setPassword(text)} placeholder="Contraseña" secureTextEntry style={styles.input}/>
                <TextInput placeholder="Confirmar Contraseña" secureTextEntry style={styles.input}/>
                <TouchableOpacity onPressIn={createAccount} style={styles.button} onPress={toggleModal}>
                    <Text style={{color: '#fff', fontSize: 16}}>Crear Cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.modalCloseButton}>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    signInLink: {
      textDecorationLine: 'underline',
      fontWeight: 'bold',
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
      button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#656FAF', 
        borderRadius: 50,
        alignItems: 'center',
      },
  });