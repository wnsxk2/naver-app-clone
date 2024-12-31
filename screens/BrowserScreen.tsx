import React from 'react';
import {View} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

const BrowserScreen = () => {
  return (
    <View>
      <Text>Shopping</Text>
      <TouchableOpacity>
        <Text>Go To Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrowserScreen;
