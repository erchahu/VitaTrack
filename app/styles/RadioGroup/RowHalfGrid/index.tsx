import { JSX, memo, ReactNode, useCallback, useState } from 'react';
import { RadioItem, RowContainer } from './style';

// 基础接口，包含必需的属性
interface BaseRadioItem {
  key: string;
  title?: string;
  desc?: string;
}

// 使用交集类型而不是继承
export type RadioItemProps<T = object> = BaseRadioItem & T;

interface RowsGroupProps<T = object> {
  data: Array<RadioItemProps<T>>;
  onChange?: (value: string) => void;
  children?: (item: RadioItemProps<T>) => ReactNode;
}

// 使用更明确的泛型约束
const RowHalfGrid = <T extends object = object>({ 
  data, 
  onChange, 
  children 
}: RowsGroupProps<T>) => {
  const [checkValue, setCheckValue] = useState<string>('');

  const handlePress = useCallback((key: string) => {
    setCheckValue(key);
    onChange?.(key);
  }, [onChange]);

  return (
    <RowContainer>
      {data.map(item => (
        <RadioItem
          key={item.key}
          isChecked={checkValue === item.key}
          onPress={() => handlePress(item.key)}
        >
          {children?.(item)}
        </RadioItem>
      ))}
    </RowContainer>
  );
};

export default memo(RowHalfGrid) as <T = object>(props: RowsGroupProps<T>) => JSX.Element;