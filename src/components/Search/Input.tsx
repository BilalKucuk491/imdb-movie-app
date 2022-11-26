import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

const Input = () => {
  const [visibility, setVisibility] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {visibility && (
          <Icon style={styles.icon} name="search" size={27} color={'#000'} />
        )}
        <TextInput
          maxLength={50}
          style={styles.Input}
          onPressOut={() => setVisibility(true)}
          onChangeText={e =>
            e.length > 0 ? setVisibility(false) : setVisibility(true)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  icon: {
    position: 'absolute',
    zIndex: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  Input: {
    backgroundColor: '#F6D632',
    fontSize: 20,
    maxWidth: 300,
    width: 300,
    borderRadius: 20,
    color: '#000',
    textAlign: 'center',
  },
});

export default Input;
