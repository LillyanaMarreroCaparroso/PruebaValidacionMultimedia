import { StyleSheet, Text, View } from 'react-native';

export default function ListBalance({ description, quantity, sing}) {

    const handleDescription = ( sing ) => {
      switch (sing) {
          case "Payment":
            return "Description payment : " + description
          case "Charge":
            return "Description charge : " + description
          default:
            break;
        }
    }

    const handleQuantity = ( sing ) => {
      switch (sing) {
          case "Payment":
            return "Quantity: + " + quantity
          case "Charge":
            return "Quantity: - " + quantity
          default:
            break;
        }
    }

  return (

    <View style={ styles.container }>
        <View style={styles.movimiento}>
          <Text style={styles.text}>{ handleDescription(sing) }</Text>
          <Text style={styles.text}>{ handleQuantity(sing) }</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCF6EF',
    marginLeft: 20,
    margin: 10
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    width: '100%',
  },
  movimiento: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginLeft: 10,
  }
});
