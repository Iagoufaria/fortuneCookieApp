import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import {styles} from '../instead/style.js'

export default function App() {
  const [message, setMessage] = useState('');
  const [imagem, setImagem] = useState(require('./src/biscoito.png'));
  function gerarMsg(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
      return null; // Retorna null se o array estiver vazio
    }
    
    // Gera um índice aleatório dentro do intervalo válido do array
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    
    // Retorna a mensagem correspondente ao índice aleatório gerado
    setMessage(mensagens[indiceAleatorio]);

    setImagem(require('./src/biscoitoAberto.png'))
    
  }
  
  // Exemplo de uso:
  const mensagens = [
    '"A vida trará coisas boas se tiver paciência."',
    '"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."',
    '"Não compense na ira o que lhe falta na razão."',
    '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
    '"A maior de todas as torres começa no solo."',
    '"Não há que ser forte. Há que ser flexível."',
    '"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"',
    '"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."',
    '"A juventude não é uma época da vida, é um estado de espírito."',
    '"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."'
  ];

  

  function resetMsg(){
    setMessage('');
    setImagem(require('./src/biscoito.png'))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Biscoito da sorte
      </Text>

    <Image style={styles.biscoitoImg}
    source={imagem}
    />

    <Text style={styles.textMesage}>{message}</Text>

    <TouchableOpacity style={styles.button} onPress={gerarMsg}>
      <Text style={styles.buttonText}>
        Quebrar biscoito
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={resetMsg}>
      <Text style={styles.buttonText}>
        Resetar
      </Text>
    </TouchableOpacity>
    </View>
  );
}


