import { StyleSheet, Text, View } from 'react-native';
import { Main } from '../../components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function Page() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
