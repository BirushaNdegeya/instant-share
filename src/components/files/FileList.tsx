import React from 'react';
import { View, FlatList } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import { FileItem } from '../../utils/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FileListProps {
  files: FileItem[];
  onFilePress: (file: FileItem) => void;
  onFileDelete: (fileId: string) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onFilePress, onFileDelete }) => {
  const theme = useTheme();

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return 'image';
      case 'audio': return 'music';
      case 'video': return 'video';
      default: return 'file';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  return (
    <FlatList
      data={files}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <List.Item
          title={item.name}
          description={formatFileSize(item.size)}
          left={props => (
            <MaterialCommunityIcons
              name={getFileIcon(item.type)}
              size={24}
              color={theme.colors.primary}
              style={{ marginLeft: 10, alignSelf: 'center' }}
            />
          )}
          right={props => (
            <MaterialCommunityIcons
              name="delete"
              size={24}
              color={theme.colors.error}
              style={{ marginRight: 10, alignSelf: 'center' }}
              onPress={() => onFileDelete(item.id)}
            />
          )}
          onPress={() => onFilePress(item)}
        />
      )}
      ListEmptyComponent={() => (
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text>Aucun fichier disponible</Text>
        </View>
      )}
    />
  );
};

export default FileList; 