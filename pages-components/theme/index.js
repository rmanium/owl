import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// import RalewayWoff2 from './../public/fonts/';

const prompt = {
  fontFamily: 'Prompt',
  src: `
    local('Prompt'),
    local('Prompt-Regular'),
    local('Prompt-SemiBold'),
    local('Prompt-Bold'),    
    url('/fonts/prompt/Prompt.woff2') format('woff2')
  `,
};

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "'Prompt', Arial",
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [prompt],
      },
    },
  },

  palette: {
    primary: {
      main: '#999999',
    },
    secondary: {
      main: '#ff9d08',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
