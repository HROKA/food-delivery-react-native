import React from 'react';
import { Text, View } from 'react-native';
import Products from '../../components/Products';
import styles from './style';

const Home = ({ clientData }) => (
  <View style={styles.container}>
    <Products />
  </View>
);

export default Home;
