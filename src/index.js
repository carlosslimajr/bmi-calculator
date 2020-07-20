import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [altura, setAltura] = useState(0);
  const [massa, setMassa] = useState(0);
  const [imc, setImc] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcularImc = () => {
    //const result = this.peso / (this.altura * this.altura);
    let imc = (massa / (altura * altura)).toFixed(2);
    let resultado = '';
    if (imc < 16) {
      resultado = 'Magreza Grave';
    } else if (imc < 17) {
      resultado = 'Magreza Moderada';
    } else if (imc < 18.5) {
      resultado = 'Magreza';
    } else if (imc < 25) {
      resultado = 'Saudável';
    } else if (imc < 30) {
      resultado = 'Obesidade Grau I';
    } else if (imc < 40) {
      resultado = 'Obesidade Grau II';
    } else {
      resultado = 'Obesidade Grave ';
    }
    setImc(imc);
    setResultado(resultado);
  };
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          placeholder="Massa"
          keyboardType="numeric"
          onChangeText={(massa) => {
            setMassa(massa);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={() => {}}
          style={styles.input}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          onChangeText={(altura) => {
            setAltura(altura);
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={styles.button}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onPress={calcularImc}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{imc}</Text>
      <Text style={[styles.resultado, {fontSize: 35}]}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  entrada: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 50,
    padding: 15,
  },
});
