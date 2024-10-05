import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, TextInput, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const ItemText = ({ text, deleteItem, id, onChangeNewText }) => {
  const [isDone, setIsDone] = React.useState(false);
  const [modalWindow, setModalWindow] = React.useState(false);
  const [isChangeParams, setIsChangeParams] = React.useState(true);
  const [editableText, setEditableText] = React.useState(text);

  const textInputRef = useRef(null);

  const Done = () => {
    setIsDone(!isDone);
  };

  const handleTextChange = (newText) => {
    setEditableText(newText);
  };

  const saveTextChange = () => {
    if (editableText.trim() === '') {
      Alert.alert('Ошибка');
    } else {
      onChangeNewText(editableText);
      setIsChangeParams(true);
    }
  };

  const handleChangeTextPress = () => {
    setIsChangeParams(false);
    setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();       }
    }, 100); 
  };

  const HideModal = () => {
    if (editableText.trim() !== '') {
      setModalWindow(!modalWindow)
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, { textDecorationLine: isDone ? 'line-through' : 'none', color: isDone ? 'grey' : 'black' }]}
        onPress={Done}
      >
        {editableText}
      </Text>

      <Modal animationType="slide" visible={modalWindow}>
        <View style={styles.centeredView}>
          {isChangeParams ? (
            <Text style={styles.modalText}>{editableText}</Text>
          ) : (
            <TextInput
              ref={textInputRef} 
              style={styles.Input}
              onChangeText={handleTextChange}
              value={editableText}
              returnKeyType={'done'}
              onSubmitEditing={saveTextChange} 
            />
          )}

          <TouchableOpacity onPress={() => deleteItem(id)} style={styles.deleteText}>
            <Text style={styles.DelText}>Delete</Text>
            <MaterialIcons name="delete-forever" size={34} color="#fff" />
          </TouchableOpacity>

          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={HideModal}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonChange]}
              onPress={() => {
                if (isChangeParams) {
                  handleChangeTextPress(); 
                } else {
                  saveTextChange();
                }
              }}
            >
              <Text style={styles.textStyle}>{isChangeParams ? 'Change Text' : 'Save Changes'}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.buttonOpen, styles.MenuBtn]}
        onPress={() => setModalWindow(true)}
      >
        <Entypo name="menu" size={34} color="#dcdde1" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: 'blue',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    width: '78%',
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
  deleteText: {
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 7,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 110,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    paddingHorizontal: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    paddingHorizontal: 120,
  },
  buttonOpen: {
    backgroundColor: '#ff9f1a',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  DelText: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 6,
    color: 'white',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 40,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonChange: {
    backgroundColor: '#706fd3',
  },
  MenuBtn: {
    padding: 8,
    borderRadius: 14,
  },
  Input: {
    width: '80%',
    padding: 10,
    fontSize: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#95a5a6',
  },
});

export default ItemText;