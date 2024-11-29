import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, View, Button } from 'react-native';
import { Stepper } from './components/Stepper';
import { TextButton } from './components/TextButton';
import  PercentageButton from './components/PercentegeButton';
import Resultado from './components/Result';
import { useState } from 'react';

export default function App() {

  const [importe, setImporte] = useState('0');
  const [persona, setPersona] = useState('1');
  const [imporporcpropin, setImporporcpropin] = useState('10');
  const [propfinal, setPropfinal] = useState();
  const [propporpersona, setPropporpersona] = useState();
  const [importefinal, setImportefinal] = useState();
  const [importeporpersona, setImporteporpersona] = useState();
  
  function personaTextImputHandler(enteredText){
    setPersona(enteredText);
  }
  function porcentpropTextImputHandler(enteredText){
    setImporporcpropin(enteredText);
  }
  function importeTextImputHandler(enteredText){
    setImporte(enteredText);
  }
  function buttonsProps(percentage){
    setImporporcpropin(percentage)
  }

  function onCalcularButtonTapped(){
    const Import = parseFloat(importe)
    const person = parseFloat(persona)
    const prop = parseFloat(imporporcpropin)
    const propfinal = (Import * prop)/100;
    const propporpersona = (propfinal/person);
    const importefinal = (Import + propfinal);
    const importeporpersona = (importefinal/person);
   /* console.log('porcentaje propina: ' + propfinal )
    console.log('propina por personas: ' + propporpersona)
    console.log('importe por persona: ' + importeporpersona)
    console.log('importe total: ' + importefinal)*/
    setPropfinal(propfinal)
    setPropporpersona(propporpersona)
    setImportefinal(importefinal)
    setImporteporpersona(importeporpersona)

  }
  function resetall(){
    setImporte('')
    setPersona('')
    setImporporcpropin('')
  }


  return (
    <View style={styles.container}>
      <View style ={styles.Containertop}>
      <View style ={styles.contTop1}>
        <Text style={styles.text}>importe:</Text>
        <TextInput onChangeText={importeTextImputHandler} value = {importe} style={styles.textimput}  ></TextInput>
      </View>

      <View style ={styles.contTop2}>
        <Text style={styles.text}># personas:</Text>
        <TextInput onChangeText={personaTextImputHandler} value = {persona}  style={styles.textimput} keyboardType='decimal-pad'></TextInput>
        <Stepper
        minValue='0'
        maxValue='10'
        increment='1'
        value={persona}
        onChange={(newValue) => setPersona(newValue)}/>
        
      </View>
     
      <View style ={styles.contTop3}>
      <PercentageButton
      percentage='8'
      onPress={buttonsProps}/>
      <PercentageButton
      percentage='10'
      onPress={buttonsProps}/>
      <PercentageButton
      percentage='12.5'
      onPress={buttonsProps}/>
      <PercentageButton
      percentage='15'
      onPress={buttonsProps}/>
      </View> 
      
      <View style ={styles.contTop4}>
        <Text style={styles.text}>% propina:</Text>
        <TextInput onChangeText={porcentpropTextImputHandler} value = {imporporcpropin}   style={styles.textimput}></TextInput>
        <Stepper
        minValue='1'
        maxValue='50'
        increment='0.5'
        value={imporporcpropin}
        onChange={(newValue) => setImporporcpropin(newValue)}/>
      </View>
      </View>

      <View style={styles.contcenter}>
        <TextButton title='calcular' onPress={onCalcularButtonTapped} />
        <TextButton title='limpiar' onPress={resetall}/>
      </View>

      <View style={styles.resultsContainer}>
        <Resultado descripcion='Importe de la propina:'
        valor={propfinal}/>
        <Resultado descripcion='propina por persona:'
        valor={propporpersona}/>
        <Resultado descripcion='Importe total:'
        valor={importefinal}/>
        <Resultado descripcion='Importe por persona:'
        valor={importeporpersona}/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderColor:'lightgray',
    flexDirection: 'column',
    //gap:50,
    backgroundColor: '#fff',
    alignItems: 'fill',
    justifyContent: 'top',
  },
  Containertop: {
      flex: 0,
      borderColor:'lightgray',
      borderWidth: 1,
      padding: 1,
      backgroundColor: "white",
      borderRadius:10,
      
  },
  contTop1: {
    flex: 0,
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
    },
  contTop2: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  contTop3: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  contTop4: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingTop:10,
    },
  contcenter:{
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
    paddingVertical:30,
    },
  text: {
    fontSize: 15,
  },
  textimput: {
    fontSize: 15,
    flex:1,
    borderColor: 'black',
    borderWidth: 1,
    margin:0,
    padding:0,
  },
  resultsContainer: {      
    borderColor:'lightgray',
    borderWidth: 2,
    padding:10,
    borderRadius:10,
    backgroundColor:'lightgray'
  },
  resulText:{
    fontSize:18,

  },
  result:{
    fontSize:24,
    fontWeight:'bold',
    alignItems:'center',
    alignSelf: 'center',
    marginVertical:16,
  },
  // button:{
  //   borderColor: 'green',
  //   borderWidth:2,
  //   borderRadius:5,
  //   padding: 8,
  //   backgroundColor: 'red',
  // },
  // textbutton:{
  //   color: 'white',
  //   fontSize: 18,
  // }
 
});
