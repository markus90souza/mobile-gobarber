import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
type LinkButtonProps = {
  color: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<LinkButtonProps>`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const Title = styled.Text<LinkButtonProps>`
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.light : theme.colors.yellow};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`
export const Icon = styled(Feather)<LinkButtonProps>`
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.light : theme.colors.yellow};
`
