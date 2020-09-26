import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-native';
import { View, Text, Button } from 'react-native';
import secureStorage from '../../Utils/secureStorage';
import API from '../../Utils/fetchData';

import styles from './style';

secureStorage.deleteStoreSecure();
const WelcomeScreen = ({ setClientData }) => {
  const [clientToken, setClientToken] = useState();
  const history = useHistory();

  const getClientData = async (token) => {
    setClientToken(token);
    const client = await API('client/profile', token);
    setClientData(client);
    history.push('home');
  };

  useEffect(() => {
    if (!clientToken) {
      secureStorage.getStoreSecure().then((token) => {
        if (token) getClientData(token);
      });
    }
  });

  return (
    <View>
      <Text>Welcome</Text>
      <Button title='login' onPress={() => history.push('login')} />
    </View>
  );
};

export default WelcomeScreen;
