import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

// add what ever icons beside text input from this link https://fontawesome.com/icons?d=gallery
// search about icon before use it https://oblador.github.io/react-native-vector-icons/

const renderIcon = ({ icon = 'map-marker', size = 30, color = 'white' }) => (
  <FontAwesome name={icon} size={size} color={color} solid />
);
const ModelView = ({ modalVisible, onPress }) =>
  <Modal animationType='fade' transparent={true} visible={modalVisible}>
    <View style={styles.container}>
      <View style={styles.modalView}>
        <FlatList
          data={['بيت حانون', 'الشاطئ', 'المغازي', 'غزة', 'جباليا', 'خانيونس', 'دير البلح', 'رفح']}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff' }}>{item}</Text>
            </TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  </Modal>;

const Picker = ({
  onSelect,
  placeholder,
  icon
}) => {
  const [modalVisible, setVisible] = useState(false);
  const [value, setValue] = useState();

  return (
    <View style={styles.span}>
      {icon && <View style={styles.spanImg}>{renderIcon(icon)}</View>}
      <TouchableOpacity style={styles.picker}
        onPress={() => setVisible(true)}
      >
        <Text style={{ color: value ? '#000' : '#999999' }}> {value || placeholder}</Text>
        <FontAwesome
          style={styles.downIcon}
          name={'sort-down'}
          size={30}
          color='gray'
        />
      </TouchableOpacity>
      <ModelView modalVisible={modalVisible} onPress={(data) => {
        setVisible(false);
        setValue(data);
        onSelect(data);
      }} />
    </View >
  );
};
export default Picker;
