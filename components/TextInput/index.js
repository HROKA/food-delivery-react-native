import React from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

// add what ever icons beside text input from this link https://fontawesome.com/icons?d=gallery
const renderIcon = ({
  icon = 'user',
  size = 30,
  color = 'white',
  type = 0,
}) => (
  <FontAwesome
    name={icon}
    size={size}
    color={color}
    solid={type === 0 ? false : true}
  />
);

export default function index({
  onChangeText,
  value,
  placeholder,
  type,
  icon,
}) {
  return (
    <View style={styles.span}>
      {icon && <View style={styles.spanImg}>{renderIcon(icon)}</View>}
      <TextInput
        placeholderTextColor='#1016'
        style={styles.textField}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
      />
    </View>
  );
}
