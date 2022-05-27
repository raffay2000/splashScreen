import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const Fab = () => {
  return (
    <View>
      <FAB
      style={styles.fab}
      small
      icon="plus"
      onPress={() => console.log('Pressed')}
  />
    </View>
  )
}

export default Fab

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})