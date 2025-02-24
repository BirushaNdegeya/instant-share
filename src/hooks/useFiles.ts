import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FileItem, FileType } from '../utils/types';

const STORAGE_KEY = '@files_storage';

export const useFiles = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<FileType | 'all'>('all');

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const savedFiles = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedFiles) {
        setFiles(JSON.parse(savedFiles));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des fichiers:', error);
    }
  };

  const saveFiles = async (newFiles: FileItem[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newFiles));
      setFiles(newFiles);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des fichiers:', error);
    }
  };

  const addFile = async (file: FileItem) => {
    const newFiles = [...files, file];
    await saveFiles(newFiles);
  };

  const removeFile = async (fileId: string) => {
    const newFiles = files.filter(f => f.id !== fileId);
    await saveFiles(newFiles);
  };

  const filteredFiles = selectedCategory === 'all' 
    ? files 
    : files.filter(file => file.type === selectedCategory);

  return {
    files: filteredFiles,
    addFile,
    removeFile,
    selectedCategory,
    setSelectedCategory
  };
}; 