import React, { memo, useState, useRef } from "react"
import { FlatList } from "react-native"
import LinearGradient from 'react-native-linear-gradient'
import { 
  PickerContainer, 
  RowText, 
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

const ITEM_HEIGHT = 32;
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const FlatSelectorLikeIOS = ({ data, defaultValue, onValueChange }: FlatSelectorLikeIOSProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    if (index >= 0 && index < data.length) {
      const selectedItem = data[index];
      setSelectedValue(selectedItem.key);
      onValueChange?.(selectedItem.key);
    }
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5
    });
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
      
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        onScrollEndDrag={handleScroll}
        style={{ height: CONTAINER_HEIGHT }}
        contentContainerStyle={{
          paddingVertical: ITEM_HEIGHT * 2,
        }}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        renderItem={({ item, index }) => (
          <RowText 
            height={ITEM_HEIGHT}
            onPress={() => scrollToIndex(index)}
          >
            <Text 
              style={{ 
                fontSize: item.key === selectedValue ? 26 : 16,
                fontWeight: item.key === selectedValue ? '600' : '400',
                color: item.key === selectedValue ? '#007AFF' : '#8E8E93',
                textAlign: 'center',
              }}
            >
              {item.title}
            </Text>
          </RowText>
        )}
        initialScrollIndex={data.findIndex(item => item.key === defaultValue)}
      />
    </PickerContainer>
  )
}

export default memo(FlatSelectorLikeIOS)