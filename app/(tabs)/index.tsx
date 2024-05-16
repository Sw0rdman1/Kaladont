import Button from '@/components/ui/Button';
import { View } from '@/components/ui/Themed';
import { StyleSheet } from 'react-native';


export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => console.log('Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
