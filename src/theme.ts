import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f1115',
      paper: '#1c1f26',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
});

export default theme;
