import styled from 'styled-components/native';
import { View, Text, Image, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

export const Container = styled(View)`
  flex: 1;
  position: relative;
  background-color: #f5f5f5;
  min-height: 400px;
`;

export const MoodItemPressable = styled(Pressable)<{ top?: number; left?: number }>`
  position: absolute;
  top: ${props => props.top || 0}%;
  left: ${props => props.left || 0}%;
  align-items: center;
  justify-content: center;
`;

export const MoodItemContainer = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const MoodItemTag = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  margin-top: 4px;
  position: absolute;
  top: -20px;
  left: 30px;
`;

export const TagText = styled(Text)<{ color?: string }>`
  font-size: 14px;
  color: ${props => props.color || '#333'};
  margin-left: 4px;
  font-weight: 500;
  position: absolute;
  left: 38px;
  top: 16px;
`;

export const LottieAnimation = styled(LottieView)`
  width: 100px;
  height: 100px;
`;

export const IconImage = styled(Image)`
  width: 80px;
  aspect-ratio: 2 / 1;
`;