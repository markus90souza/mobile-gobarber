import { FC } from 'react'

import { Container, RNInput, Icon } from './styles'
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
type InputProps = TextInputProps & {
  icon?: keyof typeof Feather.glyphMap
}

export const Input: FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      {icon && <Icon name={icon} size={20} color={'#666360'} />}
      <RNInput {...rest} />
    </Container>
  )
}
