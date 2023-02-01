import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gary-200 dark:bg-black">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
