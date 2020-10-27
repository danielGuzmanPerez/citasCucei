import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class celdabajas extends Component {
    constructor(props){
        super(props);
            this.state={
                datosCita:props.datosC,
            };
        
    }
    render() {
        return (
            <View>
                <View style={styles.fondo}>
                 <Text style={styles.datos}>{this.state.datosCita}</Text>
                    <View style={styles.boton}>
                    <Button title="Borrar" color="#880000"></Button>
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
