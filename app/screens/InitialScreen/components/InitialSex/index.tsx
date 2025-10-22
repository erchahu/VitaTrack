import React, { memo } from 'react';
import { RowWithPadding } from '../../style';
import { Icon } from 'react-native-paper';
import { images, ImageType } from '../../../../assets/images';
import RowHalfGrid, {
  RadioItemProps,
} from '../../../../styles/RadioGroup/RowHalfGrid';
import { SexItemWrap } from './style';

// 定义扩展的接口
interface SexItemProps {
  icon: ImageType;
}

const InitialSex = () => {
  // 现在类型推断会更准确
  const sexs: RadioItemProps<SexItemProps>[] = [
    { key: '0', title: 'Male', icon: 'initial_male' },
    { key: '1', title: 'Female', icon: 'initial_female' },
  ];

  const handleSexChange = (value: string) => {
    console.log('Selected sex:', value);
  };

  return (
    <RowWithPadding>
      <RowHalfGrid<SexItemProps> data={sexs} onChange={handleSexChange}>
        {item => (
          <SexItemWrap>
            <Icon source={images[item.icon]} size={60} />
          </SexItemWrap>
        )}
      </RowHalfGrid>
    </RowWithPadding>
  );
};

export default memo(InitialSex);
