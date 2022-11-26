import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Modal, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native'

export default function InputBalance({ onMovementAdd, show, setShow }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [ description, setDescription ] = useState('')
    const [ quantity, setQuantity ] = useState(0)
    const [ sing, setSing ] = useState('Payment / Charge')
    const optionsSing = ['Payment' , 'Charge']

    const changeDescription = ( description ) => {
        setDescription(description)
    }

    const changeQuantity = ( quantity ) => {
        setQuantity(quantity)
    }

    const changeSing = (sing) => {
        setSing(sing)
    }

    const addMovement = () => {
        onMovementAdd(description, quantity, sing)
        setDescription('')
        setQuantity(0)
        setSing('')
    }

    
    const isEmpty = () => {
        if (description.trim() !== '' && quantity !== 0) {
            return false;
        }
        return true;
    };

  return (
    <View style={ styles.container }>
    <Modal
        animationType="slide"
        transparent={ true }
        visible={ show }
        onRequestClose={() => {
            
        setModalVisible(!modalVisible);
        }}
    >
    <View style={styles.modalContainer}>
        <View style={styles.border}>
      <View style={styles.textIn}>
        <TextInput
            style={styles.concepto}
            placeholder='Description'
            onChangeText={ changeDescription }
            value={ description }
        >
        </TextInput>
        <TextInput
            style={styles.importe}
            placeholder='Quantity'
            keyboardType={'numbers-and-punctuation'}
            onChangeText={ changeQuantity }
            value={ quantity }
        >
        </TextInput>
      </View>
      <View style={styles.containerDrop}>
      <SelectDropdown
            data={optionsSing}
            onSelect={(selectedItem) => {
            changeSing(selectedItem);
            }}
            defaultButtonText={'Payment / Charge'}
            buttonTextAfterSelection={() => {
                return sing;
            }}
            rowTextForSelection={(item) => {
                return item;
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.dropdownBtnTxt}
            dropdownStyle={styles.dropdownDropdown}
        />
      </View>
      <View>
        <Button
            title="ADD"
            onPress={ addMovement }
            disabled={ isEmpty() }
        />
      </View>
      <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShow(!show)}
        >
        <Text style={styles.cerrar}>Cerrar</Text>
        </Pressable>
        </View>
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    cerrar: {
        textAlign: 'center',
        marginTop: 15
    },
    border:{
        backgroundColor: '#A5DDD8',
        width: '90%',
        padding: '30%',
        borderRadius: 10,
        marginTop: '40%'
    },
    concepto: {
        textAlign: 'center',
    },
    importe: {
        textAlign: 'center',
        marginTop: 15
    },
    containerDrop: {
        alignItems: 'center',
        marginTop: 15
    },
    dropdownButton: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
    }

});
