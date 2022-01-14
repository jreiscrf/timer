import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'PLAY',
      ultimo: null
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'PLAY'})

    } else {
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'PAUSE'})
    }
  }

  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      botao: 'PLAY',
      ultimo: this.state.numero
    })
  }

  render(){
    return(

      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>
          {this.state.numero.toFixed(1)} 
        </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btnDois} onPress={this.vai}>
              <Text style={styles.btnTexto}>
                { this.state.botao }
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
              <Text style={styles.btnTexto}>
                STOP
              </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoTempo}> 
          {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + ' s ' : ''}  
          </Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9639F3'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    marginTop: 100,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    width: 150,
    margin: 17,
    borderRadius: 9
  },
  btnDois:{
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 40,
    width: 150,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9639F3'
  },
  areaUltima: {
    marginTop: 80,
  },
  textoTempo: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  }
});

export default App;
