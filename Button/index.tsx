import { Pressable, PressableProps, Text, View } from 'react-native';

import React, { useState } from 'react';
import { styles } from './style';
import { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'primary',
    disabled = false,
    children,
    onPress = () => {},
    onPressIn = () => {},
    onPressOut = () => {},
    onLongPress = () => {},
    onFocus = () => {},
    ...restProps
  } = props;

  const [pressIn, setPressIn] = useState(false);
  const handlePressIn: PressableProps['onPressIn'] = (event) => {
    setPressIn(true);
    onPressIn?.(event);
  };

  const handlePressOut: PressableProps['onPressOut'] = (event) => {
    setPressIn(false);
    onPressOut?.(event);
  };

  const style = {
    Text: [styles.Text],
    View: [styles.View],
  };
  if (disabled) {
    style.View = [...style.View, styles.Disabled];
  }
  if (pressIn) {
    style.View = [...style.View, styles.PressIn];
  }
  if (type === 'secondary') {
    style.Text = [...style.Text, styles.TextSecondary];
    style.View = [...style.View, styles.ViewSecondary];
  }
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={onLongPress}
      onFocus={onFocus}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      style={styles.Container}
    >
      <View style={style.View}>
        <Text style={style.Text}>{children ? children : 'Button'}</Text>
      </View>
    </Pressable>
  );
};

export { Button };
