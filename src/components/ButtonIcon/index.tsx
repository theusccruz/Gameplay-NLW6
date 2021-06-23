import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Discording from '../../assets/discord.png';
import styles from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  children: string;
};

export default function ButtonIcon({ children, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discording} style={styles.icon} />
      </View>

      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
