import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



class MenuItem extends Component {
    render() {
        return(
            <View style={styles.container} >
                <Image
                    source={this.props.image}
                    style={styles.bgImg}
                    />
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center', //centrer en X
        alignItems: 'center'    //centrer en Y
    },
    bgImg:{
        width : 50,
        height: 50
    }
})

export default MenuItem;