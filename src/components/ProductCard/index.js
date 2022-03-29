import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native'

export default function ProductCard({ title, value, img }) {
    return (
        <TouchableOpacity style={styles.cardButton}>
            <Image 
                style={styles.images}
                source={require(`../../../assets/img/${img}`)}
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardButton: {
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 150,
        marginLeft: 8,
    },
    title: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    value: {
        color: 'green',
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: 'bold'
    },
    images: {
        width: '100%',
        height: 75,
        borderRadius: 3,
    }
})
