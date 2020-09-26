import { StyleSheet } from 'react-native';
import { mainStyle, Colors } from '../../Utils/Constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  image: {
    height: mainStyle.deviceHight / 5,
    width: mainStyle.deviceWidth / 2.9,
    marginLeft: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  details: {
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.2,
    borderColor: Colors.secondaryColor,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    alignItems: 'flex-end',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderBtn: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    color: 'white',
    padding: 5,
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  orderText: {
    color: 'white',
  },
  discount: {
    color: 'white',
    backgroundColor: Colors.primaryColor,
    width: '30%',
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default styles;
