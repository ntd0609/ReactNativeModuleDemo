import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  children?: ReactNode;
  isDisabled?: boolean;
  type?: 'primary' | 'secondary';
}
