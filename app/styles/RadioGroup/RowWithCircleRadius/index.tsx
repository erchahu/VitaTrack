import { memo, useCallback, useState } from 'react';
import { Text, useTheme } from 'react-native-paper';
import { RadioItem, RadioItemContent, RowContainer } from './style';

interface RadioItemProps {
  key: string;
  title?: string;
  desc?: string;
}

interface RowsGroupProps {
  data: Array<RadioItemProps>;
  onChange?: (value: string) => void;
  style?: {
    itemGap?: number;
  }
}

const RowsGroup = ({ data, onChange, style }: RowsGroupProps) => {
  const theme = useTheme();
  const [checkValue, setCheckValue] = useState<string>('');

  const handlePress = useCallback((key: string) => {
    setCheckValue(key);
    onChange && onChange(key)
  }, [onChange]);

  return (
    <RowContainer>
      {data.map(item => (
        <RadioItem
          key={item.key}
          isChecked={checkValue === item.key}
          onPress={() => handlePress(item.key)}
          itemGap={style?.itemGap || 20}
        >
          <RadioItemContent>
            <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
              {item.title}
            </Text>
            <Text variant="bodyMedium">{item.desc}</Text>
          </RadioItemContent>
        </RadioItem>
      ))}
    </RowContainer>
  );
};

export default memo(RowsGroup);
