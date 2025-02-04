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
        icon="arrow-left"
        iconColor="red"
        size={30}
        onPress={onBackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: 10,
  },
});

export default Header;
