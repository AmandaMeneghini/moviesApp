import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

export default function ModalDetails({data}) {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnBack}>
          <Text style={styles.btnBackText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titleMovie}>Planeta dos Macacos</Text>
        <Text style={styles.synopsis}>Sinopse: </Text>
        <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnBack: {
    backgroundColor: '#E52245',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnBackText: {
    color: '#FFF',
    fontSize: 16,
  },
  titleMovie: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  }, 
  synopsis:{
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 20,
  },
  description: {
    color: '#FFF',
    marginLeft: 20,
    marginRight: 20,
  }
});
