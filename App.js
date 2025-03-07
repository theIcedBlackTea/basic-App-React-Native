import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");
  const handleBtnSum=()=>{
    setResult(parseInt(numberOne)+parseInt(numberTwo))
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>S U M A   D E   D O S   N Ú M E R O S</Text>
      <TextInput
        value={numberOne}
        onChangeText={setNumberOne}
        style={styles.input}
        keyboardType='numeric'
        placeholder='Teclea el primer valor '
      />
      <TextInput
        value={numberTwo}
        onChangeText={setNumberTwo}
        style={styles.input}
        keyboardType='numeric'
        placeholder='Teclea el segundo valor '
        />
      <Button
        title="Sumar"
        onPress={handleBtnSum}
        />
      <Text style={styles.title}>Resultado: {result}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title:{
    fontWeight: 'bold',
    marginBottom: 30
  },
  input:{
    width:'100%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#efefef',
    marginBottom: 10
  },
  btn:{

  }
});
