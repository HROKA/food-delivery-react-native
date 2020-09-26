import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { mainStyle, Colors } from '../../Utils/Constants';
import ClientContext from '../../ClientContext';

const data = {
  id: '1',
  name: 'صدر دجاج كامل ',
  unit: '1 كيلو جرام ',
  price: '20',
  image: 'https://i.imgur.com/SuJ33UV.jpg',
  discount_value: '10',
  available: 'true',
  category: ['دجاج', 'لحم عجل', 'دجاج', 'لحم عجل'],
};

const Product = () => {
  const favorite = useContext(ClientContext)[0].favorite || [];

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={mainStyle.typography.heder}>{data.name}</Text>
        <View style={styles.category}>
          {data.category.map((category, index) => (
            <Text style={mainStyle.typography.paragraph} key={index}>
              {` ${category} , `}
            </Text>
          ))}
        </View>
        <View style={styles.price}>
          <Text style={mainStyle.typography.paragraph}>
            {' '}
            {data.unit}/ {data.price} شيكل
          </Text>
        </View>
        <View style={styles.order}>
          <TouchableOpacity
            style={styles.orderBtn}
            color={Colors.primaryColor}
            onPress={() => console.log('order')}
          >
            <Text style={styles.orderText}>اطلب</Text>
            <FontAwesome name='shopping-cart' size={10} color='white' />
          </TouchableOpacity>
          <FontAwesome
            name='heart'
            size={20}
            color={Colors.primaryColor}
            onPress={() => console.log('fav')}
            solid={favorite.includes(data.id)}
          />
        </View>
      </View>
      <ImageBackground
        source={{ uri: data.image }}
        resizeMode='cover'
        style={styles.image}
      >
        {data.discount_value > 0 && (
          <View style={styles.discount}>
            <Text style={styles.orderText}>{data.discount_value}</Text>
            <FontAwesome name='arrow-down' size={10} color='white' />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Product;
