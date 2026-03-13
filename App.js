import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView, KeyboardProvider, KeyboardStickyView, KeyboardToolbar } from 'react-native-keyboard-controller';

const FOOTER_SIZE = 60;

export default function App() {
  return (
    <KeyboardProvider>
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.scrollView} bottomOffset={FOOTER_SIZE}>

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={[styles.input, { borderColor: 'red'}]} keyboardType="number-pad" returnKeyType="next" />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />

      <TextInput style={styles.input} />
      </KeyboardAwareScrollView>

      <KeyboardToolbar>
        <KeyboardToolbar.Prev />
        <KeyboardToolbar.Next />
        <KeyboardToolbar.Done />
      </KeyboardToolbar>

      <KeyboardStickyView style={styles.stickyView}>
        <View style={styles.buttonContainer}>
          <Button title='Submit' />
        </View>
      </KeyboardStickyView>
    </View>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '40%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '10%',
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    width: '100%',
    borderRadius: 4,
    marginBottom: 20,
  },
  stickyView: {
    height: 60, 
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: 'black',
    height: '100%'
  }
});
