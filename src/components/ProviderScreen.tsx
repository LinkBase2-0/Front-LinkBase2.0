import React, { useEffect, useState } from "react"; 
import { ImageBackground, PixelRatio, Linking } from "react-native";
import axios, { AxiosResponse } from "axios";
import { 
  Alert,
  ArrowBackIcon, 
  Box, 
  Button, 
  Center,
  CloseIcon,
  HStack, 
  IconButton, 
  Image,  
  Modal, 
  Pressable, 
  ShareIcon, 
  Text, 
  TextArea, 
  VStack 
} from "native-base";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import StarSvg from "../assets/svg/StarSvg";
import MapSvg from "../assets/svg/MapSvg";
import PageSvg from "../assets/svg/PageSvg";
import PhoneSvg from "../assets/svg/PhoneSvg";
import SimpleStarSvg from "../assets/svg/SimpleStarSvg";
import { ProviderProps } from "./Navigators/HomeNavigator";
import { Provider } from "../screens/Usuario/Home/Home";
import calculateReviewAverage from "../utils/calculateReviewAverage";
import ReviewGraphRow from "../commons/ReviewGraphRow";
import reviewsToGraph from "../utils/reviewsToGraph";
import { parseDMS } from "../utils/utils";

type responsiveFontSize = (size: number) => number;
type ReviewBody = {
  review: {
    text: string,
    stars: number
  },
  user: {
    email: string
  },
  provider: {
    name: string
  }
}
export type Review = {
  id: number,
  text: string,
  stars: number,
  createdAt: string,
  updatedAt: string,
  ProviderId: number,
  UserId: number
}

