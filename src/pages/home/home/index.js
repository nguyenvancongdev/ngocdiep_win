import { View, Text, TextInput, Linking, Button } from 'react-native';
const handlePress = async () => {
    await Linking.openSettings().catch((err)=>{
        ///
    });
}
const handleCallNumber = async () => {
  await Linking.openURL(`tel:0988333222`).catch((err)=>{
      ///
  });
}
const handleSendSMS  = async () => {
  await Linking.openURL(`sms:0988333222?body=rrrrr`).catch((err)=>{
    console.log('434234')
});
}
const HomeScreen = () => {

    return (
      <View  accessible={true}>
        <Text>xin chao moirr nguoi, man ljjjjogin</Text>
        <TextInput />
        <Button title={'settig'} onPress={handlePress}/>
        <Button title={'call number'} onPress={handleCallNumber}/>
        <Button title={'send SMS'} onPress={handleSendSMS}/>


      </View>)
  }
  export default HomeScreen;  