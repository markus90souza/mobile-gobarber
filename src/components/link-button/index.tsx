import { FC } from 'react'

import { Container, Icon, Title } from './styles'

import { Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

type LinkButtonProps = TouchableOpacityProps & {
  title: string
  icon?: keyof typeof Feather.glyphMap
  color: 'primary' | 'secondary'
}
export const LinkButton: FC<LinkButtonProps> = ({
  color = 'primary',
  title,
  icon,
  ...rest
}) => {
  return (
    <Container color={color} {...rest}>
      {icon && <Icon color={color} name={icon} size={20} />}
      <Title color={color}>{title}</Title>
    </Container>
  )
}
