import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary500};
`
