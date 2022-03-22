import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function header(){
    return(
        
        <View style={styles.header}>
            <Ionicons name="menu" size={24} color="white" />
            <Text style ={styles.text}> Play store </Text>
        
            <Ionicons name="ios-search-sharp" size={24} color="white" />
        </View>

    );
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#002333',
        marginTop:0,
        width:'100vw',
        padding:20,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },

    text:{
        color:'white',
        marginLeft:-120,
        fontSize:20,
        fontWeight:'bold'
    }

})