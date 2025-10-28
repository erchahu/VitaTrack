import { memo, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AgeContainer, AgeInputWrapper } from './style';

const INIT_AGE = 6;
const FINAL_AGE = 99;

const InitialAge = () => {
  const [age, setAge] = useState(INIT_AGE.toString());

  const handleAgeChange = (value: string) => {
    // 只允许输入数字
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue === '') {
      setAge('');
      return;
    }

    const ageNumber = parseInt(numericValue, 10);

    // 限制范围在 6-99 之间
    if (ageNumber >= INIT_AGE && ageNumber <= FINAL_AGE) {
      setAge(numericValue);
    } else if (ageNumber < INIT_AGE) {
      setAge(INIT_AGE.toString());
    } else if (ageNumber > FINAL_AGE) {
      setAge(FINAL_AGE.toString());
    }
  };

  return (
    <AgeContainer>
      <AgeInputWrapper>
        <TextInput
          mode="outlined"
          label="Age"
          value={age}
          onChangeText={handleAgeChange}
          keyboardType="numeric"
          maxLength={2}
          style={{ width: 300 }}
        />
      </AgeInputWrapper>
    </AgeContainer>
  );
};

export default memo(InitialAge);
