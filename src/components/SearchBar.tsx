import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="magnify" size={24} color={"#333333"} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#333333"
        onChangeText={()=>{}}
        style={styles.input}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.09)',
        paddingVertical:isAndroid ? 2:14,
        paddingHorizontal:isAndroid ? 14:14,
        borderRadius:24,
        marginLeft:20,
        marginRight:20
    },
    input:{
        fontSize:17,
        flex:1,
        marginLeft:8
    }
})