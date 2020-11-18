import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async=storage'

const Login = ( {navigation } ) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] =useState('');

  const StoreData = async (value) => {
    try{
      await AsyncStorage.setItem('@jwt', value)
    } catch (e){
      //saving error
    }
  }
  
  const Logar = () => {

    const credenciais = {
      email : email,
      senha : senha
    }

    fetch('http://192.168.0.30:5000/api/Account/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(credenciais)
    })
    .then(data => {
      if(data.token !== 404){
        alert('Seja bem vindo!');
        StoreData(data.token);
        navigation.push('Autenticado');
      } else {
        alert('Email ou senha inválidos, digite corretamente')
      }
    })
  }

 return (
    <View style={styles.container}>

    <Image
      style={styles.logo}
      source={{
        uri: 'https://raw.githubusercontent.com/sena-code/React-Node/main/4%20-%20Trabalhando%20com%20react-bootstrap%20e%20react-router-dom/nyous-react/src/assets/img/Logo.svg' ,
      }} 
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Digite seu email"
      />

    <TextInput
        style={styles.input}
        onChangeText={text => setSenha(text)}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={Logar()}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width:'90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop:20,
    padding: 5,
    borderRadius: 6
  },
  
  button : {
    backgroundColor : 'black',
    padding : 10,
    width: '90%',
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton : {
    color : 'white'
  }
})
export default Login;