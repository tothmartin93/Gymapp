import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Layout from '../constants/Layout';



class CardItem extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../assets/images/2.jpg')}/>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.header}>Heading</Text>
                    <Text style={styles.description}>Some description text. Preferably in another style.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        borderColor : 'black',
        borderWidth : 0.5,
        marginTop : 10,
        marginRight : 20,
        marginLeft: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor : '#fff',
        height: 120,
        width: Layout.window.width - 40
        
    },
    imgContainer : {
        flex: 0.5,
        justifyContent: 'center', //centrer en X
        alignItems: 'center'
    },
    txtContainer:{
        flex : 1,
        justifyContent: 'center'
    },
    header:{
        fontWeight : 'bold',
        fontSize : 20 
    },
    description:{
        fontSize: 16
    },
    img:{
        flex : 1,
        borderRadius : 100,
        width : 80,
        height : 80,
        resizeMode: 'contain'
    }
})

export default CardItem;