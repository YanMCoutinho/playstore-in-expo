import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native'

export default function BigProductCard({ title, releaseDate, img }) {
    return (
        <TouchableOpacity style={styles.cardButton}>
            <Image 
                style={styles.images}
                source={require(`../../../assets/img/${img}`)}
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.releaseDate}>{releaseDate}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardButton: {
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 250,
        marginLeft: 8,
    },
    title: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    releaseDate: {
        width: '95%',
        color: 'green',
        fontSize: 12,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    images: {
        width: '100%',
        height: '200px',
        borderRadius: 10,
    }
})