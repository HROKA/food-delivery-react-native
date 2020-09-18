import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import Card from './Image';

const VerticalSlider = ({ data }) => (
  <View style={styles.VerticalSlider}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map(({ title, imgSrc }, index) => (
        <Card title={title} imgSrc={imgSrc} key={title + index} />
      ))}
    </ScrollView>
  </View>
);

export default VerticalSlider;
