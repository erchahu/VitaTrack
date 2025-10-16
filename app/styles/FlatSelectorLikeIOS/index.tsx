import React, { memo, useRef } from "react"
import { View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import {
  PickerContainer,
  GradientOverlay,
  SelectionIndicator
} from "./style"
import { Text, useTheme } from "react-native-paper";

interface FlatSelectorItem {
  key: string;
  title: string;
}

interface FlatSelectorLikeIOSProps {
  data: Array<FlatSelectorItem>;
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

const ITEM_HEIGHT = 60;
const VISIBLE_ITEMS = 7;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const FlatSelectorLikeIOS = ({ data, defaultValue, onValueChange }: FlatSelectorLikeIOSProps) => {
  const carouselRef = useRef<any>(null);
  const theme = useTheme();
  const progressValue = useSharedValue(0);

  const defaultIndex = data.findIndex(item => item.key === defaultValue);

  // 设置初始 progressValue 以确保默认选中项居中
  React.useEffect(() => {
    if (defaultIndex >= 0) {
      progressValue.value = defaultIndex;
    }
  }, []);

  const renderItem = ({ item, index }: { item: FlatSelectorItem; index: number }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const distance = Math.abs(progressValue.value - index);

      // 中间最大36,向上下对称渐变到20
      const fontSize = interpolate(
        distance,
        [0, 1, 2, 3],
        [36, 28, 24, 20],
        Extrapolation.CLAMP
      );

      // 中间项不透明度为1(选中),其他渐变到0.5
      const opacity = interpolate(
        distance,
        [0, 1, 2, 3],
        [1, 0.7, 0.5, 0.4],
        Extrapolation.CLAMP
      );

      return {
        fontSize,
        opacity,
      };
    });

    const textColorStyle = useAnimatedStyle(() => {
      const distance = Math.abs(progressValue.value - index);
      const isSelected = distance < 0.5;

      return {
        color: isSelected ? theme.colors.primary : theme.colors.onSurface,
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
        <Animated.Text
          style={[
            {
              fontWeight: '600',
              textAlign: 'center',
            },
            animatedStyle,
            textColorStyle,
          ]}
        >
          {item.title}
        </Animated.Text>
      </View>
    );
  };

  return (
    <PickerContainer>
      {/* 顶部渐变遮罩 */}
      <GradientOverlay
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.4)', 'transparent']}
        locations={[0, 0.3, 0.6, 1]}
        pointerEvents="none"
        top
      >
        <LinearGradient
          colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.3)', 'transparent']}
          locations={[0, 0.4, 0.7, 1]}
          style={{ flex: 1 }}
        />
      </GradientOverlay>

      {/* 底部渐变遮罩 */}
      <GradientOverlay
        colors={['transparent', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
        locations={[0, 0.4, 0.7, 1]}
        pointerEvents="none"
        bottom
      >
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
          locations={[0, 0.3, 0.6, 1]}
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
        pagingEnabled
        snapEnabled
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
