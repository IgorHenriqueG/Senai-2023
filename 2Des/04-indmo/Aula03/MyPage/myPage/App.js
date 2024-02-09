import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={{width: 250, height: 400}} 
        source={{
          uri: 'https://i.gifer.com/origin/0d/0dedeabfad9b53e09d60bb39e3b50533_w200.gif',
        }}/>
        <br/>
        <br/>
        <br/>
        <Text style={styles.text}>Igor Henrique</Text>
        <Text style={styles.text}>Desenvolvedor Mobile</Text>
        <Text style={styles.text}>2024 ©</Text>
        <br/>
        <br/>
        <br/>
        <Text style={styles.text}>Formação</Text>
        <Text style={styles.text}>Cursando Desenvolvimento de Sistemas</Text>
        <br/>
        <br/>
        <br/>
        <Text style={styles.text}>Contato</Text>
        <Button title="Github" color="#d3d" onPress={() => Linking.openURL('https://github.com/Igorhenriqueg')}/>


      <StatusBar style="auto" />
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
  text: {
    color: 'white',
    fontSize: 20
  }
});
