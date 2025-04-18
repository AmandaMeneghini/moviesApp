import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

export default function ModalDetails(props) {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={props.back}>
          <Text style={styles.btnBackText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titleMovie}>{props.movie.nome}</Text>
        <Text style={styles.synopsis}>Sinopse: </Text>
        <Text style={styles.description}>{props.movie.sinopse}</Text>

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
