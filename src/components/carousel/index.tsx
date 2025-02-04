import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

const DATA = [
  {
    image:
      'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
  },
  {
    image:
      'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
  },
  {
    image:
      'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
  },
];

const Carousel = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setActiveBanner(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 80 },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    if (activeBanner === DATA.length - 1) return;
    const timerId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [activeBanner]);

  const AnimatedIndicator = ({ isActive }: { isActive: boolean }) => {
    const scale = useSharedValue(isActive ? 1.5 : 1);
    const backgroundColor = useSharedValue(isActive ? 'black' : 'gray');

    useEffect(() => {
      scale.value = withTiming(isActive ? 1.5 : 1, { duration: 300 });
      backgroundColor.value = isActive ? 'black' : 'gray';
    }, [isActive]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      backgroundColor: backgroundColor.value,
    }));

    return <Animated.View style={[styles.indicator, animatedStyle]} />;
  };

  return (
    <View style={styles.container}>
      {/* Carrossel principal */}
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      
      <View style={styles.indicatorContainer}>
        {DATA.map((_, index) => (
          <AnimatedIndicator key={index} isActive={index === activeBanner} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: Dimensions.get('window').width * 0.8,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: -20, 
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Carousel;
