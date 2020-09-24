import * as SecureStore from 'expo-secure-store';

export default {
  storeSecure: async (data) => {
    await SecureStore.setItemAsync('token', JSON.stringify(data));
  },
  getStoreSecure: async () => {
    const data = await SecureStore.getItemAsync('token');
    return JSON.parse(data);
  },
  deleteStoreSecure: async () => {
    await SecureStore.deleteItemAsync('token');
  },
};
