import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function index({ solid, text }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: solid ? '#F04732' : 'transparent',
          },
        ]}
        onPress={() => console.log('pressed')}
      >
        <Text style={{ color: solid ? 'white' : 'black' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
