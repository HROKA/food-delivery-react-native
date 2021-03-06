import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

// add what ever icons beside text input from this link https://fontawesome.com/icons?d=gallery
// search about icon before use it https://oblador.github.io/react-native-vector-icons/

const renderIcon = ({ icon = 'user', size = 30, color = 'white' }) => (
  <FontAwesome name={icon} size={size} color={color} solid />
);

const textInput = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  icon,
  maxLength,
}) => {
  // this secure to hide and show the password
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.span}>
      {icon && <View style={styles.spanImg}>{renderIcon(icon)}</View>}
      <TextInput
        placeholderTextColor='#1016'
        style={styles.textField}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        secureTextEntry={placeholder === 'كلمة المرور' && secure}
        maxLength={maxLength}
      />
      {placeholder === 'كلمة المرور' && (
        <View style={styles.eye}>
          <FontAwesome
            style={{ paddingRight: 15 }}
            name={secure ? 'eye' : 'eye-slash'}
            size={20}
            color='gray'
            onPress={() => setSecure(!secure)}
          />
        </View>
      )}
    </View>
  );
};
export default textInput;
