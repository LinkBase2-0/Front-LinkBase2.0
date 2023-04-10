import React, { useEffect, useState } from "react"; 
import { ImageBackground, PixelRatio } from "react-native";
import axios, { AxiosResponse } from "axios";
import { ArrowBackIcon, Box, Center, HStack, Image, ShareIcon, Text, VStack } from "native-base";
import StarSvg from "../assets/svg/StarSvg";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import MapSvg from "../assets/svg/MapSvg";
import PageSvg from "../assets/svg/PageSvg";
import PhoneSvg from "../assets/svg/PhoneSvg";
import SimpleStarSvg from "../assets/svg/SimpleStarSvg";
import { ProviderProps } from "./Navigators/HomeNavigator";
import { Provider } from "../screens/Usuario/Home/Home";
import calculateReviewAverage from "../utils/calculateReviewAverage";

type responsiveFontSize = (size: number) => number;
export type Review = {
  id: number,
  text: string,
  stars: number,
  createdAt: string,
  updatedAt: string,
  ProviderId: number,
  UserId: number
}

const ProviderScreen: React.FC<ProviderProps> = ({ navigation, route }) => {
  const [provider, setProvider] = useState<Provider>({} as Provider);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewAverage, setReviewAverage] = useState<number>(0);
	const fontScale: number = PixelRatio.getFontScale();
	const getFontSize: responsiveFontSize = size => size / fontScale;

  useEffect(() => {
    async function requestProviderData(): Promise<void> {
      try {
        const providerResponse: AxiosResponse<Provider> = await axios.get(
          `${process.env.IP_ADDRESS}/providers/find/${route.params.name}`
        );
        const reviewResponse: AxiosResponse = await axios.get(
          `${process.env.IP_ADDRESS}/reviews/providerReviews/${providerResponse.data.id}`
        );
        const reviews = reviewResponse.data.reviews;
        setReviewAverage(calculateReviewAverage(reviews))
        setProvider(providerResponse.data);
        setReviews(reviews);
      } catch (error: any) {
        console.error(error.response.data);
      }
    }

    requestProviderData();
  }, []);

  if (!provider.name) return null;

  return (
    <Box 
      display="flex"
      flexDirection="column"
      flex="1"
      bg="white"
    > 
      {/*Banner*/}
      <ImageBackground
        source={{ uri: `${provider.photoURL}`}} 
        resizeMode="cover"
      >
        <Box 
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        right= "0"
        bg="rgba(0, 0, 0, 0.6)"
        />
        <Box 
          display="flex" 
          flexDirection="column"
          width="100%" 
          height="199" 
          alignItems="center"
        >
          <Box 
            display="flex" 
            flexDirection="row" 
            width="320" 
            height="auto" 
            mt="12" 
            justifyContent="space-between" 
          >
            <ArrowBackIcon size="6" color="white" />
            <ShareIcon size="6" color="white" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="320"
            height="auto"
            mt="6"
            mb="10"
          >
            <Text
              mb="1"
              fontFamily="body"
              fontSize={getFontSize(22)}
              fontWeight="700"
              color="white"
            >{provider.name}</Text>
            <HStack mt="1" alignItems="center">
              <StarSvg size={19} fill={reviewAverage > 0 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage > 1 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage > 2 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage > 3 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage > 4 ? "#981D9A" : "#BAB1B1"}/>
              <Text
                ml="2"
                fontFamily="body"
                fontSize="15"
                fontWeight="500"
                color="white"
              >{reviews.length}</Text> 
            </HStack>
          </Box>
        </Box>
      </ImageBackground>
      {/*Header*/}
      <Box 
        display="flex" 
        flexDirection="column"
        width="320"
        height="auto"
        mt="6"
        alignSelf="center"
      >
        <Text
          fontFamily="body"
          fontSize="20"
          fontWeight="700"
          color="black"
        >{provider.name}</Text> 
        <Box 
          display="flex" 
          flexDirection="row"
          width="320"
          height="auto"
          justifyContent="space-between"
        >
          <Box 
            display="flex" 
            flexDirection="row"
            alignItems="center"
          >
            <Text
              mr="1"
              fontFamily="body"
              fontSize={getFontSize(12)}
              fontWeight="500"
              color="#31AE2E"
            >Abierto</Text>
            <Text
              ml="1"
              fontFamily="body"
              fontSize={getFontSize(12)}
              fontWeight="500"
              color="black"
            >7:00 AM - 8:00 PM</Text>
          </Box>
          <Box
            display="flex" 
            flexDirection="row"
            alignItems="center"
          >
            <Text
              mr="1"
              fontFamily="body"
              fontSize={getFontSize(12)}
              fontWeight="500"
              color="#31AE2E"
            >Ver Horario Completo</Text>
            <ArrowRightIcon size="12" color="#31AE2E"/>
          </Box>
        </Box>
      </Box>
      {/*Navbar*/}
      <Box
        display="flex"
        flexDirection="row"
        width="320"
        height="70"
        mt="5"
        alignSelf="center"
        alignItems="center"
        justifyContent="space-evenly"
        borderWidth="2"
        borderRadius="15"
        borderColor="#EAE8E8"
      >
        {/*Reviews Button*/}
        <Box 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
        >
          <StarSvg size={25} fill="#981D9A" />
          <Text
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="#981D9A"
          >Rating</Text>
        </Box>
        {/*Map Button*/}
        <Box 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
        >
          <MapSvg />
          <Text
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Mapa</Text>
        </Box>
        {/*Page Button*/}
        <Box 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
        >
          <PageSvg />
          <Text
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Página</Text>
        </Box>
        {/*Call Button*/}
        <Box 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
        >
          <PhoneSvg />
          <Text
            mt="1"
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Llama</Text>
        </Box>
      </Box>
      {/*Review Section*/}
      <Box
        display="flex"
        flexDirection="row"
        width="320"
        height="150"
        mt="1"
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
      >
        <VStack flex="3">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Center width="5" height="5"><Text>5</Text></Center>
            <Box width="210" height="2" my="2" borderRadius="10" bg="#dbdad7">
              <Box width="180" height="2" borderRadius="10" bg="#981D9A" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Center width="5" height="5"><Text>4</Text></Center>
            <Box width="210" height="2" my="2" borderRadius="10" bg="#dbdad7">
              <Box width="130" height="2" borderRadius="10" bg="#981D9A" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Center width="5" height="5"><Text>3</Text></Center>
            <Box width="210" height="2" my="2" borderRadius="10" bg="#dbdad7">
              <Box width="100" height="2" borderRadius="10" bg="#981D9A" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Center width="5" height="5"><Text>2</Text></Center>
            <Box width="210" height="2" my="2" borderRadius="10" bg="#dbdad7">
              <Box width="60" height="2" borderRadius="10" bg="#981D9A" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Center width="5" height="5"><Text>1</Text></Center>
            <Box width="210" height="2" my="2" borderRadius="10" bg="#dbdad7">
              <Box width="30" height="2" borderRadius="10" bg="#981D9A" />
            </Box>
          </Box>
        </VStack>
        <Center flex="1" flexDirection="column" pb="3">
          <Box flexDirection="row" alignItems="center">
            <Text fontSize="40" mr="2">{reviewAverage}</Text>
            <SimpleStarSvg />
          </Box> 
          <Text>{reviews.length} {reviews.length === 1 ? "Reseña" : "Reseñas"}</Text>
        </Center>
      </Box>
      {/*Review Details*/}
      <Box 
        display="flex"
        flexDirection="column"
        width="320"
        height="115"
        mt="1"
        alignSelf="center"
        borderWidth="2"
        borderRadius="15"
        borderColor="#EAE8E8"
      >
        <Box 
          display="flex" 
          flexDirection="row"
          mx="6"
          mt="3"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Image 
            width="50"
            height="50"
            borderRadius="10"
            source={require("../assets/images/userImage.png")} 
            alt="User's Profile Picture" 
          />
          <Box 
            display="flex" 
            flexDirection="column"
            mx="4"
          >
            <Text 
              mt="1" 
              fontFamily="body" 
              fontSize={getFontSize(18)}
              fontWeight="700" 
              color="#2B273C"
            >Juan Pérez</Text>
            <Text fontSize={getFontSize(12)} color="#757280">7/21/2020</Text>
          </Box>
          <HStack mt="2" alignItems="center">
            <StarSvg size={19} fill="#981D9A"/>
            <StarSvg size={19} fill="#981D9A"/>
            <StarSvg size={19} fill="#981D9A"/>
            <StarSvg size={19} fill="#BAB1B1"/>
            <StarSvg size={19} fill="#BAB1B1"/> 
          </HStack>
        </Box>
        <Box
          display="flex" 
          flexDirection="row"
          mx="6"
          mt="2"
          mb="3"
          justifyContent="flex-start"
        >
          <Text
            fontFamily="body"
            fontSize={getFontSize(9.5)}
            fontWeight="400"
            color="#2A363D"
          >Excelente lugar. Pude encontrar todo lo que 
          buscaba a un muy buen precio, recomendable.</Text>
        </Box>
        <Text 
          mt="2"
          alignSelf="flex-end"
          fontFamily="body"
          fontSize="15"
          fontWeight="400"
          color="#981D9A"
        >Ver Más</Text>
      </Box>
      {/*Create Review Button*/}
      <Box
        display="flex"
        flexDirection="row"
        width="320"
        height="30"
        mt="8"
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        borderWidth="1"
        borderRadius="15"
        borderColor="#EAE8E8"
        bg="white"
        shadow="1"
      >
        <Text 
          fontFamily="body"
          fontSize={getFontSize(9.5)}
          fontWeight="400"
          color="#2A363D"
        >Escribe Tu Reseña</Text>
      </Box>
    </Box>
  );
}

export default ProviderScreen;