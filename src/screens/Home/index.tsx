import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Profile from '../../components/Profile';

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  );
}
