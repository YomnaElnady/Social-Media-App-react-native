import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Main from './src/components/main';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [timer, setTimer] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  }, [timer]);
  return (
    <View>
      {timer ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', margin: 160}}>
          <Image
            style={{
              alignContent: 'center',
              width: 150,
              height: 150,
            }}
            source={require('./src/assets/globe.png')}
          />
        </View>
      ) : (
        <Main />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
