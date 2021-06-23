import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Matheus</Text>
        </View>

        <Text>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
