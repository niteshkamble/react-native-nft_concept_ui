import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS == 'android';
const ItemWidth = Dimensions.get('window').width / 2 - 20;

type propsType = {
  category: string;
  nftList: Array<{
    name: string;
    id: string;
    price: string;
    imagepath: string;
  }>;
};
type itemProps = {
  data: {
    name: string;
    id: string;
    price: string;
    imagepath: string;
  };
};

const Item = ({data}: itemProps) => (
  <View style={styles.itemContainer}>
    <Image
      style={styles.image}
      source={{uri: data.imagepath}}
      resizeMode="cover"
    />
    <View style={styles.content}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.id}>{data.id}</Text>
      <View style={styles.subContainer}>
        {isIOS && (
          <View>
            <BlurView
              blurAmount={12}
              blurType="light"
              style={styles.priceContainer}>
              <Text style={{fontSize: 14}}>Price</Text>
              <Text style={styles.price}>{data.price}</Text>
            </BlurView>
          </View>
        )}
        {isAndroid && (
          <View
            style={[
              styles.priceContainer,
              {backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 30},
            ]}>
            <Text style={{fontSize: 14, color: '#FFF'}}>Price</Text>
            <Text style={[styles.price, {color: '#FFF'}]}>{data.price}</Text>
          </View>
        )}
        <View style={styles.hammer}>
          <Ionicons
            name="hammer-outline"
            size={24}
            color={'#333333'}
            style={{transform: [{scaleX: -1}]}}
          />
        </View>
      </View>
    </View>
  </View>
);

const CustomeList = ({nftList, category}: propsType) => {
  return (
    <FlatList
      data={nftList}
      renderItem={({item}) => <Item data={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default CustomeList;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D6D6D6',
    margin: 10,
    borderRadius: 30,
    width:ItemWidth,
   // width: ItemWidth,
    height: 250,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 8,
    marginBottom: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginHorizontal:6,
    //width:ItemWidth,
    alignItems:'center',
  },
  hammer: {
   paddingVertical: 6,
    borderRadius:isAndroid ? 30 : 26,
   paddingHorizontal: 6,
    backgroundColor: '#FFF',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: isAndroid? 10: 10,
    borderRadius: 16,
    paddingHorizontal:isAndroid? 12: 14,
  },
  price: {
    fontSize: 12,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    borderRadius: 30,
  },
});
