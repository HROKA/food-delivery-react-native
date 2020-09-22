import React, { useState } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import background from '../../assets/background.png';
import headerImg from '../../assets/header.png';
import logo from '../../assets/logo.png';

export default function index() {
  const [mobileNumber, setMobileNumber] = useState();
  return (
    <ImageBackground source={background} style={styles.container}>
      <ImageBackground source={headerImg} style={styles.headerImg}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}> مرحبا</Text>
      </ImageBackground>
      <TextInput
        value={mobileNumber}
        onChangeText={(value) => setMobileNumber(value)}
        placeholder='رقم الهاتف'
        keyboardType='phone-pad'
        maxLength={10}
        icon
      />
      <View style={styles.containerBtn}>
        <Button text='تسجيل الدخول ' solid />
      </View>
      <View style={styles.lineParagraph}>
        <View style={styles.line} />
        <Text> أو </Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.facebookBtn}>
        <FontAwesome name={'facebook-f'} size={20} color='white' />
        <Text style={styles.facebookText}>تسجيل بالفيسبوك</Text>
      </TouchableOpacity>
      <Button text='حساب جديد' style={styles.bottomButton} />
    </ImageBackground>
  );
}
