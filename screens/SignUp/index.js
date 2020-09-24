/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
  View,
  ToastAndroid,
} from 'react-native';
import { useHistory } from 'react-router-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';
import background from '../../assets/background.png';
import headerImg from '../../assets/header.png';
import logo from '../../assets/logo.png';
import Picker from '../../components/Picker';
import styles from './style';

const SignUpPage = ({ setClientData }) => {
  const [name, setName] = useState();
  const [mobile_number, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(0);

  const history = useHistory();

  const signUp = async () => {
    // api post request
    try {
      setLoading(true);
      const { CLIENT_TOKEN, client_Data } = await API(
        'auth/client/signup',
        { name, password, mobile_number, location, address },
        'post'
      );
      setClientData(client_Data);
      storage.storeSecure(CLIENT_TOKEN);
      history.push('home');
    } catch (err) {
      setLoading(false);
      ToastAndroid.show(
        '  حصل خطأ أثناء إنشاء الحساب يرجى التأكد من جميع بياناتك و المحاولة مرة أخرى',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <ImageBackground source={headerImg} style={styles.headerImg}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}> إنشاء حساب جديد</Text>
      </ImageBackground>
      {loading ? (
        <ActivityIndicator
          size='large'
          color='#F04732'
          style={styles.headerImg}
        />
      ) : (
        <>
          <TextInput
            // user name
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder='الإسم'
            icon
          />
          <TextInput
            // mobile number
            value={mobile_number}
            onChangeText={(value) => setMobileNumber(value)}
            placeholder='رقم الهاتف'
            maxLength={10}
            keyboardType={'phone-pad'}
            icon={{ icon: 'mobile' }}
          />
          <TextInput
            // password
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder='كلمة المرور'
            icon={{ icon: 'key' }}
          />
          <Picker
            // location
            icon
            placeholder='المنطقة'
            onSelect={(value) => setLocation(value)}
          />

          <TextInput
            // address
            value={address}
            onChangeText={(value) => setAddress(value)}
            placeholder='العنوان'
            icon={{ icon: 'home' }}
          />

          <View style={styles.containerBtn}>
            <Button text='إنشاء ' onPress={() => signUp()} solid />
          </View>
          <View style={styles.lineParagraph}>
            <View style={styles.line} />
            <Text> أو </Text>
            <View style={styles.line} />
          </View>
          <Button
            text='تسجيل الدخول'
            style={styles.bottomButton}
            onPress={() => history.push('/login')}
          />
        </>
      )}
    </ImageBackground>
  );
};

export default SignUpPage;
