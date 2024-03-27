import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Nav() {
  return (
    <View style={styles.nav}>
      <Text style={styles.text}>COLOR PICKER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nav:{
        width: '100%',
        height:60,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 30
    }
})