import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const CheckBox1 = () => {
  return (
    <View>
      <Checkbox.Android status='unchecked' color='red' />
    </View>
  )
}

export default CheckBox1

const styles = StyleSheet.create({})