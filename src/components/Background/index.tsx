import React, { ReactElement, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { ViewProps } from 'react-native';
import styles from './syles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = ViewProps & {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps): ReactElement {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>
  );
}
