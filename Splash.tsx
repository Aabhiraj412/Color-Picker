import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({navigation}) {
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000)
    },[])
    return (

    <View style={styles.bg}>
      <Image style={styles.img} source={require('./logo.png')}/>
        <Text style={styles.txt}>COLOR PICKER</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    bg:{
        alignItems:'center',
        justifyContent: 'center',
        height: '100%',
    },
    img:{
        width: 150,
        height: 150,
    },
    txt:{
        color: '#2196F3',
        fontSize: 20,
        fontWeight: 'bold',
    }
})