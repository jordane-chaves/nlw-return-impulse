import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
  isSendingFeedback: boolean;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
  isSendingFeedback
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSendingFeedback && styles.buttonDisabled]}
      onPress={screenshot ? onRemoveShot : onTakeShot}
      disabled={isSendingFeedback}
    >
      {screenshot ? (
        <View>
          <Image
            style={styles.image}
            source={{ uri: screenshot }}
          />
        <Trash
          size={22}
          color={theme.colors.text_secondary}
          weight="fill"
          style={styles.removeIcon}
        />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
