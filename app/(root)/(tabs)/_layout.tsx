import { Tabs } from "expo-router";
import { colors } from '@/theme/colors'
import { TabsHeader } from "@/components/tabs-header";
import { TabBarIcon } from "@/components/tabbar-icon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{

        header: () => <TabsHeader />,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Application',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "apps" : "apps-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="photo"
        options={{
          title: 'Photos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "image" : "image-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="music"
        options={{
          title: 'Music',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "musical-note" : "musical-note-outline"}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="video"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "film" : "film-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="file"
        options={{
          title: 'Files',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "file-tray" : "file-tray-outline"}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  )
}