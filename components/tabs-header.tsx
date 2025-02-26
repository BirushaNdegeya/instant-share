import { router } from 'expo-router';
import { Appbar } from 'react-native-paper';

export function TabsHeader() {
  return (
    <Appbar.Header>
      <Appbar.Content title="Instant Share" subtitle={'Subtitle'} color={'#0053db'} />
      <Appbar.Action icon="magnify" onPress={() => { router.navigate('/(root)/search') }} />
      <Appbar.Action icon={"account-circle"} onPress={() => { router.navigate('/(root)/profile') }} />
    </Appbar.Header>
  )
}