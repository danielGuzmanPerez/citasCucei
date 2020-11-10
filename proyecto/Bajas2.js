import React, {Component} from 'react';
import {
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {createStackNavigator} from '@react-navigation/stack';
global.codigo;
export default class Bajas2 extends Component {
  constructor(props) {
    super(props);
    //asigancion necesaria para que funcione el this en el llamado a la funcion borra
    this.borra = this.borra.bind(this);
    this.state = {
      // declaracion del arreglo citas donde se guaran los datos de la base de datos
      citas: [],
      //Variable para  hacer refresh
      refreshing: true,
    };
    const {navigation}= props;
  }
  //funcion que llena la lista con los datos, se declaro en una funcion para no  poner el codigo de conexion cada rato
  //asi solo se manda llmar a la funcion
  TraeDatos = () => {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        _this.setState({
          citas: JSON.parse(xhttp.responseText),
          refreshing: false,
        });

        //console.log(xhttp.responseText);
      }
    };
    xhttp.open(
      'GET',
      'https://danielguzman27.000webhostapp.com/VerCitas.php?codigo=215511141',
      true,
    );
    xhttp.send();
  };
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  drawerContent = (navigation) => {
    let _this=this;
    
    return (
     
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
       <Text>{global.cadena}</Text>
       <TouchableOpacity onPress={()=>_this.props.navigation.navigate('User')} >
          <Text>Usuario</Text>
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
  //funcion que manda llamar a borracitas.php el cual le pasamos como parametro id que es unico no olviden que deben cambiar la ruta
  // asu servidor..
  borra(id) {
    console.log('borra');
    console.log(id);
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        if (xhttp.responseText === '1') {
          Alert.alert('cita Borrada');
          _this.setState({citas: []});
          _this.TraeDatos();
        } else {
          Alert.alert('No se encontro registro');
        }
      }
    };
    xhttp.open(
      'GET',
      'https://danielguzman27.000webhostapp.com/BajaCitas2.php?id=' + id,
      true,
    );
    xhttp.send();
  }
  //formato de la linea que separa datos entre un registro y otr
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  //Accion que actualiza la tabla o lista
  onRefresh() {
    this.setState({citas: []});
    this.TraeDatos();
  }
  //accion que carga los datos cuando carga la vista en el cel para verla
  componentDidMount = async () => {
    this.TraeDatos();
  };
  render() {
    const Stack = createStackNavigator();
    //accion que se ejecuta mietras carga los datos, pantalla fiusha con el texto de cargando datos
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{flex: 1, backgroundColor: '#C2185B', paddingTop: 20}}>
          <Text> Cargando Datos</Text>
          <ActivityIndicator />
        </View>
      );
    }
    console.log(this.state.citas);
    return (
        <View style={styles.container}>
          <MenuDrawer 
            open={this.state.open} 
            drawerContent={this.drawerContent()}
            drawerPercentage={45}
            animationTime={250}
            overlay={true}
            opacity={0.4} >
          </MenuDrawer> 
          <View style={styles.container}>
            <View>
              <Button title="Open" onPress={this.toggleOpen} style={styles.body}/>
            </View>
            <Text> Bajas2 </Text>
            <View>
              <FlatList
                // de donde se obtienen los datos, de el arreglo citas
                data={this.state.citas}
                //invocacion del separator de registros en la lista
                ItemSeparatorComponent={this.ListViewItemSeparator}
                //no se, en la documentacion no la encontre, si la quito no veo cambios, la dejo..
                enableEmptySections={true}
                //Vista de los datos item es el arreglo y para acceder a los datos hay que hace item.Hora, item.Dia etc
                renderItem={({item}) => (
                  <View>
                    
                    <Text
                      //estilo del como se va a ver la hora
                      style={styles.rowViewContainer}
                      //Para funcionar requiere un id, este id no estaba contemplado originalmente en la base de datos, el cual
                      // deberan de alterar, deberan crear un campo nuevo en la tabla llamado id de tipo numerico y que sea AI (asi viene en
                      // la base de datos) AutoIncrementable, no sera necesario alterar los demas scripts la base de datos llena ese campo
                      //sola
                      //{item.Hora} es como accedemos a la hora  para mostarla
                      onPress={() => alert(item.id)}>
                      {item.Hora}
                    </Text>
                    <Text
                      style={styles.rowViewContainer}
                      onPress={() => alert(item.id)}>
                      {item.Dia}
                    </Text>
                    <Button
                      style={styles.rowViewContainer1}
                      title="borra"
                      //mandamos llamar a la funcion borra y le pasamos como parametro el id, que es unico en la tabla
                      onPress={() => this.borra(item.id)} />
                  </View>
                )}
                refreshControl={
                  <RefreshControl
                    //esto es para cuando bajas la lista se actualiza, ya se hace en automatico alla arriba :P
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh.bind(this)}
                  />
                }
              />
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 10,
  },
  rowViewContainer: {
    fontSize: 20,
    padding: 10,
  },
  rowViewContainer1: {
    marginLeft: 200,
  },
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
  animatedBox: {
    flex: 1,
    backgroundColor: "#9BA6FC",
    padding: 10
  },
});
/*
Notas..
como les mecione arriba deberan modicar la tabla agragando otro registro al cual llamaremos id y que sea autoinclementable
ademas deberemos modificar BajasCitas.php, el cual le pongo aqui el codigo, es casi identico solo cambie unas cosas..

<?php
//credenciales del servidor
$server = "localhost";
$usuario = "id12623346_mayoo";
$pass = "65O<8+iDkE(wHz6@";
$bd = "id12623346_citas";
//datos a recibir
//$mes = $_GET['mes'];
//$dia = $_GET['dia'];
//$hora = $_GET['hora'];
$id = $_GET['id'];
//conexion al servidor
$cone = mysqli_connect($server,$usuario,$pass,$bd);
$sql ="DELETE FROM `DatosCitas` WHERE  `id`='$id'";
mysqli_query($cone,$sql);
$borrados = mysqli_affected_rows($cone);
if($borrados>0){
    echo "1";
}else{
    echo "0";
}
mysqli_close($cone);
?>

No se olviden de cambiar sus credenciales de la conexion al servidor...
*/