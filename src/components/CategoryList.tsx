import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

type propsType = {
  category: string;
  categoryList: Array<string>;
  setCategory: Function
};

const CategoryList = ({category, categoryList,setCategory}: propsType) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((cat, index) => (
          <TouchableOpacity
          onPress={()=>setCategory(categoryList[index])}
            style={[
              styles.chip,
              {backgroundColor: cat == category ? 'black' : 'rgba(0,0,0,0.09)'},
            ]}
            key={index.toString()}>
            <Text style={[{color: cat == category ? '#FFF' : '#333333'}]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 6,
    marginVertical:isAndroid?6: 8,
  },
  chip: {
    margin: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingVertical: 10,
    borderRadius: 24,
  },
});
