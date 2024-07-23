import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import React from 'react';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
