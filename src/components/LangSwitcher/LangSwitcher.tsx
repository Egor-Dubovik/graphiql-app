import React from 'react';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const label = { inputProps: { 'aria-label': 'en' } };

  const { i18n } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lang_code: string;
    e.target.checked ? (lang_code = 'ru') : (lang_code = 'en');
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <Typography>En</Typography>
      <Switch {...label} color="default" onChange={onChangeLang} />
      <Typography>Ru</Typography>
    </>
  );
};
