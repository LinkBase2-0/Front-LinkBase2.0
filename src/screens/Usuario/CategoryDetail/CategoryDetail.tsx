import React,{useState,useEffect} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Filter from "./Filter"
import { Container, Category, CategoryText, Line, CardImage, CardTitle, CardText } from "./styles";
import { CategoryDetailProps } from "../../../../App";
import { StarSvg } from "../../../assets/svgImages/Usuario/Home";

interface Proveedor {
  id: string;
  title: string;
  image: any;
  review: number;
  distance: number;
  count: number;
}

const proveedoresInit: Proveedor[] = [
  {
    id: "1",
    title: "Office Depot",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/Slider11.png"),
    review: 4.5,
    distance: 3,
    count:20,
  },
  {
    id: "2",
    title: "Plomería García",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider2.jpg"),
    review: 3.2,
    distance: 5,
    count:3,
  },
  {
    id: "3",
    title: "Ferreteria Centenario",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/ferreteria.jpg"),
    review: 3.9,
    distance: 1.5,
    count:8,
  },
  {
    id: "4",
    title: "Construrama",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/construrama.jpeg"),
    review: 4.1,
    distance: 6.8,
    count:29,
  },
];

const CategoryDetail: React.FC<CategoryDetailProps> = ({ navigation,route }) => {

  const [proveedores,setProveedores] = useState(proveedoresInit)
  const [value, setValue] = useState("0")

  const services = [
      { label: 'Construcción', value: '1' },
      { label: 'Productos Limpieza', value: '2' },
      { label: 'Material Oficina', value: '3' },
      { label: 'Refacciones', value: '4' },
    ];

    const rating = [
      { label: 'Calificación', value: '1' },
      { label: 'Distancia', value: '2' },
      { label: 'Interacciones', value: '3' },
    ];

    useEffect(() => {
      handleSort(value)
    },[]);

    const handleSort = (value:string)=>{
    
      if (value ==="1" || "0"){
        const sortedProveedores = proveedores.sort((a,b)=>b.review-a.review);
        setProveedores([...sortedProveedores])
      }
      if (value ==="2"){
        const sortedProveedores = proveedores.sort((a,b)=>a.distance-b.distance);
        setProveedores([...sortedProveedores])
      }
      if (value ==="3"){
        const sortedProveedores = proveedores.sort((a,b)=>b.count-a.count);
        setProveedores([...sortedProveedores])
      }
    }
   

   return (
    <Container>
      <View style={{flexDirection:"row", width:"100%", justifyContent:"center", position:"relative", marginTop:89}}>
        <TouchableOpacity  style={{alignSelf:"flex-start", position:"absolute", left:32}} onPress={()=> navigation.goBack()}>
          <ArrowLeftIcon color ="black" size={30}/>
        </TouchableOpacity> 
      <Category>
        <CategoryText>{route.params.categoryName}</CategoryText>
      </Category>
      </View>
      <View style={{flexDirection:"row", width:"100%", justifyContent:"space-around", position:"relative", marginTop:20}}>
      <Filter data={services} search={true}placeholderName={"Sub-Categoría"}handleSort={()=>console.log(".")}/>
      <Filter data={rating} search={false} placeholderName={"Ordenar por..."} handleSort={handleSort}/>
      </View> 
      <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:"center"}}>
      {proveedores.map((proveedor, proveedorIndex) => {
            return (<>
              <CardImage key={proveedor.id} source={proveedor.image}/>
              <CardTitle>{proveedor.title}</CardTitle>
              <View style={{flexDirection:"row",alignSelf:"flex-start", marginLeft:39}}>
              <StarSvg/>
              <CardText>{`${proveedor.review} (${proveedor.count} calificaciones) a ${proveedor.distance} km`}</CardText>
              </View>              
              <Line/>
              </>
            );
          })}
          </ScrollView>     
    </Container>       
  );
};

export default CategoryDetail;
