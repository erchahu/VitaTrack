import { memo } from 'react';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  return <Text>{t('home.title')}</Text>;
};

export default memo(HomeScreen);