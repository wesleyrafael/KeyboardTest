import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView, KeyboardProvider, KeyboardStickyView, KeyboardToolbar } from 'react-native-keyboard-controller';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const FOOTER_SIZE = 60;

const Bottom = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <KeyboardStickyView 
      style={styles.stickyView} 
      offset={{ 
        opened: bottom
      }}
    >
      <View style={styles.buttonContainer}>
        <Button title='Submit' />
      </View>
    </KeyboardStickyView>
  );
}

export default function App() {
  
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAwareScrollView contentContainerStyle={styles.scrollView} bottomOffset={FOOTER_SIZE}>

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
          <Bottom />
          
        </SafeAreaView>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: '10%',
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    marginBottom: 20,
  },
  stickyView: {
    height: FOOTER_SIZE, 
  },
  buttonContainer: {
    backgroundColor: 'black',
    height: '100%'
  }
});
