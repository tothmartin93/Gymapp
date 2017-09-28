import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from '../constants/Layout';


class CardImageScroll extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/images/bg.jpeg')}/>                    
                <View style={styles.overlay}/>
                <Text style={styles.header}>Heading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height: 250 * 0.7 ,
        width: (Layout.window.width * 0.7),
        marginVertical : 10,
        marginHorizontal : 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',  
    },
    header:{
        fontWeight : 'bold',
        fontSize : 35,
        color : 'white',
        position : 'absolute'
    },
    img:{
        flex : 1,
        resizeMode : 'contain',
        borderRadius : 50
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'blue',
        opacity: 0.15,
        marginHorizontal : 12,
        borderRadius : 10
      } 
})

export default CardImageScroll;