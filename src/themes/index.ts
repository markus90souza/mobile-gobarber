import { DefaultTheme } from 'styled-components/native'
import { colors } from './tokens/colors'
import { fonts } from './tokens/fonts'

export const theme: DefaultTheme = {
  colors,
  fonts,
} as const
