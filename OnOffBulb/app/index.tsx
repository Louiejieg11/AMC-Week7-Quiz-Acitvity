import React, {useState} from 'react';
import {Switch, StyleSheet, Image, View, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider   style={{backgroundColor:isEnabled ? 'gray' : 'white'}}>
      <SafeAreaView style={styles.container}>
      {isEnabled ?
      <View>
        <Image source={require('../assets/images/light-off.png')} style={styles.img} />
        <Text style={styles.textStyles}>ON</Text>
      </View>
       :
       <View>
         <Image source={require('../assets/images/light-on.png')} style={styles.img} />
        <Text  style={styles.textStyles}>OFF</Text>
        
      </View>}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        
        />
          {isEnabled ? <Text style={styles.textStyles}>AMC Lightbulb</Text> : < Text style={styles.textStyles}>AMC NightBulb</Text>}
      </SafeAreaView>
      
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  img: {
    width: 200,
    height: 200,
  }, 
  textStyles: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  }
});

export default App;