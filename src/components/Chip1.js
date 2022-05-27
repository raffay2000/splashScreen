import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const Chip1 = ({text,icon,onPress}) => {
  return (
    <View>
      <Chip icon={icon} style={{width:"35%"}} onPress={onPress}>{text}</Chip>
    </View>
  )
}

export default Chip1

const styles = StyleSheet.create({})