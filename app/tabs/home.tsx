import React, { useEffect, useState } from "react";
import { ScrollView,  Text, View, Image, FlatList, TouchableOpacity,} from "react-native";
import Carousel from "../../src/components/carousel";
import styles from "../../src/styles/home.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IconButton } from "react-native-paper";

export default function Home() {
    const famosos_data = [
        { id: "1", title: "loja 1", image: "https://i.pinimg.com/736x/49/0b/64/490b640ca8bb4726489296c98509fdb6.jpg" },
        { id: "2", title: "loja 2", image: "https://img.freepik.com/psd-premium/maquete-do-logotipo-da-fachada-do-restaurante_204971-178.jpg" },
        { id: "3", title: "loja 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUtcjnw6soxq4YGuO2wubAoTURqM9Fh4pOA&s" },
        { id: "4", title: "loja 4", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/47/7c/fachada-do-restaurante.jpg" },
        { id: "5", title: "loja 5", image: "https://i.ytimg.com/vi/8_wTuWNEyYM/sddefault.jpg" },
        { id: "6", title: "loja 6", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      ];
      const lojas_data = [
        { id: "1",descricao:'descricao',endereco:'endereco x', title: "loja 1", image: "https://i.pinimg.com/736x/49/0b/64/490b640ca8bb4726489296c98509fdb6.jpg" },
        { id: "2", descricao:'descricao',endereco:'endereco x',title: "loja 2", image: "https://img.freepik.com/psd-premium/maquete-do-logotipo-da-fachada-do-restaurante_204971-178.jpg" },
        { id: "3",descricao:'descricao',endereco:'endereco x', title: "loja 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUtcjnw6soxq4YGuO2wubAoTURqM9Fh4pOA&s" },
        { id: "4", descricao:'descricao',endereco:'endereco x',title: "loja 4", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/47/7c/fachada-do-restaurante.jpg" },
        { id: "5", descricao:'descricao',endereco:'endereco x',title: "loja 5", image: "https://i.ytimg.com/vi/8_wTuWNEyYM/sddefault.jpg" },
        { id: "6", descricao:'descricao',endereco:'endereco x',title: "loja 6", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      ];
      const pedidos_data = [
        { id: "1", title:'R$', image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 1" },
        { id: "2", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 2" },
        { id: "3", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 3" },
        { id: "4", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 4" },
        { id: "5", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 5" },
        { id: "6", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 6" },
      ];
      const promocoes_data = [
        { id: "1", title:'R$', image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 1" },
        { id: "2", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 2" },
        { id: "3", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 3" },
        { id: "4", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 4" },
        { id: "5", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 5" },
        { id: "6", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 6" },
      ];
      const cortesia_data = [
        { id: "1", title:'R$', image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 1" },
        { id: "2", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 2" },
        { id: "3", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 3" },
        { id: "4", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 4" },
        { id: "5", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 5" },
        { id: "6", title:'R$',image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 6" },
      ];
    
      

      
      const Header = () => {
        const [userName, setUserName] = useState<string | null>(null);
        const [userAddress, setUserAddress] = useState<string | null>(null);
      
        useEffect(() => {
          const loadUser = async () => {
            try {
              const name = await AsyncStorage.getItem('userNome');
              const address = await AsyncStorage.getItem('userEndereco');
              if (name && address) {
                setUserName(name);
                setUserAddress(address);
              } else {
                setUserName('Visitante');
                setUserAddress('Endereço não disponível');
              }
            } catch (error) {
              console.error('Erro ao carregar dados do usuário:', error);
            }
          };
      
          loadUser(); 
        }, []); 
      
        if (userName === null || userAddress === null) {
          return <Text>Carregando...</Text>;
        }
      
        return (
          <View >
            <Text style={
            {fontWeight: 'bold',
             fontSize: 20
            }
          }> {userAddress}</Text>
          </View>
        );
      };
      
  
      
  return (
    
    <ScrollView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:20
      }}>
         <Header />

        <TouchableOpacity>
         <IconButton
         icon="bell-ring"
         iconColor='red'
         size={20}
         onPress={() => console.log('Pressed')}
         ></IconButton>
        </TouchableOpacity>
      </View>


     

       <View style={styles.section}>
     
        <View style={styles.imageContainer}>
          <View style={styles.row}>
            <Image
              source={{ uri: "https://institucional.ifood.com.br/wp-content/uploads/2024/07/comidas-tipicas-coxinha.jpg" }}
              style={styles.largeImage}
            />
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1KfQFkW0UwUjJpyrTW7OgARmFCbkwT3wFg&s" }}
              style={styles.largeImage}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={{ uri: "https://www.gastronomia.com.br/wp-content/uploads/2023/10/1o-festival-comidas-do-mundo-ocorre-em-sao-paulo-no-fim-de-semana.jpg" }}
              style={styles.smallImage}
            />
            <Image
              source={{ uri: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-comidas-faceis-de-fazer.png" }}
              style={styles.smallImage}
            />
            <Image
              source={{ uri: "https://www.mundoviajante.com/wp-content/uploads/2021/01/comidas_tipicas_do_piaui.jpg" }}
              style={styles.smallImage}
            />
            <Image
              source={{ uri: "https://casasavendaorlando.com.br/wp-content/uploads/Comidas-tipicas-de-Orlando.jpg.webp" }}
              style={styles.smallImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Famosos do Ifome</Text>
  <FlatList
    data={famosos_data} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => (
      <View style={styles.listItem}>
        <Image source={{ uri: item.image }} style={styles.listItemImage} />
        <Text style={styles.listItemTitle}>{item.title}</Text>
      </View>
    )}
  />
</View>

      <View style={styles.section}>
      
          <Text style={styles.sectionTitle}>Novidades</Text>
        <Text style={styles.sectionContent}>Tudo de novo do nosso app</Text>
      <Carousel></Carousel>
        
      </View>
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Os mais pedidos</Text>
  <Text>Comidas mais pedidas do app</Text>
  <FlatList
    data={pedidos_data} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => (
      <View style={styles.listItemLarge}>
        
        <Image source={{ uri: item.image }} style={styles.listItemImageLarge} />
        
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemDescription}>
          {item.description}
        </Text>
      </View>
    )}
  />
  
</View>
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Promoção Relampago</Text>
  <Text>Comidas mais pedidas do app</Text>
  <FlatList
    data={promocoes_data} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => (
      <View style={styles.listItemLarge}>
        
        <Image source={{ uri: item.image }} style={styles.listItemImageLarge} />
        
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemDescription}>
          {item.description}
        </Text>
      </View>
    )}
  />
  
</View>
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Taxa de cortesia</Text>
  <Text>Produtos sem taxa de entrega</Text>
  <FlatList
    data={cortesia_data} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => (
      <View style={styles.listItemLarge}>
        
        <Image source={{ uri: item.image }} style={styles.listItemImageLarge} />
        
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemDescription}>
          {item.description}
        </Text>
      </View>
    )}
  />
  
</View>
<View style={styles.section}>
        <Text style={styles.sectionTitle}>Lojas</Text>
        <Text>Lojas parceiras</Text>
        <View style={styles.horizontalList}>
          {lojas_data.map((item) => (
            <View key={item.id} style={styles.promoListItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.listItemImage}
              />
              <View style={styles.promoListItemInfo}>
                <Text style={styles.listItemTitle}>{item.title}</Text>
                <Text style={styles.promoListItemDescription}>
                  {item.descricao}
                </Text>
                <Text style={styles.promoListItemAddress}>
                  {item.endereco}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
 
      <View style={styles.footer}>
      </View>
      
    </ScrollView>
  );
}
