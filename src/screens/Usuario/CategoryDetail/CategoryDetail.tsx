import React,{useState,useEffect} from "react";
import { View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Filter from "./Filter"
import { Container, Category, CategoryText, Line, CardImage, CardTitle, CardText } from "./styles";
import { CategoryDetailProps } from "../../../../App";
import { StarSvg } from "../../../assets/svgImages/Usuario/Home";
import { calculateDistance, parseDMS, calculateReview } from "../../../utils/utils";
import axios from "axios";

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

const servicesInit = [
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


const latitude:number = -34.96121822927283
const longitude:number = -60.03239215916995

const CategoryDetail: React.FC<CategoryDetailProps> = ({ navigation,route }) => {

  const [proveedores, setProveedores] = useState<{id: number, title: string, image: string, review: number, distance: number, count: number}[]>([]);
  const [services, setServices] = useState<{label:string, value:string}[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const result = await axios.get(`${process.env.IP_ADDRESS}/providers/filterByCategorie/${route.params.categoryName}`);
      // const result = await axios.get(`${process.env.IP_ADDRESS}/providers/filterByCategorie/Profesionales`);
      const promises = result.data.map(async (provider: any) => {
        const lat: number = parseDMS(provider.latitude);
        const lon: number = parseDMS(provider.longitude);
        const reviewsRes: any = await axios.get(
          `${process.env.IP_ADDRESS}/reviews/providerReviews/${provider.id}`
        );
        return {
          id: provider.id,
          title: provider.name,
          image: provider.photoURL,
          review: calculateReview(reviewsRes.data.reviews),
          distance: calculateDistance(latitude, longitude, lat, lon),
          count: reviewsRes.data.reviews.length,
        };
      });        
      const data = await Promise.all(promises);
      return data
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchServices = async () => {
    try{
      const getServices:any = await axios.get(`${process.env.IP_ADDRESS}/services`)
      const allServices:any = getServices.data.map((service:any)=>{
        return{
          value:service.id.toString(),
          label: service.name
        }})
      setServices(allServices)}
    catch (error:any){
      console.log(error.message)
    }
    };
  

  useEffect(() => {   
    const renderData = async()=>{
      const data:any = await fetchData()
      setProveedores(data)
    }
    renderData();
    fetchServices();
  }, []);
 

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

    const handleFilter = async(value:string)=>{
      const allProviders:any = await fetchData();
      const getByService:any = await axios.get(`${process.env.IP_ADDRESS}/providers/filterByService/${value}`)
      const providersWithService = getByService.data.map((each:any)=>each.name)
      const filteredProviders = allProviders.filter((proveedor:any)=>providersWithService.includes(proveedor.title))
      setProveedores(filteredProviders)
    }

    
   return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ): (<>
      <View style={{flexDirection:"row", width:"100%", justifyContent:"center", position:"relative", marginTop:89}}>
        <TouchableOpacity  style={{alignSelf:"flex-start", position:"absolute", left:32}} onPress={()=> navigation.goBack()}>
          <ArrowLeftIcon color ="black" size={30}/>
        </TouchableOpacity> 
      <Category>
        <CategoryText>{route.params.categoryName}</CategoryText>
      </Category>
      </View>
      <View style={{flexDirection:"row", width:"100%", justifyContent:"space-around", position:"relative", marginTop:20}}>
      <Filter data={services} search={true} placeholderName={"Sub-Categoría"}  handleSort={()=>{}} handleFilter={handleFilter}/>
      <Filter data={rating} search={false} placeholderName={"Ordenar por..."} handleSort={handleSort} handleFilter={()=>{}}/>
      </View> 
      <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:"center"}}>
      {proveedores.map((proveedor, i) => {
            return (<TouchableOpacity key={proveedor.id} onPress={()=> navigation.navigate("Provider")}>
              <CardImage source={{uri: proveedor.image}}/>
              <CardTitle>{proveedor.title}</CardTitle>
              <View style={{flexDirection:"row",alignSelf:"flex-start"}}>
              <StarSvg/>
              <CardText>{`${proveedor.review} (${proveedor.count} calificaciones) a ${proveedor.distance} km`}</CardText>
              </View>              
              <Line/>
              </TouchableOpacity>
            );
          })}
          </ScrollView>    
      </>)}
       
    </Container>       
  );
};

export default CategoryDetail;
