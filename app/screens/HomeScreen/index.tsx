import React, { memo } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSportHistoryStore } from '@/stores/useSportHistoryStore';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'
import { HomeContainer, HomeTopImage } from './style';
import { images } from '@/assets/images';
import OverviewCard from './components/OverviewCard';

dayjs.extend(duration)

const HomeScreen = () => {
  const sportHistory = useSportHistoryStore(state => state.sportHistory)
  const addSportRecord = useSportHistoryStore(state => state.addSportRecord)
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <HomeTopImage source={images.home_page} resizeMode='cover' />
      <OverviewCard />
      <Text>{t('home.title')}</Text>
      {
        sportHistory.map(item => {
          return (
            <Card key={item.id}>
              <Text>{t(`sports[${item.sportCategory}]`)}</Text>
              <Text>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}</Text>
              <Text>持续时间: {dayjs.duration(item.duration).format('HH小时mm分钟ss秒')}</Text>
            </Card>
          )
        })
      }

      <Button onPress={() => {
        addSportRecord({
          id: '',
          duration: 8000,
          sportCategory: 'ballSports',
          sport: 'soccer',
          createTime: dayjs().valueOf()
        })
      }}>添加</Button>
    </HomeContainer>
  );
};

export default memo(HomeScreen);