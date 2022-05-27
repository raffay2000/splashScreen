import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const TextInput_2 = () => {
    const [text, setText] = React.useState("");
  return (
    <View>
      <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      mode="outlined"
      outlineColor='pink'
      activeOutlineColor='blue'
      right={<TextInput.Icon name="plus" />}
    />
    </View>
  )
}

export default TextInput_2

const styles = StyleSheet.create({})