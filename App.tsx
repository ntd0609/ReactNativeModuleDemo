import { StyleSheet, View } from 'react-native';
import { Button } from './Button';
import NativeDemo from './NativeDevelopment/specs/NativeDemo';

function App() {
  const test = NativeDemo.multiply(3, 5);
  const helloword = NativeDemo.helloword();
  const hideNav = () => {
    NativeDemo.hideNavigationBar();
  };
  const showNav = () => {
    NativeDemo.showNavigationBar();
  };
  const toogleNav = () => {
    NativeDemo.toggleNavigationBar();
  };

  return (
    <View style={styles.container}>
      <Button>{test}</Button>
      <Button>{helloword}</Button>
      <Button onPress={hideNav}>Hide</Button>
      <Button onPress={showNav}>Show</Button>
      <Button onPress={toogleNav}>Toggle</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    margin: 30,
  },
});

export default App;
