import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import DeviceInfo from "react-native-device-info";


export default function AllApps() {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstalledApps = async () => {
      try {
        const apps = await DeviceInfo.getBrand();
        setInstalledApps(apps);
      } catch (error) {
        console.error("Error fetching installed apps:", error);
      }
      setLoading(false);
    };

    fetchInstalledApps();
  }, []);
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Installed Apps</Text>
    {loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <FlatList
        data={installedApps}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    )}
  </View>
  )
}