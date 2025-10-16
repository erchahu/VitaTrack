import React, { memo, useRef } from "react"
import { View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
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
  const progressValue = useSharedValue(0);

  const defaultIndex = data.findIndex(item => item.key === defaultValue);

  const renderItem = ({ item, index }: { item: FlatSelectorItem; index: number }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        index - 2,
        index - 1,
        index,
        index + 1,
        index + 2,
      ];

      // 中间项为1，向上下逐渐变小
      const scale = interpolate(
        progressValue.value,
        inputRange,
        [0.5, 0.7, 1, 0.7, 0.5],
        Extrapolation.CLAMP
      );

      // 中间项完全不透明，向上下逐渐透明
      const opacity = interpolate(
        progressValue.value,
        inputRange,
        [0.2, 0.5, 1, 0.5, 0.2],
        Extrapolation.CLAMP
      );

      return {
        transform: [{ scale }],
        opacity,
      };
    });

    return (
      <View
        style={{
          height: ITEM_HEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View style={animatedStyle}>
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
        </Animated.View>
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
        height={CONTAINER_HEIGHT}
        vertical
        data={data}
        renderItem={renderItem}
        defaultIndex={defaultIndex >= 0 ? defaultIndex : 0}
        loop={false}
        style={{
          width: 300,
          height: CONTAINER_HEIGHT,
        }}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
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
