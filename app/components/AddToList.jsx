import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import ListITem from './ListITem';
import Entypo from '@expo/vector-icons/Entypo';

const AddToList = () => {
  const [data, setData] = React.useState([])
  const [text, onChangeText] = React.useState('')

  const [newText, onChangeNewText] = React.useState('')

  const AddList = () => {
    if (text) {
      setData([...data, { id: Date.now(), title: text }])
      onChangeText('')
    } else {
      Alert.alert('write text')
    }
  }

  const deleteItem = (id) => {
    setData(data.filter(item => id !== item.id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Todo List</Text>
      <View style={styles.add}>
        <TextInput
          style={styles.Input}
          onChangeText={onChangeText}
          placeholder='Add new item'
          placeholderTextColor={'#fff'}
          value={text}
          onSubmitEditing={AddList}
          returnKeyType="done"
        />
        <Entypo onPress={AddList} name="add-to-list" style={{marginEnd: 8}} size={24} color="#fff" />
      </View>
      <ListITem data={data} deleteItem={deleteItem} onChangeNewText={onChangeNewText} newText={newText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  HeaderText: {
    fontSize: 38,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20
  },
  add: {
    width: '94%',
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#b2bec3',
    borderRadius: 10
  },
  Input: {
    height: '100%',
    width: '90%',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#b2bec3',
    marginRight: 5,
    borderRadius: 10
  }
})

export default AddToList;
