import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { OverviewBottomContainer, OverviewContainer, OverviewTopContainer, OverviewTopLeftContainer, OverviewTopRightContainer, Row } from "./style";
import { Divider, Icon, Text, useTheme } from "react-native-paper";

const OverviewCard = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <OverviewContainer>
      <OverviewTopContainer>
        {/* 左侧 - 纵向排列 */}
        <OverviewTopLeftContainer>
          <Row justifyContent='flex-start'>
            <Icon source='cup-water' size={24} color={theme.colors.primary} />
            <Text>{t('home.sportTime')}</Text>
            <Icon source='chevron-right' size={24} color={theme.colors.primary} />
          </Row>
          <Text>30</Text>
          <Text>{t('home.sportTimeTarget', { time: 60 })}</Text>
        </OverviewTopLeftContainer>

        {/* 右侧 - 纵向排列，内部有横向排列 */}
        <OverviewTopRightContainer>
          {/* 步数部分 */}
          <Row justifyContent='flex-start'>
            <Icon source='cup-water' size={24} color={theme.colors.primary} />
            <Text>{t('home.steps')}</Text>
            <Icon source='chevron-right' size={24} color={theme.colors.primary} />
          </Row>
          <Row>
            <Text>30</Text>
            <Text>{t('home.stepsTarget', { time: 3000 })}</Text>
          </Row>
          
          <Divider />
          
          {/* 卡路里部分 */}
          <Row justifyContent='flex-start'>
            <Icon source='cup-water' size={24} color={theme.colors.primary} />
            <Text>{t('home.calories')}</Text>
            <Icon source='chevron-right' size={24} color={theme.colors.primary} />
          </Row>
          <Row>
            <Text>30</Text>
            <Text>{t('home.caloriesTarget', { time: 60 })}</Text>
          </Row>
        </OverviewTopRightContainer>
      </OverviewTopContainer>
      
      <Divider />
      
      {/* 底部 - 保持原样 */}
      <OverviewBottomContainer>
        <Row>
          <Icon source='cup-water' size={24} color={theme.colors.primary} />
          <Text>{t('home.drink')}{t('home.drinkCurrent', { time: 6 })}</Text>
        </Row>
        <Icon source='chevron-right' size={24} color={theme.colors.primary} />
      </OverviewBottomContainer>
    </OverviewContainer>
  )
}

export default memo(OverviewCard)