import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>

      {/* About Me Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Giovany Carrera</Text>
        <Image
          source={{ uri: 'https://ca.slack-edge.com/T17R4TFAM-U090E2CRQJH-5ac6b7c74214-72' }}
          style={styles.pfp}
        />
        <Text style={styles.sectionHeader}>About Me</Text>
        <Text style={styles.aboutText}>
          My name is Giovany Carrera. I am currently a student at USC Hybrid High. Next year I will be in my sophomore year. I enjoy playing video games, playing/watching sports, and I often do well in school.
        </Text>
        <Text style={styles.sectionHeader}>Challenges</Text>
        <Text style={styles.aboutText}>
          So far in TXT, the challenges I've done include the lightbulb challenge, the prompt engineering challenge, and this one now. These challenges have helped my skills especially when it comes to coding. They have also proved to be a great learning experience as I get to learn even more how to learn.
        </Text>
        <Text style={styles.sectionHeader}>Contact</Text>
        <Text style={styles.aboutText}>
          email: qawsedrfpls@gmail.com{'\n'}
          instagram: 88${'\n'}
          phone: (323) 961-3933
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>©feet finder</Text>
        </View>
      </View>
      {/* End About Me Section */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  aboutContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  pfp: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 6,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});