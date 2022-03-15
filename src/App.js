import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={darkTheme}>
          <Route exact path="/" component={Home} />
        </ThemeProvider>
      </Switch>
    </Router>

  )
}

export default App;
