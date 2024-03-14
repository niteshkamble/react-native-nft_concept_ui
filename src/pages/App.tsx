import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Homepage from '../components/Homepage';
import SwipeButton from '../components/SwipeButton';

const App = ({navigation}:any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value: boolean) => setToggleState(value);

  useEffect(() => {
    if (toggleState) {
      navigation.replace('dashboard');
    }
  }, [toggleState]);

  return (
    <>
      <SafeAreaView style={[{flex: 1, backgroundColor: '#D4D4D4'}]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Homepage />
        <SwipeButton onToggle={handleToggle} />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
