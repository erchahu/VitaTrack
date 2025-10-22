import React, { memo } from 'react';
import { Icon, Text, useTheme } from 'react-native-paper';
import { OverviewTopRightSection, Row, CurrentValueText, TargetValueText } from './style';

interface OverviewSectionProps {
  icon: string;
  iconColor?: string;
  title: string;
  currentValue: number | string;
  targetText: string;
  withBorder?: boolean;
  onPress?: () => void;
}

const OverviewSection = ({
  icon,
  iconColor,
  title,
  currentValue,
  targetText,
  withBorder = false,
  onPress,
}: OverviewSectionProps) => {
  const theme = useTheme();

  return (
    <OverviewTopRightSection withBorder={withBorder}>
      <Row justifyContent='space-between'>
        <Row justifyContent='flex-start'>
          <Icon source={icon} size={24} color={iconColor || theme.colors.primary} />
          <Text>{title}</Text>
        </Row>
        <Icon source='chevron-right' size={20} color={theme.colors.onSurfaceVariant} />
      </Row>
      <Row alignItems='flex-end'>
        <CurrentValueText>{currentValue}</CurrentValueText>
        <TargetValueText>{targetText}</TargetValueText>
      </Row>
    </OverviewTopRightSection>
  );
};

export default memo(OverviewSection);
