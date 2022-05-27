import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const CardTitle = ({CardTitle,CardSubtitle,leftIcon,RigthIcon}) => {
  return (
    <Card.Title
    title={CardTitle}
    subtitle={CardSubtitle}
    left={(props) => leftIcon}
    right={(props) => RigthIcon}
  />
  )
}

export default CardTitle

const styles = StyleSheet.create({
    
})