const ProviderScreen: React.FC<ProviderProps> = ({ navigation,route }) => {
  const [provider, setProvider] = useState<Provider>({} as Provider);
  const [reviews, setReviews] = useState<Review[]>([{
    id: 0,
    text: "",
    stars: 0,
    createdAt: "",
    updatedAt: "",
    ProviderId: 0,
    UserId: 0
  }]);
  const [reviewAverage, setReviewAverage] = useState<number>(0);
  const [showWriteReview, setShowWriteReview] = useState<boolean>(false);
  const [showPageAlert, setShowPageAlert] = useState<boolean>(false)
  const [newReviewText, setNewReviewText] = useState<string>("");
  const [starRating, setStarRating] = useState(0);
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

  const handleGetDirections = () => {
    const latitude = parseDMS(provider.latitude)
    const longitude =  parseDMS(provider.longitude)
    const url = `https://maps.google.com/maps?origin=My_Location&daddr=${latitude},${longitude}`;

    Linking.openURL(url).catch(err => {
      console.error('Failed to open Google Maps: ', err);
    });
  }

  const handleSubmitReview = async (): Promise<void> => {
    const reviewBody: ReviewBody = {
      review: {
        text: newReviewText,
        stars: starRating
      },
      user: {
        email: "fabioalessandrotr@gmail.com"
      },
      provider: {
        name: provider.name
      }
    }

    await axios.post(`${process.env.IP_ADDRESS}/reviews`, reviewBody);
    setShowWriteReview(false);
  }

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
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowBackIcon size="6" color="white" />
            </Pressable>
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
              <StarSvg size={19} fill={reviewAverage >= 1 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage >= 2 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage >= 3 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage >= 4 ? "#981D9A" : "#BAB1B1"}/>
              <StarSvg size={19} fill={reviewAverage === 5 ? "#981D9A" : "#BAB1B1"}/>
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
        <Pressable
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
          onPress={handleGetDirections}
        >
          <MapSvg />
          <Text
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Mapa</Text>
        </Pressable>
        {/*Page Button*/}
        <Pressable 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
          onPress={
            provider.web ? 
              () => Linking.openURL(provider.web) : 
              () => setShowPageAlert(true)
          }
        >
          <PageSvg />
          <Text
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Página</Text>
          <Modal isOpen={showPageAlert} >
            <Modal.Content maxWidth="400">
              <Alert w="100%" status="error">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="center">
                    <HStack space={2} flexShrink={1} >
                      <Alert.Icon mt="0.5" ml="2"/>
                      <Text 
                        fontSize="sm" 
                        color="coolGray.800"
                        alignSelf="center"
                      >Este proveedor no tiene página web. </Text>
                    </HStack>
                    <IconButton 
                      onPress={() => setShowPageAlert(false)}
                      variant="unstyled" 
                      _focus={{borderWidth: 0}} 
                      icon={<CloseIcon size="3" />} 
                      _icon={{color: "coolGray.600"}} 
                    />
                  </HStack>
                </VStack>
              </Alert>
            </Modal.Content>
          </Modal>
        </Pressable>
        {/*Call Button*/}
        <Pressable 
          display="flex" 
          flexDirection="column"
          width="10"
          height="12"
          pt="1" 
          alignItems="center" 
          justifyContent="center"
          onPress={()=>Linking.openURL(`tel:${provider.phone}`)}
        >
          <PhoneSvg />
          <Text
            mt="1"
            fontFamily="body"
            fontSize={getFontSize(12)}
            fontWeight="500"
            color="black"
          >Llama</Text>
        </Pressable>
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
        {reviewsToGraph(reviews).reverse().map((average, index, array) => (
          <ReviewGraphRow key={index} stars={array.length - index} average={average} />
        ))}
        </VStack>
        <Center flex="1" flexDirection="column" pb="3">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Text fontSize="40" mr="2">{reviewAverage}</Text>
            <SimpleStarSvg />
          </Box> 
          <Text>{reviews.length} {reviews.length !== 1 ? "Reseñas" : "Reseña"}</Text>
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
      </Box>
      {/*Create Review Button*/}
      <Center 
        mt="7"
      >
        <Button 
          width="320" 
          borderRadius="10"
          onPress={() => setShowWriteReview(true)}
          variant="outline" 
          colorScheme="gray"
        >Escribe Tu Reseña</Button>
        <Modal isOpen={showWriteReview}>
          <Modal.Content maxWidth="400">
            <Modal.Header>Nueva Reseña</Modal.Header>
            <Modal.Body>
              <Center>
                <TextArea 
                  value={newReviewText}
                  onChangeText={setNewReviewText}
                  h={20} 
                  placeholder="¿Que te pareció este proveedor?" 
                  w="100%" 
                  maxW="350" 
                  autoCompleteType={undefined} 
                />
                <HStack width="100%" mt="4" justifyContent="center" space={1}>
                  <Pressable onPress={() => setStarRating(1)}>
                    <StarSvg size={25} fill={starRating >= 1 ? "#981D9A" : "#BAB1B1"} />
                  </Pressable>
                  <Pressable onPress={() => setStarRating(2)}>
                    <StarSvg size={25} fill={starRating >= 2 ? "#981D9A" : "#BAB1B1"} />
                  </Pressable>
                  <Pressable onPress={() => setStarRating(3)}>
                    <StarSvg size={25} fill={starRating >= 3 ? "#981D9A" : "#BAB1B1"} />
                  </Pressable>
                  <Pressable onPress={() => setStarRating(4)}>
                    <StarSvg size={25} fill={starRating >= 4 ? "#981D9A" : "#BAB1B1"} />
                  </Pressable>
                  <Pressable onPress={() => setStarRating(5)}>
                    <StarSvg size={25} fill={starRating >= 5 ? "#981D9A" : "#BAB1B1"} />
                  </Pressable>
                </HStack>
              </Center>
            </Modal.Body>
            <Modal.Footer>
            <Button.Group space={2}>
              <Button 
                variant="ghost" 
                colorScheme="blueGray" 
                onPress={() => {
                  setShowWriteReview(false);
                }}
              >Cancel</Button>
              <Button 
                variant="outline"
                colorScheme="gray"
                onPress={handleSubmitReview}
              >Save</Button>
            </Button.Group>
          </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </Box>
  );
}

export default ProviderScreen;