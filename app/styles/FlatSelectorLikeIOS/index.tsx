import React, { memo, useRef } from "react"
import { View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import {
  Extrapolation,
  interpolate,
} from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import {
  PickerContainer,
  GradientOverlay,
  SelectionIndicator
} from "./style"
import { Text } from "react-native-paper";

interface FlatSelectorItem {
  key: string;
  title: string;
}

interface FlatSelectorLikeIOSProps {
  data: Array<FlatSelectorItem>;
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const FlatSelectorLikeIOS = ({ data, defaultValue, onValueChange }: FlatSelectorLikeIOSProps) => {
  const carouselRef = useRef<any>(null);

  const defaultIndex = data.findIndex(item => item.key === defaultValue);

  const animationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const itemGap = ITEM_HEIGHT;
      const inputRange = [-2, -1, 0, 1, 2];

      const translateY = interpolate(
        value,
        inputRange,
        inputRange.map((v) => v * itemGap),
        Extrapolation.CLAMP
      );

      const scale = interpolate(
        value,
        inputRange,
        [0.5, 0.7, 1, 0.7, 0.5],
        Extrapolation.CLAMP
      );

      const opacity = interpolate(
        value,
        inputRange,
        [0.2, 0.5, 1, 0.5, 0.2],
        Extrapolation.CLAMP
      );

      return {
        transform: [{ translateY }, { scale }],
        opacity,
        zIndex: Math.round((1 - Math.abs(value)) * 1000),
      };
    },
    []
  );

  const renderItem = ({ item }: { item: FlatSelectorItem }) => {
    return (
      <View
        style={{
          height: ITEM_HEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: '#007AFF',
            textAlign: 'center',
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <PickerContainer>
      {/* 顶部渐变遮罩 */}
      <GradientOverlay
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.6)', 'transparent']}
        locations={[0, 0.5, 1]}
        pointerEvents="none"
        top
      >
        <LinearGradient
          colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.4)', 'transparent']}
          locations={[0, 0.3, 1]}
          style={{ flex: 1 }}
        />
      </GradientOverlay>

      {/* 底部渐变遮罩 */}
      <GradientOverlay
        colors={['transparent', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.9)']}
        locations={[0, 0.5, 1]}
        pointerEvents="none"
        bottom
      >
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.95)']}
          locations={[0, 0.7, 1]}
          style={{ flex: 1 }}
        />
      </GradientOverlay>

      {/* 选中指示器 */}
      <SelectionIndicator />

      <Carousel
        ref={carouselRef}
        width={300}
        height={ITEM_HEIGHT}
        vertical
        data={data}
        renderItem={renderItem}
        defaultIndex={defaultIndex >= 0 ? defaultIndex : 0}
        loop={false}
        style={{
          width: 300,
          height: CONTAINER_HEIGHT,
        }}
        customAnimation={animationStyle}
        onSnapToItem={(index) => {
          if (index >= 0 && index < data.length) {
            const selectedItem = data[index];
            onValueChange?.(selectedItem.key);
          }
        }}
      />
    </PickerContainer>
  )
}

export default memo(FlatSelectorLikeIOS)
