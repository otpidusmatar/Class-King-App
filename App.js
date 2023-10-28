import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './Launch.jsx';
import Home from './Home.jsx';
import BCTE from './quizletpages/BCellTransportandEnergy.jsx';
import TestQuizletB from './TestQuizletB.jsx';
import TestQuizletC from './TestQuizletC.jsx';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cell Transport and Energy" component={BCTE} />
        <Stack.Screen name="Quizlet 2" component={TestQuizletB} />
        <Stack.Screen name="Quizlet 3" component={TestQuizletC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
