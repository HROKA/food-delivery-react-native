import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import mainStyle from '../../style';

export default function index({ solid, text, onPress, width, style }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: solid && mainStyle.primaryColor,
            borderWidth: solid ? 0 : 0.5,
            width: width || '90%',
          },
          style,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.text,
            { color: solid ? 'white' : mainStyle.secondaryColor },
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
