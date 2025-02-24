import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';
import { FileItem, FileType } from '../../utils/types';

export class FileService {
  static async pickFile(): Promise<FileItem | null> {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true
      });

      if (result.type === 'success') {
        const fileInfo = await FileSystem.getInfoAsync(result.uri);
        
        return {
          id: Date.now().toString(),
          name: result.name,
          type: this.getFileType(result.name),
          size: fileInfo.size || 0,
          uri: result.uri,
          createdAt: new Date()
        };
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la sélection du fichier:', error);
      return null;
    }
  }

  static getFileType(fileName: string): FileType {
    const ext = fileName.toLowerCase().split('.').pop();
    
    if (['jpg', 'jpeg', 'png', 'gif'].includes(ext!)) return 'image';
    if (['mp3', 'wav', 'm4a'].includes(ext!)) return 'audio';
    if (['mp4', 'mov', 'avi'].includes(ext!)) return 'video';
    return 'other';
  }

  static async saveFile(fileUri: string): Promise<boolean> {
    try {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) return false;

      await MediaLibrary.saveToLibraryAsync(fileUri);
      return true;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du fichier:', error);
      return false;
    }
  }
} 