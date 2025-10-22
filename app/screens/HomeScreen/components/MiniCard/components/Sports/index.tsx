import { memo } from 'react';
import { Row, SportsBox, SportsCanvas, SportsCenter, SportsEmpty } from './style';
import { Icon, Text, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

interface SportsProps {
  data: { time: number; duration: number }[];
}

const SportsLine = memo(({ data }: SportsProps) => {
  return (
    <SportsCanvas>
      
    </SportsCanvas>
  );
});

const Sports = ({ data }: SportsProps) => {
  const { t } = useTranslation()
  const theme = useTheme();

  return (
    <SportsBox>
      {data.length > 0 ? (
        <SportsLine data={data} />
      ) : (
        <SportsEmpty>
          <SportsCenter>
            <Text>{t('home.sportsNone')}</Text>
          </SportsCenter>
          <Row>
            <Text style={{ color: theme.colors.outline }}>{t('home.sportsNoneStart')}</Text>
            <Icon
              source="chevron-right"
              size={20}
              color={theme.colors.outline}
            />
          </Row>
        </SportsEmpty>
      )}
    </SportsBox>
  );
};

export default memo(Sports);
