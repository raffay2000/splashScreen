import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';

const Card1 = ({cardTitle,cardContent}) => {
  return (
    <Card>
    <Card.Content>
      <Title>{cardTitle}</Title>
      <Paragraph>{cardContent}</Paragraph>
    </Card.Content>
  </Card>
  )
}

export default Card1

const styles = StyleSheet.create({})