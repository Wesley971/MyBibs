import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets(); // 🔥 ça gère le haut et bas dynamiquement

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
    >
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
