import React, { memo, useMemo } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSportHistoryStore } from '@/stores/useSportHistoryStore';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {
  HomeContainer,
  HomeScrollView,
  HomeTopImage,
  MiniCardItem,
  MiniCardsContainer,
} from './style';
import { images } from '@/assets/images';
import OverviewCard from './components/OverviewCard';
import MiniCard from './components/MiniCard';
import Sports from './components/MiniCard/components/Sports';

dayjs.extend(duration);

const HomeScreen = () => {
  const sportHistory = useSportHistoryStore(state => state.sportHistory);
  const addSportRecord = useSportHistoryStore(state => state.addSportRecord);
  const { t } = useTranslation();

  const miniCardData = useMemo(
    () => [
      {
        title: t('home.sleep'),
        icon: 'bed-king',
        components: <Text>睡眠</Text>,
        subtitle: t('home.sleepSubtitle', { hours: 7, minutes: 30 }), // 示例数据
      },
      {
        title: t('home.sportHistory'),
        icon: 'run',
        components: <Sports data={[]} />,
        subtitle: t('home.sportHistorySubtitle', {
          count: sportHistory.length,
        }),
      },
      {
        title: t('home.menstruation'),
        icon: 'calendar-heart',
        components: <Text>经期</Text>,
        subtitle: t('home.menstruationSubtitle', { day: 5 }), // 示例数据
      },
      {
        title: t('home.weight'),
        icon: 'scale-bathroom',
        components: <Text>体重</Text>,
        subtitle: t('home.weightSubtitle', { weight: 65 }), // 示例数据
      },
      {
        title: t('home.height'),
        icon: 'human-male-height',
        components: <Text>身高</Text>,
        subtitle: t('home.heightSubtitle', { height: 175 }), // 示例数据
      },
      {
        title: t('home.mood'),
        icon: 'emoticon-happy',
        components: <Text>情绪</Text>,
        subtitle: t('home.moodSubtitle', { mood: '开心' }), // 示例数据
      },
    ],
    [t, sportHistory.length],
  );

  return (
    <HomeContainer>
      <HomeTopImage source={images.home_page} resizeMode="cover" />

      <HomeScrollView>
        <OverviewCard />
        {sportHistory.map(item => {
          return (
            <Card key={item.id}>
              <Text>{t(`sports[${item.sportCategory}]`)}</Text>
              <Text>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}</Text>
              <Text>
                持续时间:{' '}
                {dayjs.duration(item.duration).format('HH小时mm分钟ss秒')}
              </Text>
            </Card>
          );
        })}

        <MiniCardsContainer>
          {miniCardData.map(item => (
            <MiniCardItem key={item.title}>
              <MiniCard
                title={item.title}
                icon={item.icon}
                subtitle={item.subtitle}
                components={item.components}
              />
            </MiniCardItem>
          ))}
        </MiniCardsContainer>
      </HomeScrollView>

      <Button
        onPress={() => {
          addSportRecord({
            id: '',
            duration: 8000,
            sportCategory: 'ballSports',
            sport: 'soccer',
            createTime: dayjs().valueOf(),
          });
        }}
      >
        添加
      </Button>
    </HomeContainer>
  );
};

export default memo(HomeScreen);
