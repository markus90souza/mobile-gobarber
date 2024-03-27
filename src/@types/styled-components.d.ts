import 'styled-components/native'

declare module 'styled-components/native' {
  export interface Colors {
    background: string
    header: string
    light: string
    backgroundPrimary: string
    white: string
    text: string
    yellow: string
    textDetail: string
    title: string
    line: string
    main: string
    mainLight: string
    success: string
    shape: string
    shapeDark: string
  }

  export interface Fonts {
    primary400: string
    primary500: string
  }

  export interface DefaultTheme {
    colors: Colors
    fonts: Fonts
  }
}
