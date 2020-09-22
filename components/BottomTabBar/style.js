import { StyleSheet } from 'react-native';
import { ICON_SIZE, PADDING, SEGMENT } from '../../Utils/Constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
