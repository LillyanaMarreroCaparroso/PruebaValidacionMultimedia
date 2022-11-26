import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import InputBalance from './components/InputBalance';
import Balance from './components/Balance';
import ListBalance from './components/ListBalance';
import { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';

export default function App() {

  const [ show, setShow ] = useState(false)
  const [ movements, setMovements ] = useState([])
  const [ total, setTotal ] = useState(0)
  const [ description, setDescription ] = useState('')
  const [ quantity, setQuantity ] = useState(0)
  const [ sing, setSing ] = useState('Payment / Charge')

  useEffect(() => {
    let counter = 0;
    movements.forEach(( movement ) => {
      if(movement.sing === 'Payment') {
        counter += Number(movement.quantity);
      } else if (movement.sing === 'Charge'){
        counter -= Number(movement.quantity);
      }
    })
    setTotal(counter);
  }, [total, movements])

  const addNewMovement = ( description, quantity, sing ) => {
    const newMovement = {
      id: uuid.v4(),
      description: description,
      quantity: quantity,
      sing: sing
    }
    setMovements(() => [...movements, newMovement])
    setDescription(description)
    setQuantity(quantity)
    setSing(sing)
  }

  return (
    <View style={ styles.container }>
      <Balance
        totalBalance={ total }
      />
      <FlatList
        style={ styles.containerList }
        data={ movements }
        keyExtractor={( item ) => item.id}
        renderItem={({ item }) => 
          <ListBalance
            item = { item }
            description={ item.description }
            quantity={ item.quantity }
            sing={ item.sing } 
          />}
      />
      <View style={ styles.containerAñadir }>
        <Pressable 
            style={ styles.buttonContainer }
            onPress={() => {setShow(!show)}}>
            <Text style={ styles.button }>Añadir movimiento</Text>
        </Pressable>
      </View>
      <View style={ styles.containerInput }>
      <InputBalance 
        onMovementAdd={ addNewMovement }
        show={ show }
        setShow= { setShow }
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 3,
    backgroundColor: '#fff',
  },
  button: {
    textAlign: 'center'
  },
  buttonContainer: {
    textAlign: 'center',
    width: '30%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#A5DDD8',
    borderColor: 'white'
  },
  containerAñadir: {
    alignItems: 'center',
    marginTop: 10
  },
  containerInput: {
    marginBottom: 70
  },
  containerList: {
    height: '40%',
  }
});
