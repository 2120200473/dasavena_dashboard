import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img src="/public/assets/logos/logo-dasavena.png" alt="Logotipo Dasavena" width="500" height="600"></img>
  );
};
