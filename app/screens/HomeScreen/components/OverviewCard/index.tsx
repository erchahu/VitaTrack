import React, { memo } from "react";
import { useTranslation } from 'react-i18next';
import { OverviewBottomContainer, OverviewContainer, OverviewTopContainer, OverviewTopLeftContainer, OverviewTopRightContainer, Row, TargetValueText, OverviewBottomTitle } from "./style";
import { Icon, Text, useTheme } from "react-native-paper";
import OverviewSection from "./OverviewSection";

const OverviewCard = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <OverviewContainer>
      <OverviewTopContainer>
        <OverviewTopLeftContainer>
          <Row justifyContent='flex-start'>
            <Icon source='run' size={24} color={theme.colors.tertiary} />
            <Text variant='titleSmall'>{t('home.sportTime')}</Text>
            <Icon source='chevron-right' size={20} color={theme.colors.onSurfaceVariant} />
          </Row>
          <Text variant='displayLarge'>30</Text>
          <TargetValueText>{t('home.sportTimeTarget', { time: 60 })}</TargetValueText>
        </OverviewTopLeftContainer>

        <OverviewTopRightContainer>
          <OverviewSection
            icon="walk"
            iconColor={theme.colors.primary}
            title={t('home.steps')}
            currentValue={30}
            targetText={t('home.stepsTarget', { time: 3000 })}
          />

          <OverviewSection
            icon="fire"
            iconColor={theme.colors.error}
            title={t('home.calories')}
            currentValue={30}
            targetText={t('home.caloriesTarget', { time: 60 })}
            withBorder
          />
        </OverviewTopRightContainer>
      </OverviewTopContainer>

      <OverviewBottomContainer>
        <OverviewBottomTitle>
          <Icon source='cup-water' size={24} color={theme.colors.secondary} />
          <Text>{t('home.drink')}{t('home.drinkCurrent', { time: 6 })}</Text>
        </OverviewBottomTitle>
        <Icon source='chevron-right' size={20} color={theme.colors.onSurfaceVariant} />
      </OverviewBottomContainer>
    </OverviewContainer>
  )
}

export default memo(OverviewCard)