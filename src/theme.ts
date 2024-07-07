import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  textColor: '#E0E0E0',
  bgColor: '#181818',
  btnColor: '#333',
  gradientBackground: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
  dropShadow: 'drop-shadow(0 0 6px rgba(155, 205, 255, 0.7))'
};

export const lightTheme: DefaultTheme = {
  textColor: '#333',
  bgColor: '#F5F5F5',
  btnColor: '#E0E0E0',
  gradientBackground: 'radial-gradient(ellipse at top, #E0E0E0 0%, #F5F5F5 100%)',
  dropShadow: 'drop-shadow(0 0 6px rgba(150, 150, 150, 0.5))'
};
