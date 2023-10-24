import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Roboto, sans-serif',
    },
    components: {
      MuiTabs: {
        variants: [
          {
            props: { variant: 'articlesTabs' },
            style: {
              // Agrega aquí tus estilos personalizados para la variante 'miVariante'
            },
          },
        ],
      },
    },
  });

  export default theme;