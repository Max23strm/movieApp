import { StackNavigator } from './src/navigation/StackNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GradientProvider } from './src/context/GradientContext';


const Appstate = ({children}: any) => {
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <Appstate>
        <StackNavigator/>
      </Appstate>
    </NavigationContainer>
  );
}

export default App;
