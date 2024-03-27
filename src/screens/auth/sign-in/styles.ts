import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: ${Platform.OS === 'android' ? 120 : 100}px;
`

export const Header = styled.View``

export const Form = styled.View`
  width: 100%;
  gap: 8px;
`

export const Brand = styled.Image``

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.primary500};
  margin: 64px 0 24px;
`

export const Footer = styled.View`
  position: absolute;
  //background-color: ${({ theme }) => theme.colors.background};
  padding-top: 16px;
  padding-bottom: ${getBottomSpace() + 16}px;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
