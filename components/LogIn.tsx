import { View, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

export default function LogIn(){
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
                <TextInput
                placeholder="Correo"
                style={styles.input}
                />
                <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                />
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
