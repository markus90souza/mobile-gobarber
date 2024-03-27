import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn, SignUp } from '@/screens/auth'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="sign-in" component={SignIn} />
      <Screen name="sign-up" component={SignUp} />
    </Navigator>
  )
}
