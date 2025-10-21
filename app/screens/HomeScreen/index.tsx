import { memo } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSportHistoryStore } from '@/stores/useSportHistoryStore';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const HomeScreen = () => {
  const sportHistory = useSportHistoryStore(state => state.sportHistory)
  const addSportRecord = useSportHistoryStore(state => state.addSportRecord)
  const { t } = useTranslation();
  return (
    <>
      <Text>{t('home.title')}</Text>
      {
        sportHistory.map(item => {
          return (
            <Card>
              <Text>{item.sportCategory.toString()}</Text>
              <Text>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}</Text>
              <Text>持续时间: {dayjs.duration(item.duration).format('HH小时mm分钟ss秒')}</Text>
            </Card>
          )
        })
      }

      <Button onPress={() => {
        addSportRecord({
          id: 'w',
          duration: 8000,
          sportCategory: ['游泳'],
          createTime: dayjs().valueOf()
        })
      }}>添加</Button>
    </>
  );
};

export default memo(HomeScreen);