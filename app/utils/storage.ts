import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from 'vitaTrack'

const setStorageItem = async (key: StorageKey, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (_) {}
};

const getStorageItem = async (key: StorageKey) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (_) {}
};

const removeStorageItem = async (key: StorageKey) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (_) {}
};

export { setStorageItem, getStorageItem, removeStorageItem };
