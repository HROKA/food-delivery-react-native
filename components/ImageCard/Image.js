import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const ImageCard = ({ title, imgSrc }) => (
  <View style={[styles.element]}>
    <Image
      source={{
        uri: imgSrc,
      }}
      style={styles.imageBackground}
    />
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  </View>
);

export default ImageCard;
