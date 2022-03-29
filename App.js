import { View } from "react-native";
import Buttons from "./src/components/Buttons";
import Header from "./src/components/Header";
import games from "./assets/data/gameData";
import './App.css'
import { FlatList } from "react-native-web";
import ProductCard from "./src/components/ProductCard";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Header />
      <Buttons 
        button1={{logo: 'game-controller', text: 'sobe', color: '#0CABA8'}} 
        button2={{logo: 'game-controller', text: 'desce', color: '#008F8C'}} 
      />

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
    </View>
  );
}
