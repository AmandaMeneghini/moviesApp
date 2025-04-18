import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";

import ModalDetails from '../ModalDetails'

export default function Movies({data}){

    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>
                <Image 
                source={{uri: data.foto}} 
                style={styles.cover}/>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.btnText}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <ModalDetails />
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    cover: {
        height: 250,
        zIndex: 2,
    },
    title: {
        padding: 15,
        fontSize: 18,
    },
    btnArea: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    btn: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    btnText: {
        color: '#fff',
        textAlign:'center'
    },

})