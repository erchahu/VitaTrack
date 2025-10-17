import { memo } from 'react';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { t } = useTranslation();

  return <Text>{t('profile.title')}</Text>;
};

export default memo(ProfileScreen);