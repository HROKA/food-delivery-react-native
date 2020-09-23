import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as Facebook from 'expo-facebook';
import { useHistory } from 'react-router-native';
import axios from 'axios';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';
import { APP_ID } from '../../Utils/Constants';

import styles from './style';

const FacebookLogin = () => {
  const history = useHistory();

  // facebook login
  const loginByFacebook = async () => {
    try {
      await Facebook.initializeAsync(APP_ID);
      const permissions = ['public_profile', 'email'];
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        APP_ID,
        {
          permissions,
        }
      );
      if (type === 'success') {
        const { data } = await axios.get(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
        );
        // api post request
        const { role } = await API('auth/client/signin/facebook', data, 'post');
        storage.storeSecure(role);
        history.push('home');
      } else throw new Error();
    } catch ({ message }) {
      // eslint-disable-next-line no-alert
      Alert.alert(` لايمكن تسجيل الدخول باستخدام فيسبوك ! ${message}`);
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
};

export default FacebookLogin;
