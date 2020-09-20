import React, { useState } from 'react';
import { Text, Image, ImageBackground } from 'react-native';
import styles from './style';
import TextInput from '../../components/TextInput';

import background from '../../assets/background.png';
import headerImg from '../../assets/header.png';
import logo from '../../assets/logo.png';

export default function index() {
  const [mobileNumber, setMobileNumber] = useState();
  return (
    <ImageBackground source={background} style={styles.container}>
      <ImageBackground source={headerImg} style={styles.headerImg}>
        <Text style={styles.headerText}> مرحبا</Text>
      </ImageBackground>
      <Image source={logo} style={styles.logo} />
      <TextInput
        value={mobileNumber}
        onChangeText={(value) => setMobileNumber(value)}
        placeholder='رقم الهاتف'
        keyboardType='phone-pad'
        maxLength={10}
        icon
      />
    </ImageBackground>
  );
}
