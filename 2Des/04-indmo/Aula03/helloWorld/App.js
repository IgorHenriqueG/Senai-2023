import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>SENAI 2024</Text>
      <StatusBar style="auto" />
      <br/>
      <Image 
        style={styles.Imag}
        source={{
          // uri: 'https://media4.giphy.com/headers/gerhardfunk/RLQl7UAouoWk.gif',
          uri: 'https://media3.giphy.com/media/jBAlc2a8pXVRe/giphy.gif',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imag: {
    width: 500,
    height: 450
  },
  Text: {
    color: '#ffffff',
    fontSize: 50,
    letterSpacing: 10,
    textTransform: 'uppercase',
  }
});
