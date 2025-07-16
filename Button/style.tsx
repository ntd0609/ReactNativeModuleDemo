import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const defaultTheme = {
  primary: { button: '#007bff', text: '#ffffff' },
  secondary: { button: '#EBF4FF', text: '#007bff', shadow: '#21252914' },
};

export interface ButtonStyles {
  Text: TextStyle;
  TextSecondary: TextStyle;
  View: ViewStyle;
  ViewSecondary: ViewStyle;
  Disabled: ViewStyle;
  PressIn: ViewStyle;
  Container: ViewStyle;
}

export const styles: ButtonStyles = StyleSheet.create<ButtonStyles>({
  Container: {
    width: '100%',
  },
  Text: {
    color: defaultTheme.primary.text,
    fontWeight: 'bold',
  },
  TextSecondary: {
    color: defaultTheme.secondary.text,
  },
  View: {
    backgroundColor: `${defaultTheme.primary.button}`,
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
  },
  ViewSecondary: {
    backgroundColor: `${defaultTheme.secondary.button}`,
    boxShadow: `0px 0px 1px 0px ${defaultTheme.secondary.shadow}`,
  },
  Disabled: {
    backgroundColor: `${defaultTheme.primary.button}80`,
  },
  PressIn: {
    backgroundColor: `${defaultTheme.primary.button}80`,
  },
});

// Read me
// Opacity: https://codepen.io/chriscoyier/pen/XjbzrW
//
