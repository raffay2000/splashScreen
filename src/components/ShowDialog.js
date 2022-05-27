import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const ShowDialog = ({title,Heading,BtnName,DialogMsg}) => {
  const [visible, setVisible] = React.useState(false);
    
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <View>
        <Button onPress={showDialog}>{title}</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{Heading}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{DialogMsg}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>{BtnName}</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
  )
}

export default ShowDialog

const styles = StyleSheet.create({})