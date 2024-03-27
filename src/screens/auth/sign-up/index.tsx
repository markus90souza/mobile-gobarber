import { FC } from 'react'

import { Brand, Container, Footer, Header, Title, Form } from './styles'

import logo from '@/assets/logo.png'
import { Button, Input, LinkButton } from '@/components'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export const SignUp: FC = () => {
  const { colors } = useTheme()

  const { goBack } = useNavigation()

  const handleSignIn = () => {
    goBack()
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Brand source={logo} />

            <Header>
              <Title>Crie sua conta</Title>
            </Header>

            <Form>
              <Input
                placeholderTextColor={colors.line}
                icon="user"
                placeholder="Seu nome completo"
              />

              <Input
                placeholderTextColor={colors.line}
                icon="mail"
                placeholder="seu@email.com"
              />

              <Input
                placeholderTextColor={colors.line}
                icon="lock"
                placeholder="senha"
              />

              <View style={{ marginTop: 8 }}>
                <Button title="Cadastrar" />
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer>
        <LinkButton
          onPress={handleSignIn}
          icon="arrow-left"
          color="primary"
          title="Voltar para o login"
        />
      </Footer>
    </>
  )
}
