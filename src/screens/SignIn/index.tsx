import React, { ReactElement } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import Illustration from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

export default function SignIn(): ReactElement {
  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} e organize {'\n'} suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
        </Text>

        <ButtonIcon activeOpacity={0.7}>Entrar com Discord</ButtonIcon>
      </View>
    </View>
  );
}
