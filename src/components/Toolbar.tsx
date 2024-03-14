import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Toolbar = () => {
  return (
    <>
    <View style={styles.header}>
      <Text style={styles.title}>Explore Collections</Text>
        <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="bell-outline" size={28} color="#333333" style={{marginRight:8}}/>
        <MaterialCommunityIcons name="menu" size={28} color="#333333" style={{marginLeft:8}} />
        </View>
      </View>
    </>
  )
}

export default Toolbar

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold"
      },
      header:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
      },
      iconContainer:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }
})