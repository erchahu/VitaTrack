import { Card, Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledCard = styled(Card)<{ backgroundColor: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-vertical: 8px;
  elevation: 2;
  background-color: ${props => props.backgroundColor};
`;

export const CardContent = styled(Card.Content)`
  height: 100%;
  padding-vertical: 16px;
  padding-horizontal: 16px;
`;

export const TopSection = styled.View`
  margin-bottom: 8px;
`;

export const IconTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-weight: 600;
  margin-left: 8px;
`;

export const MiddleSection = styled.View`
  margin-bottom: 12px;
  min-height: 24px;
  justify-content: center;
`;

export const Subtitle = styled(Text)<{ color: string }>`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.color};
`;

export const StartText = styled(Text)<{ color: string }>`
  font-style: italic;
  font-size: 14px;
  color: ${props => props.color};
`;

export const BottomSection = styled.View`
  /* 自定义组件区域 */
  flex: 1;
`;