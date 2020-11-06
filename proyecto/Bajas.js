import React, {Component,setState} from 'react';
import {View, Text,StyleSheet,FlatList,StatusBar, Alert} from 'react-native';
import Celda from './celdabajas';

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas:[],
      Citas2: [],
    };
   
    
  }
  componentDidMount= async ()=>{
    let _this=this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
          _this.setState({citas: JSON.parse(xhttp.responseText)});
          _this.setState({Citas2: xhttp.responseText});
  
          console.log(_this.state.citas);
        }
      };
    xhttp.open("GET", "http://danielguzman27.000webhostapp.com/VerCitas.php?codigo=215511141", true);
    xhttp.send();
};
  render() {

    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      const renderItem = ({ item }) => (
        <Item title={item.Hora} />
      );
      console.log("222222222    "+this.state.citas);
    return (
       
        <View>
          {this.state.citas.map((citas,index) => (
              <Celda key={index}
              hora1={citas.Hora}
              dia1={citas.Dia}
              mes1={citas.Mes}
              codigo1={citas.Codigo}
            datosC={citas.Hora+" "+citas.Dia+" "+citas.Mes+" "+citas.Codigo}
              />
          ))}
        </View>
   
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        alignContent:'center',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });