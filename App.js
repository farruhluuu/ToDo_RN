import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import AddToList from './app/components/AddToList';

export default function App() {
  return (
    <SafeAreaView style={styles.MAIN}>
      <View style={styles.block}>
        <AddToList/>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MAIN: {
    flex: 1,
    backgroundColor: 'grey',
  },
  block: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
