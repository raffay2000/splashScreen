import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal,Dialog,Chip,Checkbox,IconButton,Avatar,Paragraph,Title,Button,Card,Appbar,DefaultTheme,Provider as PaperProvider,FAB,Snackbar,Switch ,TextInput,TouchableRipple} from 'react-native-paper';
const ToastComponent = ({text}) => {
    const [visible1, setVisible1] = React.useState(false);
    const onToggleSnackBar = () => setVisible1(!visible1);

  const onDismissSnackBar = () => setVisible1(false);
  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{visible1 ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible1}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        {text}
      </Snackbar>
    </View>
  )
}

export default ToastComponent

const styles = StyleSheet.create({})