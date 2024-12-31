import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList, RouteNames} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// 타입 선언
type Props = NativeStackScreenProps<RootStackParamList>;

const ShoppingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Shopping</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>Go To Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingScreen;
