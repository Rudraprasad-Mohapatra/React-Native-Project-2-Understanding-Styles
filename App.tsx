import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
