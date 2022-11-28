import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';

const Input = () => {
  
  const [visibility, setVisibility] = useState(true);
  const dispatch = useDispatch();

  const onSubmitEvent = (value: string) => {
    dispatch({type: 'ON_SEARCH_MOVIE', payload: value});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {visibility && (
          <Icon
            style={styles.icon}
            name="search"
            size={27}
            color={COLORS.textColor}
          />
        )}
        <TextInput
          maxLength={50}
          style={styles.Input}
          onPressOut={() => setVisibility(true)}
          onChangeText={e =>
            e.length > 0 ? setVisibility(false) : setVisibility(true)
          }
          onSubmitEditing={e => onSubmitEvent(e.nativeEvent.text)}
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
    backgroundColor: COLORS.inputBackgroundColor,
    fontSize: 20,
    maxWidth: 300,
    width: 300,
    borderRadius: 20,
    color: COLORS.textColor,
    textAlign: 'center',
  },
});

export default Input;
