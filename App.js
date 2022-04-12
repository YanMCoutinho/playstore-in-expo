import { View, Text } from "react-native";
import Buttons from "./src/components/Buttons";
import Header from "./src/components/Header";
import games from "./assets/data/gameData";
import comingSoon from "./assets/data/comingSoon";
import './App.css'
import { FlatList } from "react-native-web";
import ProductCard from "./src/components/ProductCard";
import BigProductCard from "./src/components/BigProductCard";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Header />
      <Buttons 
        button1={{logo: 'logo-android', text: 'APPS', color: 'black'}} 
        button2={{logo: 'game-controller', text: 'JOGOS', color: 'purple'}} 
      />
      <Buttons 
        button1={{logo: 'videocam', text: 'FILMES', color: 'green'}} 
        button2={{logo: 'musical-notes', text: 'MÚSICAS', color: 'orange'}} 
      />
      <Buttons 
        button1={{logo: 'book', text: 'LIVROS', color: 'blue'}} 
        button2={{logo: 'newspaper-outline', text: 'NOTÍCIAS', color: 'red'}} 
      />

      <Text style={{
        marginLeft: 10,
        fontSize: 21,
        marginTop: 50,
        fontWeight: 400,
      }}>
        Jogos em destaque
      </Text>

      <FlatList 
        horizontal = {true}
        data = {games}
        keyExtractor = {(item) => item.id}
        renderItem = { ({item}) => (
          <ProductCard 
            title={item.name}
            img={item.image}
            value={item.value}
          />
        )}
      />

      
      <Text style={{
        marginLeft: 15,
        fontSize: 21,
        marginTop: 50,
        fontWeight: 400,
      }}>
        Próximos lançamentos
      </Text>
      <FlatList 
        horizontal = {true}
        data = {comingSoon}
        keyExtractor = {(item) => item.id}
        renderItem = { ({item}) => (
          <BigProductCard 
            title={item.name}
            img={item.image}
            releaseDate={item.value}
          />
        )}
      />

    </View>
  );
}
