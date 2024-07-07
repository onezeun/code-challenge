import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
    tagBgColor:string;
    gradientBackground: string;
    dropShadow: string;
    boxShadow: string;
  }
}
