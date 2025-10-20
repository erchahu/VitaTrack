import { memo, useState, useCallback } from 'react';
import { Button, Dialog, Portal, RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { ChangeBtn, Container, ContainerTitle } from './style';

const ProfileScreen = () => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const showDialog = useCallback(() => setVisible(true), []);
  const hideDialog = useCallback(() => setVisible(false), []);

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
  }, []);

  const handleConfirm = useCallback(() => {
    i18n.changeLanguage(selectedLanguage);
    hideDialog();
  }, [selectedLanguage, i18n, hideDialog]);

  return (
    <Container>
      <ContainerTitle variant="headlineMedium">
        {t('profile.title')}
      </ContainerTitle>

      <ChangeBtn mode="contained" onPress={showDialog}>
        {t('profile.changeLanguage')}
      </ChangeBtn>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{t('profile.selectLanguage')}</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              onValueChange={handleLanguageChange}
              value={selectedLanguage}
            >
              <RadioButton.Item label="English" value="en" />
              <RadioButton.Item label="中文" value="zh" />
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>{t('common.cancel')}</Button>
            <Button onPress={handleConfirm}>{t('common.confirm')}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Container>
  );
};

export default memo(ProfileScreen);