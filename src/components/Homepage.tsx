import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import backgroundImage from '../assets/nft_background.png'


const Homepage = () => {
  return (
    <>
    <Image  source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Collects Your {'\n'} Rare Digital Art</Text>
        <Text style={styles.subtitle}>Embark on a digital art journey. Collect {'\n'} rare masterpeices today.</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    backgroundImage:{
      height:"80%",
      width:"100%",
      zIndex:1,
      position:'absolute',
      bottom:0
    },
    textContainer:{
      alignItems:'center',
      justifyContent:'center',
      zIndex:2
    },
    title:{
      textAlign:'center',
      fontSize:40,
      fontWeight:'bold',
      marginLeft:12,
      marginRight:12,
      marginTop:24
    },
    subtitle:{
      textAlign:'center',
      fontSize:15,
      fontWeight:'500',
      color:'grey',
      marginTop:16
    }
    
  });

  
export default Homepage

