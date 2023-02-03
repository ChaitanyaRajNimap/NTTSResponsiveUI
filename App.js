import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
