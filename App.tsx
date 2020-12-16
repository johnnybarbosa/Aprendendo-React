/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity, 
  Keyboard,
} from 'react-native';

import {format} from'date-fns';
interface listaTarefasInterface{
  titulo: string;
  data: Date;
}

const App = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [listaTarefa, setListaTarefa] = useState<Array<listaTarefasInterface>>
                 ([]);
  const gravaTarefa=()=>{
    if(novaTarefa === ''){
      return false;
    }
    Keyboard.dismiss();
    setNovaTarefa('');
    const novaLista = [...listaTarefa];
    novaLista.unshift({titulo: novaTarefa, date:new Date()});
    setListaTarefa(novaLista);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={{ padding:16 , flex:1}}>
        
          <Image source= {require('./todo-list.png')} 
          style={{width:"75%", height:58 }} 
          resizeMode="contain" />
          <View style={{flexDirection: 'row'}}>
            <TextInput 
                value={novaTarefa}
                onChangeText={(valor)=>{ setNovaTarefa(valor)}}
                placeholder="Adicionar Tarefa"  
                style={{borderBottomWidth:1, 
                  borderBottomColor:'#707070', 
                  flex:1}}    
              />
            <TouchableOpacity 
              onPress={()=> {gravaTarefa()}}
              style={{backgroundColor:'#FFAA00', 
              width:52, 
              alignItems:'center', 
              justifyContent:'center', 
              borderRadius:26}}>
              <Text style={{fontSize:26, color:'#fff'}}>+</Text>
            </TouchableOpacity>
          </View>    
            <View style={{marginTop:24}}>
              {listaTarefa.map((item, index)=>(
              <View
              key={'item' + index}
                style={{backgroundColor: 'f5f8f9', 
                padding:8
                }}>
                  <Text style={{textAlign:'right', 
                    fontsize:12, 
                    fontWeight:'bold'}}>
                    {format(item.date, 'dd/MM/yyyy HH:m')}
                  </Text>
              <Text style={{fontsize:16}}>{item . titulo}</Text>
              </View>
              ))}
            </View>
        </View>

    </>
  );
};



export default App;
