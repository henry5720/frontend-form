import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif', // 設置全局字型為 Inter
    h1: {
      fontSize: '32px',
    },
    body1: {
      fontSize: '12px',
      color: '#555',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

export { theme };
