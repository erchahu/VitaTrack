import React, { memo, useRef } from "react"
import { View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
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
