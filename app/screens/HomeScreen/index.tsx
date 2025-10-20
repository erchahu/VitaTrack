import { memo } from 'react';
import { Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSportHistoryStore } from '@/stores';

const HomeScreen = () => {
  const sportHistory = useSportHistoryStore(state => state.sportHistory)
  const addSportRecord = useSportHistoryStore(state => state.addSportRecord)
  const { t } = useTranslation();
  return (
    <>
      <Text>{t('home.title')}</Text>
      {
        sportHistory.map(item => {
          return <Text>{item.sportCategory.toString()}</Text>
        })
      }

      <Button onPress={() => {
        addSportRecord({
          id: 'w',
          duration: 8000,
          sportCategory: ['游泳']
        })
      }}>添加</Button>
    </>
  );
};

export default memo(HomeScreen);