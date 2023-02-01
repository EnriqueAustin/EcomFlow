import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './components/ProductsLists';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gary-200 dark:bg-black">
      <View className='flex-row w-full gap-5'>
        <Text className='text-2xl font-bold dark:text-white' >
          New collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
