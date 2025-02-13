import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

interface HeaderProps {
  onBackPress: () => void;
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ onBackPress, backgroundColor = 'rgba(0, 0, 0, 0)' }) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <IconButton
        icon="chevron-left"
        iconColor="red"
        size={30}
        onPress={onBackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "auto",
    height: 60, // Ocupa a altura do container pai
    alignItems: "center",
    justifyContent: "center", // Centraliza verticalmente o ícone
    paddingLeft: 0, // Evita deslocamento lateral
  },
});

export default Header;
