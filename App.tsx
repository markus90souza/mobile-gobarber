import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { AppRoutes } from '@/routes'
import { theme } from '@/themes'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { useFonts } from 'expo-font'
import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab'

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#232129' }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}
        />

        <AppRoutes />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
