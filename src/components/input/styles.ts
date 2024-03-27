import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  margin-right: 8px;
`

export const RNInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`
