import GameEndScreen from '@/components/game/GameEndScreen';
import ScoreDisplay from '@/components/game/ScoreDisplay';
import Timer from '@/components/game/Timer';
import WordInput from '@/components/game/WordInput';
import WordsDisplay from '@/components/game/WordsDisplay';
import { KeyboardAvoidingView, Text, View } from '@/components/ui/Themed';
import { useUser } from '@/context/AppContext';
import { generateRandomWord } from '@/utils/wordUtils';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';


export default function NewGameScreen() {
  const { time } = useLocalSearchParams<{ time: string }>();
  const firstWord = generateRandomWord()
  const [words, setWords] = useState<string[]>([firstWord]);
  const [timeLeft, setTimeLeft] = useState(parseInt(time ?? '30'))
  const [error, setError] = useState<string | null>(null)

  const [currentUserScore, setCurrentUserScore] = useState(0)
  const [opponentScore, setOpponentScore] = useState(0)

  const currentUser = useUser()

  const resetTimer = () => {
    setTimeLeft(parseInt(time ?? '30'))
  }

  const resetGameHandler = () => {
    setWords([generateRandomWord()])
    setError(null)
    resetTimer()
  }

  const newWordHandler = (word: string) => {
    if (!word) return;
    setWords([word, ...words.slice(0, 3)]);
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {error ?
        <GameEndScreen errorMessage={error} resetGameHandler={resetGameHandler} />
        :
        <>
          <ScoreDisplay
            currentUser={{
              avatar: currentUser.avatar,
              displayName: currentUser.displayName,
              score: currentUserScore
            }}
            opponent={{
              avatar: 'https://i.pravatar.cc/100',
              displayName: 'Stojan',
              score: opponentScore
            }}
          />
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setError={setError} />
          <WordsDisplay words={words} />
          <WordInput newWordHandler={newWordHandler} lastWord={words[0]} resetTimer={resetTimer} />
        </>
      }

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
