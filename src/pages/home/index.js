import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
      );
    }

export default Home;