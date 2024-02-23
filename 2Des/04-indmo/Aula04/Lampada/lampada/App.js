import { useState } from 'react';
import { StyleSheet, View, Switch, Image } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Image
        source={url='https://i.ebayimg.com/images/g/cx8AAOSwAJdkj-hi/s-l1200.jpg'}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "https://i.pinimg.com/736x/98/d5/24/98d524c8325b668f3cb591b3ab669ef6.jpg"
            : "https://www.nicelembrancinhas.com.br/image/cache/catalog/ONEPIECE/ONE%20PIECE%20LUFFY%20SITE-650x650.jpg"
        }}
        style={styles.lampada}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '200px',
    height: '200px'
  },
  lampada: {
    width: '400px',
    height: '400px',
  }
});