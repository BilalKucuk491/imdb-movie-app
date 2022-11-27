import React from 'react';
import Home from './src/screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const RootApp = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Home />
      </GestureHandlerRootView>
    </Provider>
  );
};

const App = () => {
  return <RootApp />;
};

export default App;
