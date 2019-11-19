import React, {useReducer} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/routes/Routes';
import {postsReducer} from './src/reducers';
import {postsContext} from './src/contexts';

const App = () => {
  const reducer = useReducer(postsReducer, []);

  return (
    <postsContext.Provider value={reducer}>
      <SafeAreaView style={styles.areaView}>
        <Routes />
      </SafeAreaView>
    </postsContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);

const styles = {
  areaView: {
    flex: 1,
  },
};
