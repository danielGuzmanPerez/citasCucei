import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,Image} from "react-native";
import us from "./User"
global.cadena;
global.nombre;
global.codigo;
global.carrera;

export default function Login (props) {
    const {navigation} = props;
    const [formData,setFormData]= useState(defaultValue());
    
    const iniciar = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var datos= xhttp.responseText;
      var datosSeparados = datos.split(',');
      //_this.setState({res: datosSeparados[2]})
      //_this.setState({res1: datosSeparados[1]});
   //  this.setState({resultado : this.state.res });
     // _this.setState({res: xhttp.responseText});
     global.codigo= datosSeparados[1];
     global.nombre= datosSeparados[2];
     global.centro=datosSeparados[3];
     global.carrera= datosSeparados[4];
     global.cadena="Código: "+datosSeparados[1]+ "\n Nombre: " +datosSeparados[2]+"\nCentro: "+ datosSeparados[3]+"\nCarrera: "+datosSeparados[4];
     
        
     navigation.navigate('User');
}
};
      xhttp.open("GET", 'https://cuceimobile.tech/Escuela/datosudeg.php?codigo='+ formData.codigo+ '&nip='+formData.pass, true);
      xhttp.send();
      
      
    }
  
    return(
      <View>
        <View>
          <Image source={require('../proyecto/Imagenes/Escudo_CUCEI.png')} style={styles.logo}/>
        </View>

        <View>
          <TextInput 
          placeholder="Código" 
          keyboardType="number-pad"
          onChange={(e) => setFormData({...formData,codigo: e.nativeEvent.text})}
          
          />

          <TextInput 
          placeholder="Constraseña"
          secureTextEntry = {true}
          onChange={(e) => setFormData({...formData,pass: e.nativeEvent.text})}
          
          />
          <Button title="Iniciar" onPress={iniciar}/>
        </View>
      </View>
  );
 
};
function defaultValue(){
  return{
    codigo:'',
    pass:'',
  };
}

const cambiarBoton= ()=>{
  Login.boton=1;
  iniciar();
};
const styles= StyleSheet.create({
  logo:{
   
    width:100,
    height:100,
    borderRadius:50,
    resizeMode:'contain'
    
    
  }
})