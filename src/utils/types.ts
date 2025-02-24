export type FileType = 'image' | 'audio' | 'video' | 'other';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size: number;
  uri: string;
  createdAt: Date;
}

export interface FileCategory {
  id: FileType;
  title: string;
  icon: string;
}
