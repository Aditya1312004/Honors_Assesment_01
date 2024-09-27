import * as React from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}


function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore My App!</Text>
      <Text style={styles.subHeading}>Welcome back! You have been missed</Text>
      <CustomButton title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <CustomButton title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}


function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506765515384-028b60a970df' }} // Link to an image
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Discover your dream job here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Submit" onPress={() => alert('Login Successful!')} />
      <CustomButton title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}


function SignupScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506765515384-028b60a970df' }} // Link to an image
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Discover your dream job here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Submit" onPress={() => alert('Signup Successful!')} />
      <CustomButton title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}


function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton title="Submit" onPress={() => alert('Password reset link sent!')} />
      <CustomButton title="Go back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '85%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  customButton: {
    backgroundColor: '#4C68FF',
    padding: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPasswordText: {
    color: '#4C68FF',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});
