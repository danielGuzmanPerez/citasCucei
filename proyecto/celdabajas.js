import React, { Component } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export class celdabajas extends Component {
    constructor(props){
        super(props);
            this.state={
                datosCita:props.datosC,
                hora: props.hora1,
                dia: props.dia1,
                mes: props.mes1,
                codigo: props.codigo1,
            };
        
    }
    render() {
      
            const borra=()=>{
                var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               _this.setState({citas: JSON.parse(xhttp.responseText)}) ;
            }
        };
        xhttp.open("GET", "https://danielguzman27.000webhostapp.com/BajasCitas.php?mes="+this.state.mes+"&dia="+this.state.dia+"&hora="+this.state.hora+"&codigo="+this.state.codigo, true);
        xhttp.send();
        if(xhttp.responseText==1){
                Alert.alert("Borrado");
        }
            }
        
        return (
            <View>
                <View style={styles.fondo}>
                 <Text style={styles.datos}>{this.state.datosCita}</Text>
                    <View style={styles.boton}>
                    <Button title="Borrar" color="#880000" onPress={borra}></Button>
                    </View>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    boton:{
        width:80,
        height: 40,
        marginTop:12,
        marginLeft:172,
        
    },
    datos:{
        fontSize: 17,
        marginTop: 30,
        marginLeft:20,
    },
fondo:{
    width: 270,
    height: 125,
    borderWidth: 0,
    marginLeft:65,
    marginTop:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 10,

},
})
export default celdabajas;
