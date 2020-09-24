import React, { useState } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { useHistory } from 'react-router-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import FacebookLogin from './FacebookLogin';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';
import background from '../../assets/background.png';
import headerImg from '../../assets/header.png';
import logo from '../../assets/logo.png';

import styles from './style';

const LoginPage = ({ setClientData }) => {
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(0);
  const history = useHistory();

  const signIn = async () => {
    // api post request
    try {
      setLoading(true);
      // eslint-disable-next-line camelcase
      const { CLIENT_TOKEN, client_Data } = await API(
        'auth/client/signin',
        { mobileNumber, password },
        'post'
      );
      setClientData(client_Data);
      storage.storeSecure(CLIENT_TOKEN);
      history.push('home');
    } catch (err) {
      setLoading(false);
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
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}> أهلاً بك من جديد</Text>
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
            value={mobileNumber}
            onChangeText={(value) => setMobileNumber(value)}
            placeholder='رقم الهاتف'
            maxLength={10}
            keyboardType={'phone-pad'}
            icon
          />
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder='كلمة المرور'
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
          <FacebookLogin setClientData={setClientData} />
          <Button
            text='حساب جديد'
            style={styles.bottomButton}
            onPress={() => history.push('/signup')}
          />
        </>
      )}
    </ImageBackground>
  );
};

export default LoginPage;
