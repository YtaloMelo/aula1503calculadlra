import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [soma, setSoma] = useState(0);
  const [subtrair, setSubtrair] = useState(0);
  const [dividir, setDividir] = useState(0);
  const [multiplicar, setMultiplicar] = useState(0);



  function somar(){
    let num1;
    let num2;
    let resultado;

    num1 = n1;
    num2 = n2;
    resultado = parseInt(num1) + parseInt(num2);

    setSoma(resultado);
  }

  function sub(){
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    resultado = num1 - num2;

    setSubtrair(resultado);
  }

  function div(){
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    resultado = num1 / num2;

    setDividir(resultado);

    if (num1 == 0 || num2 == 0){
        setDividir(' NÃO É POSSIVEL DIVIDIR POR 0')
    } 
  }

  function mult(){
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(n1);
    num2 = parseInt(n2);
    resultado = num1 * num2;

    setMultiplicar(resultado);
  }
  function limpar(){
    setN1('');
    setN2('');
    
    setDividir('');
    setSoma('');
    setSubtrair('');
    setMultiplicar('');

  }

  

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        N1
      </Text> 
      <TextInput 
        value={n1} 
        onChangeText={(text)=>setN1(text)}
        style={estilos.input}
        keyboardType="number"
        placeholder="Digite um numero"/> 

      <Text style={estilos.texto}>
        N2
      </Text> 
      <TextInput 
        value={n2} 
        onChangeText={(text)=>setN2(text)}
        style={estilos.input}
        keyboardType="number"
        placeholder="Digite um numero"/> 

      <Text>Soma={soma}</Text>
      <Text>Subtração={subtrair}</Text>
      <Text>Divisão={dividir}</Text>
      <Text>Multiplição={multiplicar}</Text>
      
      <View style={estilos.buttons}>
      <TouchableOpacity 
        onPress={somar}
        style={estilos.button}>
        <Text>
          +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={sub}
        style={estilos.button}>
        <Text>
          -
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={div}
        style={estilos.button}>
        <Text>
          /
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={mult}
        style={estilos.button}>
        <Text>
          *
        </Text>
      </TouchableOpacity>
      
      
      </View>
      
      <TouchableOpacity 
        onPress={limpar}
        style={estilos.button}>
        <Text>
          LIMPAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#000",
    fontSize: 12
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width:"80%"
  },
  buttons: {
    flexDirection:'row',
    gap: 8,
    height: 36
  },
  button:{
    
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8
  }
});