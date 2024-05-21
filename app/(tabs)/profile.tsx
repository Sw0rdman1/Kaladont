import UserInformations from '@/components/profile/UserInformations';
import UserProfileActions from '@/components/profile/UserProfileActions';
import { View } from '@/components/ui/Themed';
import { StyleSheet } from 'react-native';

export default function UserProfileScreen() {

  return (
    <View style={styles.container}>
      <UserInformations />
      <UserProfileActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },


});
