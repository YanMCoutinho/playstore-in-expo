import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Buttons({button1, button2}) {

    return (
        <View style={styles.viewButtons}>
            <TouchableOpacity style={[styles.buttons, {backgroundColor: button1.color}]}>
                <Ionicons name={button1.logo} size={20} color='white' style={{marginRight: 10}} />
                <Text style={styles.textButton}> {button1.text} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttons, {backgroundColor: button2.color}]}>
                <Ionicons name={button2.logo} size={20} color='white' style={{marginRight: 10}} />
                <Text style={styles.textButton}> {button2.text} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewButtons: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
    },

    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },

    buttons: {
        padding: 5,
        marginHorizontal: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'flex-start',

        fontSize: 12,
        color:'white',
        flexDirection: 'row',
        
        
    }

})