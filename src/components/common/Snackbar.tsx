import React from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';

interface SnackbarProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  action?: {
    label: string;
    onPress: () => void;
  };
}

const Snackbar: React.FC<SnackbarProps> = ({ 
  visible, 
  message, 
  onDismiss, 
  action 
}) => {
  return (
    <PaperSnackbar
      visible={visible}
      onDismiss={onDismiss}
      action={action}
      duration={3000}
    >
      {message}
    </PaperSnackbar>
  );
};

export default Snackbar; 