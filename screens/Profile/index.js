import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Profile = ({ clientData }) => (
  <View style={styles.container}>
    <Text>{clientData.name}</Text>
  </View>
);

export default Profile;
