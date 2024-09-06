import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './components/Main';
import { View, StatusBar, StyleSheet} from 'react-native';
export default function App() {
  return (
      <View style={styles.contPadre}>
      </View>
  );
}
const styles = StyleSheet.create({
  contPadre:{
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
})