import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/welcome/WelcomeScreen'
import RegisterScreen  from './app/screens/register/RegisterScreen';
import LoginScreen from './app/screens/login/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
const Stack=createStackNavigator();
const StackNavigator=()=>(
  <Stack.Navigator
  screenOptions={{
    headerShown: false // Hide the header for all screens
  }}
  >
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen }/>
    
 
  </Stack.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>

      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}


