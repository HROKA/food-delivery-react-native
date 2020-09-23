import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { mainStyle, Colors } from '../../Utils/Constants';

const button = ({ solid, text, onPress, width, style }) => (
  <View style={styles.btnContainer}>
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: solid && Colors.primaryColor,
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

export default button;
