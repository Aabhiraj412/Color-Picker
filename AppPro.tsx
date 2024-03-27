import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Nav from './Nav'

export default function AppPro() {
    const [bgcolor1,setbgcolor1] = useState('#000000')
    const [bgcolor2,setbgcolor2] = useState('#ffffff')
    const [bgcolor3,setbgcolor3] = useState('#ffffff')
    const [bgcolor4,setbgcolor4] = useState('#000000')
    const [bgcolor5,setbgcolor5] = useState('#000000')
    const [bgcolor6,setbgcolor6] = useState('#ffffff')

    const create = ()=>{
        const hexrange = 'a1b2c3d4e5f60798'
        let code1 = '#'
        let code2 = '#'
        let code3 = '#'
        let code4 = '#'
        let code5 = '#'
        let code6 = '#'
        for(let i=0; i<6; i++){
            code1 += hexrange[Math.floor(Math.random()*16)]
            code2 += hexrange[Math.floor(Math.random()*16)]
            code3 += hexrange[Math.floor(Math.random()*16)]
            code4 += hexrange[Math.floor(Math.random()*16)]
            code5 += hexrange[Math.floor(Math.random()*16)]
            code6 += hexrange[Math.floor(Math.random()*16)]
        }
        setbgcolor1(code1)
        setbgcolor2(code2)
        setbgcolor3(code3)
        setbgcolor4(code4)
        setbgcolor5(code5)
        setbgcolor6(code6)
    }
  return (
    <View style={{alignItems:'center'}}>
        <Nav/>
        <View style={{flexDirection:'row',height:'30%'}}>       
            <View style={[styles.body1, {backgroundColor: bgcolor1}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor1}</Text>
                    
                </TouchableOpacity>
                
           </View>
            <View style={[styles.body2, {backgroundColor: bgcolor2}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor2}</Text>
                    
                </TouchableOpacity>
                
            </View>
        </View>
        <View style={{flexDirection:'row',height:'30%'}}>       
            <View style={[styles.body1, {backgroundColor: bgcolor3}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor3}</Text>
                    
                </TouchableOpacity>
                
           </View>
            <View style={[styles.body2, {backgroundColor: bgcolor4}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor4}</Text>
                    
                </TouchableOpacity>
                    
            </View>
        </View>
        
        <View style={{flexDirection:'row',height:'30%', borderRadius:20}}>       
            <View style={[styles.body1, {backgroundColor: bgcolor5}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor5}</Text>
                    
                </TouchableOpacity>
                
           </View>
            <View style={[styles.body2, {backgroundColor: bgcolor6}]}>
                <TouchableOpacity
                // onPress={()=>
                //     Clipboard.setString(bgcolor6)
                // }
                > 
                    <Text selectable={true} style={styles.txt}>{bgcolor6}</Text>
                    
                </TouchableOpacity>
                
            </View>
        </View>
        <TouchableOpacity  style={{bottom:290}} onPress={create}>
                <Text style={styles.btn}>Change Colors</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    
    body1:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        // borderRadius:20
        // backgroundColor:'#000000'
    },
    body2:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        // borderRadius:20
        // backgroundColor:'#000000'
    },
    btn:{
        width: 200,
        color: '#FFFFFF',
        height: 60,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'#2196F3',
    },
    txt:{
        fontSize: 20,
        backgroundColor:'#2196af',
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:10,
        color: '#FFFFFF',
        margin: 20
    }
})