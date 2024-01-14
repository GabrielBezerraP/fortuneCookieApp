import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      Img: require('./src/biscoito.png'),
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.reiniciar = this.reiniciar.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte, Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vale mais do que muito conhecimento.',
      'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
      'Uma bela flor é incompleta sem as suas folhas.',
      'Sem o fogo do entusiasmo, não há o calor da vitória.',
      'O riso é a menor distância entre duas pessoas.',
      'Os defeitos são mais fortes quando o amor é fraco.',
      'Amizade e Amor são coisas que se unem num piscar de olhos.',
      'Surpreender e ser surpreendido é o segredo do amor.',
      'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
      'A paciência na adversidade é sinal de um coração sensível.',
      'A sorte favorece a mente bem preparada.',
      'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
      'Quem olha para fora sonha; quem olha para dentro acorda.',
      'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',
      'Espere pelo mais sábio dos conselhos: o tempo.',
      'Todas as coisas são difíceis antes de se tornarem fáceis.',
      'Se você se sente só é porque construiu muros ao invés de pontes.',
      'Vencer é 90 por cento suor e 10 por cento de engenho.',
      'O amor está sempre mais próximo do que você imagina.',
      'Você é do tamanho do seu sonho.',
      'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.',
      'O conhecimento é a única virtude e a ignorância é o único vício.',
      'O nosso primeiro e último amor é… o amor-próprio.',
    ];
  }
  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
      Img: require('./src/biscoitoAberto.png')
    })
  }

  reiniciar() {

    this.setState({
      textoFrase: '',
      Img: require('./src/biscoito.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.Img}
          style={styles.image}
        />

        <Text style={styles.texto}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.textoTouch} onPress={this.quebraBiscoito}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttontexto}>"Quebrar Biscoito"</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textoTouch2} onPress={this.reiniciar}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttontexto}>Reiniciar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 75
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    margin: 30,
    fontStyle: 'italic'
  },
  image: {
    width: 200,
    height: 200,
    alignItems: 'center'
  },
  textoTouch: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    margin: 20
  },
  textoTouch2: {
    width: 120,
    height: 50,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    backgroundColor: 'white',
    margin: 20
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple'
  }

})

export default App;