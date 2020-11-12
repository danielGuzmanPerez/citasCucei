import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button,StackScreen,YellowBox, Alert } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import CalendarPicker from 'react-native-calendar-picker';
import {Picker} from '@react-native-community/picker';
import {commonActions,useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';


global.cadena;
global.codigo;
global.nombre;
global.carrera;




//enviar datos de react al servidor

export default class User extends React.Component {
  
    state={
      Hora:'',
    }
    
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      open: false
    };
    this.onDateChange = this.onDateChange.bind(this);
    const {navigation}= props;
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
 
  drawerContent = (navigation) => {
    let _this=this;
    
    return (
     
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
       <Text>{global.cadena}</Text>
       <TouchableOpacity onPress={()=>_this.props.navigation.navigate('Formato')} >
          <Text>Bajas</Text>
          
      </TouchableOpacity>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  
  

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const Stack = createStackNavigator();
    
    const hacerCita = () =>{
      if(datosSeparados||startDate){        
        var datosSeparados = startDate.split(' ');
    }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          if(xhttp.responseText == "1"){
            Alert.alert("Tu cita se agendó.");
          }if(xhttp.responseText=="2"){
            Alert.alert("No esta disponible la fecha que elegiste, cambiala");
          }
        }
      };
      xhttp.open("GET","https://danielguzman27.000webhostapp.com/AltaCitas.php?diasemana="+datosSeparados[0]+"&mes="+datosSeparados[1]+"&dia="+datosSeparados[2]+"&hora="+this.state.Hora+"&codigo="+global.codigo+"&nombre="+global.nombre+"&carrera="+global.carrera,true);
      xhttp.send();
    }
    return (
      <View style={styles.container}>
        
      <MenuDrawer 
        open={this.state.open} 
        drawerContent={this.drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}
      >
        
        
      </MenuDrawer>

      <View style={styles.container}>
      <View>
        <Button title="Open" onPress={this.toggleOpen} style={styles.body}/>
        </View>
        <View style={styles.calendario}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
        </View>
        <View>
          <Text>SELECCIONA LA FECHA</Text>
        </View>

        <Picker
        selectedValue={this.state.Hora}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({Hora: itemValue})
        }>
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="8:15" value="8:15" />
        <Picker.Item label="8:30" value="8:30" />
        <Picker.Item label="8:45" value="8:45" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="9:15" value="9:15" />
        <Picker.Item label="9:30" value="9:30" />
        <Picker.Item label="9:45" value="9:45" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="10:15" value="10:15" />
        <Picker.Item label="10:30" value="10:30" />
        <Picker.Item label="10:45" value="10:45" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="11:15" value="11:15" />
        <Picker.Item label="11:30" value="11:30" />
        <Picker.Item label="11:45" value="11:45" />
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="12:15" value="12:15" />
        <Picker.Item label="12:30" value="12:30" />
        <Picker.Item label="12:45" value="12:45" />   
    </Picker>  
   
        <View style={styles.botoncita}>
            <Button title='Crear cita' onPress={hacerCita} ></Button>
        </View>
    </View>
 
       
       
  </View> 
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
   
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#9BA6FC",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5'
  },
  calendario:{
    marginTop: 200,
  },
  botoncita:{
    marginTop: 50,
   
  },
  botonDrawer:{
    
  },
  calendario:{
    marginTop:100,
  }
})