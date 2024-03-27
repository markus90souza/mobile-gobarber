import { FC } from 'react'

import { Brand, Container, Footer, Header, Title, Form } from './styles'

import logo from '@/assets/logo.png'
import { Button, Input, LinkButton } from '@/components'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInData, signInSchema } from './types'

export const SignIn: FC = () => {
  const { control, handleSubmit } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { colors } = useTheme()

  const { navigate } = useNavigation()

  const handleSignUp = () => {
    navigate('sign-up')
  }

  const onSubmit = (data: SignInData) => {
    console.log(data)
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
              <Title>Faça seu logon</Title>
            </Header>

            <Form>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={colors.line}
                    icon="mail"
                    placeholder="senha"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={colors.line}
                    icon="lock"
                    placeholder="senha"
                    secureTextEntry
                    returnKeyType="send"
                  />
                )}
              />

              <View style={{ marginTop: 8 }}>
                <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
              </View>
            </Form>

            <View style={{ marginTop: 24 }}>
              <LinkButton color="primary" title="Esqueci minha senha" />
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer>
        <LinkButton
          icon="log-in"
          color="secondary"
          title="Criar uma conta"
          onPress={handleSignUp}
        />
      </Footer>
    </>
  )
}
