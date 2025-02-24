import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { FileType } from '../../utils/types';

interface CategoryFilterProps {
  selectedCategory: FileType | 'all';
  onSelectCategory: (category: FileType | 'all') => void;
}

const categories = [
  { id: 'all', title: 'Tous' },
  { id: 'image', title: 'Images' },
  { id: 'audio', title: 'Audio' },
  { id: 'video', title: 'Vidéos' },
  { id: 'other', title: 'Autres' },
] as const;

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <Chip
          key={category.id}
          selected={selectedCategory === category.id}
          onPress={() => onSelectCategory(category.id as FileType | 'all')}
          style={styles.chip}
          mode="outlined"
        >
          {category.title}
        </Chip>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  chip: {
    marginRight: 8,
  },
});

export default CategoryFilter; 