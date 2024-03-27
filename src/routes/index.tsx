import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './auth-stack'

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
