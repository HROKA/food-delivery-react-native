import React from 'react';
import { View, TextInput } from 'react-native';

export default function index() {
  return (
    <View>
      <TextInput
        style={}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
