import UserDataForm from './pages/UserDataForm'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 基本的 CSS 重置 */}
      <GlobalStyles />
      <UserDataForm></UserDataForm>
    </ThemeProvider>
  )
}

export default App
