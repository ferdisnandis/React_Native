import React, {useState} from 'react';
import { Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Home = () => {

    const [token, setToken] = useState('');

    const getToken = async () => {
      setToken(await AsyncStorage.getItem('@jwt'));
    }

    useEffect(()=>{
      getToken();
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
      );
    }

export default Home;