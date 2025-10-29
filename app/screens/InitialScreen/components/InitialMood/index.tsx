import { memo } from 'react';
import { 
  Container, 
  MoodItemPressable, 
  MoodItemContainer, 
  MoodItemTag, 
  TagText, 
  LottieAnimation, 
  IconImage 
} from './style';
import { animations, AnimationType } from '@/assets/animations';
import { images } from '@/assets';

interface MoodItemProps {
  top: number;
  left: number;
  title: string;
  ele: AnimationType;
  color: string;
  onPress?: (item: Omit<MoodItemProps, 'onPress'>) => void;
}

const MoodItem = memo(({ top, left, ele, title, color, onPress }: MoodItemProps) => {
  const handlePress = () => {
    onPress?.({ top, left, ele, title, color });
  };

  return (
    <MoodItemPressable top={top} left={left} onPress={handlePress}>
      <MoodItemContainer>
        <LottieAnimation 
          source={animations[ele]} 
          autoPlay 
          loop 
        />
        <MoodItemTag>
          <IconImage 
            tintColor={color}
            source={images.tag_right}
          />
          <TagText color={color}>{title}</TagText>
        </MoodItemTag>
      </MoodItemContainer>
    </MoodItemPressable>
  );
});

interface InitialMoodProps {
  onMoodPress?: (mood: Omit<MoodItemProps, 'onPress'>) => void;
}

const InitialMood = ({ onMoodPress }: InitialMoodProps) => {
  const moodMap: Omit<MoodItemProps, 'onPress'>[] = [
    { title: '开心', ele: 'mood_happy', top: 10, left: 20, color: '#FF6B6B' },
    { title: '难过', ele: 'mood_sad', top: 30, left: 70, color: '#4ECDC4' },
    { title: '消极', ele: 'mood_depressed', top: 60, left: 40, color: '#45B7D1' },
    { title: '愤怒', ele: 'mood_anger', top: 80, left: 10, color: '#FFA500' },
    { title: '佛系', ele: 'mood_peace', top: 100, left: 40, color: '#96CEB4' },
  ];

  return (
    <Container>
      {moodMap.map(item => (
        <MoodItem 
          {...item} 
          key={item.ele} 
          onPress={onMoodPress}
        />
      ))}
    </Container>
  );
};

export default memo(InitialMood);