import { memo } from 'react';
import FlatSelectorLikeIOS from '../../../../styles/FlatSelectorLikeIOS';
import { AgeContainer } from './style';

const INIT_AGE = 6;
const FINAL_AGE = 99;
const AGE_GAP = FINAL_AGE - INIT_AGE + 1;

const InitailAge = () => {
  const ageArray = Array.from(
    { length: AGE_GAP },
    (_, index) => index + INIT_AGE,
  ).map(item => ({
    key: item.toString(),
    title: item.toString(),
  }));

  return (
    <AgeContainer>
      <FlatSelectorLikeIOS 
        data={ageArray} 
        defaultValue={INIT_AGE.toString()}
      />
    </AgeContainer>
  );
};

export default memo(InitailAge);
