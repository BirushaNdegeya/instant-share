import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="headlineMedium">Accueil</Text>
    </View>
  );
}
