import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from "./styles/theme";
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
