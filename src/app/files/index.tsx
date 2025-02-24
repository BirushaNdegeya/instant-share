import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import FileList from '../../components/files/FileList';
import CategoryFilter from '../../components/files/CategoryFilter';
import Snackbar from '../../components/common/Snackbar';
import { FileService } from '../../services/file-transfer/FileService';
import { useFiles } from '../../hooks/useFiles';
import { FileItem } from '../../utils/types';

export default function FilesScreen() {
  const theme = useTheme();
  const { 
    files, 
    addFile, 
    removeFile, 
    selectedCategory, 
    setSelectedCategory 
  } = useFiles();

  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: '',
  });

  const showSnackbar = (message: string) => {
    setSnackbar({ visible: true, message });
  };

  const hideSnackbar = () => {
    setSnackbar({ visible: false, message: '' });
  };

  const handleFilePick = async () => {
    try {
      const file = await FileService.pickFile();
      if (file) {
        await addFile(file);
        showSnackbar('Fichier ajouté avec succès');
      }
    } catch (error) {
      showSnackbar('Erreur lors de l\'ajout du fichier');
    }
  };

  const handleFilePress = async (file: FileItem) => {
    try {
      const saved = await FileService.saveFile(file.uri);
      if (saved) {
        showSnackbar('Fichier sauvegardé avec succès');
      } else {
        showSnackbar('Erreur lors de la sauvegarde du fichier');
      }
    } catch (error) {
      showSnackbar('Erreur lors de la sauvegarde du fichier');
    }
  };

  const handleFileDelete = async (fileId: string) => {
    try {
      await removeFile(fileId);
      showSnackbar('Fichier supprimé avec succès');
    } catch (error) {
      showSnackbar('Erreur lors de la suppression du fichier');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Mes Fichiers</Text>
        <Button 
          mode="contained" 
          onPress={handleFilePick}
          style={styles.button}
        >
          Ajouter un fichier
        </Button>
      </View>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <FileList 
        files={files}
        onFilePress={handleFilePress}
        onFileDelete={handleFileDelete}
      />

      <Snackbar
        visible={snackbar.visible}
        message={snackbar.message}
        onDismiss={hideSnackbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
  },
}); 