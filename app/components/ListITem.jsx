import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ItemText from './ItemText';

const ListITem = ({data, deleteItem, onChangeNewText, newText}) => {
  return (
      <FlatList 
        style={styles.scrollContainer}
        data={data}
        renderItem={({item}) => <ItemText text={item.title} deleteItem={deleteItem} id={item.id} onChangeNewText={onChangeNewText} newText={newText}/>}
        keyExtractor={item => item.id}
      />
      
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
})

export default ListITem;
