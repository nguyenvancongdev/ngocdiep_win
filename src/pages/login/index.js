import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import TouchID from 'react-native-touch-id'

const LoginPage = ({ navigation }) => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    const optionalConfigObject = {
        unifiedErrors: false,
        passcodeFallback: false
    }    
    const onLoginId = () => (
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
          .then(success => {
            // AlertIOS.alert('Authenticated Successfully');
            console.log('done')
            })
            .catch(error => {
            console.log('rrrrrr')

           
            })
    )
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Tên đăng nhập"
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Mật khẩu"
                keyboardType="numeric"
            />
            <Button
                onPress={()=>onLoginId()}
                title='login Id'
            />
            <Button
                onPress={()=>{
                    navigation.navigate('Home')}
                }
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default LoginPage;