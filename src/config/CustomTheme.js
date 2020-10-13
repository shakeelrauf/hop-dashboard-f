import { greyBgColor, orangeColor, whiteColor, darkOrangeColor } from './constants';
export const customLightTheme = {
  background: {
    default: greyBgColor
  },
  primary: {
    light: orangeColor,
    main: orangeColor,
    dark: darkOrangeColor,
    contrastText: whiteColor,
  },
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px'
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
};

export const customDarkTheme = {
  background: {
    default: '#222222'
  },
  text: {
    primary: '#ffffff'
  }
};