import React, { useState } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { useHistory } from 'react-router-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';
import background from '../../assets/background.png';
import headerImg from '../../assets/header.png';
// import logo from '../../assets/logo.png';

export default function index() {
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const signIn = async () => {
    // api post request
    try {
      const data = await API(
        'auth/client/sign-in',
        { mobileNumber, password },
        'post'
      );
      storage.storeSecure(data);
      history.push('home');
    } catch (err) {
      ToastAndroid.show(
        'خطا في اسم المستخدم وكلمة المرور !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <ImageBackground source={headerImg} style={styles.headerImg}>
        {/* <Image source={logo} style={styles.logo} /> */}
        <Text style={styles.headerText}> مرحبا</Text>
      </ImageBackground>
      <TextInput
        value={mobileNumber}
        onChangeText={(value) => setMobileNumber(value)}
        placeholder='رقم الهاتف'
        maxLength={10}
        icon
      />
      <TextInput
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder='كلمة المرور'
        maxLength={10}
        icon={{ icon: 'key' }}
      />
      <View style={styles.containerBtn}>
        <Button text='تسجيل الدخول ' onPress={() => signIn()} solid />
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
