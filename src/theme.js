import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#111',
        }
    },
    typography: {
        fontFamily: 'montserrat',
        color: '#fff',
   },
   overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#181B48',
                    color: '#fff',
                },
            },
       },
       MuiChip: {
            root: {
                backgroundColor: '#4A00E0',
                color: '#fff',
                fontSize: '18px',
                fontStyle: 'italic',
                padding: '10px 20px',
                height: 'auto',
                borderRadius: '50px',
            }
       },
       MuiCard: {
            root: {
                borderRadius: '0',
                backgroundColor: 'transparent',
                outline: '0',
            },
       },
       MuiCardContent: {
            root: {
                paddingLeft: '0',
                paddingRight: '0',
                position: 'relative',

            }
       },
       MuiToolbar: {
            root: {
                height: '100px',
                backgroundColor: '#111',
                opacity: '0.5'
            }
       }
    },
});

