import React from 'react';
import { TouchableOpacity, Text, ToastAndroid } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as Facebook from 'expo-facebook';
import { useHistory } from 'react-router-native';
import axios from 'axios';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';

import styles from './style';

export default function FacebookLogin() {
  const history = useHistory();

  const loginByFacebook = async () => {
    try {
      const appId = '3516655361731728';
      await Facebook.initializeAsync(appId);
      const permissions = ['public_profile', 'email'];
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        appId,
        {
          permissions,
        }
      );
      if (type === 'success') {
        const { data } = await axios.get(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
        );
        const { role } = await API(
          'auth/client/sign-in/facebook',
          data,
          'post'
        );
        storage.storeSecure(role);
        history.push('home');
      } else throw new Error();
    } catch ({ message }) {
      ToastAndroid.show(
        ' لايمكن تسجيل الدخول باستخدام فيسبوك !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };
  return (
    <TouchableOpacity
      style={styles.facebookBtn}
      onPress={() => loginByFacebook()}
    >
      <FontAwesome name={'facebook-f'} size={20} color='white' />
      <Text style={styles.facebookText}>تسجيل بالفيسبوك</Text>
    </TouchableOpacity>
  );
}
