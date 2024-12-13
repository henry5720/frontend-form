import { GlobalStyles } from '@mui/material';

const GlobalStyle: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      }}
    />
  );
};

export default GlobalStyle;
