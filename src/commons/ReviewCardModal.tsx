import React from "react";
import { PixelRatio } from "react-native";
import { Box, HStack, Image, Text } from "native-base";
import { Review } from "../components/ProviderScreen";
import StarSvg from "../assets/svg/StarSvg";

type Props = { review: Review }
type ResponsiveFontSize = (size: number) => number;

const ReviewCardModal: React.FC<Props> = ({ review }) => {

  let formattedFirstName;
  const fontScale: number = PixelRatio.getFontScale();
  const getFontSize: ResponsiveFontSize = size => size / fontScale;
  
  if (review.User.fullName) {

    const userFirstName: string = review.User.fullName.trim().split(/(?<=^\S+)\s/)[0];
    formattedFirstName = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1);
  }

  return (
    <Box 
      width="320" 
      height="auto"
    >
      <Box
        width="100%"
        height="78"
        justifyContent="center"
      >
        <HStack>
          <Box 
            flexDirection="row"
            width="50%"
            height="100%"
            px="3"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Image 
              size="47"
              borderRadius="10"
              source={require("../assets/images/userImage.png")} 
              alt="User's Profile Picture" 
            />
            <Box px="4">
              <Text
                fontFamily="body" 
                fontSize={getFontSize(18)}
                fontWeight="700" 
                color="#2B273C"
              >{formattedFirstName}</Text>
              <Text 
                fontSize={getFontSize(12)} 
                color="#757280"
              >{new Date(review.createdAt).toLocaleDateString()}</Text>
            </Box>
          </Box>
          <Box 
            flexDirection="row"
            width="50%" 
            height="100%"
            px="5"
            alignItems="center"
            justifyContent="center"
          >
            <HStack>
            {[...Array(5)].map((element, index) => (
              <StarSvg 
                key={index} 
                size={19} 
                fill={review.stars >= index + 1 ? "#981D9A" : "#BAB1B1"}
              />
            ))}
            </HStack>
          </Box>
        </HStack>
      </Box>
  {review.text 
    ? <Box 
        width="100%"
        height="auto"
        padding="4"
        borderTopWidth="2"
        borderColor="#EAE8E8"
      >
        <Text
          fontFamily="body"
          fontSize={getFontSize(10)}
          fontWeight="400"
          color="#2A363D"
        >{review.text}</Text>
      </Box>
    : null}
    </Box>
  );
}

export default ReviewCardModal;