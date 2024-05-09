import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
const defaultTheme = createTheme();

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
