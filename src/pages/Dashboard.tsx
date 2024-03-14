import {SafeAreaView, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import { categoryList, nftList } from '../assets/MockupData';
import CustomeList from '../components/CustomeList';


const Dashboard = () => {
    const [category,setCategory]= useState('All');
  return (
    <SafeAreaView style={styles.constainer}>
      <Toolbar/>
      <SearchBar/>
      <CategoryList category={category} categoryList={categoryList} setCategory={setCategory} />
      <CustomeList category={category} nftList={nftList} />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  
});
