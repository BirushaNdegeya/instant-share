import { Tabs } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <PaperProvider theme={theme}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="files"
          options={{
            title: 'Fichiers',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="folder" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Paramètres',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
} 