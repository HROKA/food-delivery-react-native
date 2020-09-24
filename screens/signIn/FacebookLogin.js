import React from 'react';
import { TouchableOpacity, Text, ToastAndroid } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as Facebook from 'expo-facebook';
import { useHistory } from 'react-router-native';
import axios from 'axios';
import API from '../../Utils/fetchData';
import storage from '../../Utils/secureStorage';
import { APP_ID } from '../../Utils/Constants';

import styles from './style';

const FacebookLogin = ({ setClientData }) => {
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
        // eslint-disable-next-line camelcase
        const { CLIENT_TOKEN, client_Data } = await API(
          'auth/client/signin/facebook',
          data,
          'post'
        );
        setClientData(client_Data);
        storage.storeSecure(CLIENT_TOKEN);
        history.push('home');
      } else throw new Error();
    } catch ({ message }) {
      // eslint-disable-next-line no-alert
      ToastAndroid.show(
        ` لايمكن تسجيل الدخول باستخدام فيسبوك ! ${message}`,
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
      <Text style={styles.facebookText}> تسجيل بالفيسبوك </Text>
    </TouchableOpacity>
  );
};

export default FacebookLogin;
