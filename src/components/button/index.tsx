import { FC } from 'react'

import { Container, Title } from './styles'

import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
