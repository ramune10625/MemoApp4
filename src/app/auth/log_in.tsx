import { 
  View, Text, TouchableOpacity ,StyleSheet
 } from 'react-native'
import { Link, router } from 'expo-router'

import Button from '../../components/Button'
import TextForm from '../../components/TextForm'

const handlePress = (): void => {
  // ログイン
  router.replace('/memo/list')
}

const LogIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextForm value='Email address' />
        <TextForm value='Password' />
        <Button label='Log In' onPress={handlePress}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <Link href={'/auth/sign_up'} asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical:24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default LogIn