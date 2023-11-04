import { View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

export default function SignIn(){
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                <TextInput
                placeholder="Nombre"
                style={styles.input}
                />
                <TextInput
                placeholder="Apellidos"
                style={styles.input}
                />
                <TextInput
                placeholder="Telefono"
                style={styles.input}
                />
                <TextInput
                placeholder="Correo"
                style={styles.input}
                />
                <TextInput
                placeholder="Contraseña"
                style={styles.input}
                />
                <TextInput
                placeholder="Confirmar Contraseña"
                style={styles.input}
                />
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
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 20,
      },
  });