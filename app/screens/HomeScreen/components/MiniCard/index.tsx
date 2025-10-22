import React, { memo } from 'react';
import { useTheme, Icon } from 'react-native-paper';
import {
  StyledCard,
  CardContent,
  TopSection,
  IconTitleContainer,
  MiddleSection,
  Subtitle,
  BottomSection,
  Title,
} from './style';

export interface MiniCardProps {
  title: string;
  icon: string;
  components?: React.ReactNode;
  subtitle?: string;
  onPress?: () => void;
}

const MiniCard: React.FC<MiniCardProps> = ({
  title,
  icon,
  components,
  subtitle,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <StyledCard
      backgroundColor={theme.colors.surface}
      onPress={onPress}
      mode="contained"
    >
      <CardContent>
        <TopSection>
          <IconTitleContainer>
            <Icon source={icon} size={24} color={theme.colors.primary} />
            <Title variant="titleMedium">{title}</Title>
          </IconTitleContainer>
        </TopSection>

        <MiddleSection>
          <Subtitle variant="bodyLarge" color={theme.colors.primary}>
            {subtitle}
          </Subtitle>
        </MiddleSection>

        {components && <BottomSection>{components}</BottomSection>}
      </CardContent>
    </StyledCard>
  );
};

export default memo(MiniCard);
