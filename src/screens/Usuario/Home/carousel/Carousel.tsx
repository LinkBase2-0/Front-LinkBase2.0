import React, { useRef } from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { StarSvg } from "../../../../assets/svgImages/Usuario/Home";
import { OverviewProps } from "../../../../components/Navigators/HomeNavigator";

interface Proveedor {
  id: string;
  title: string;
  image: any;
  review: number;
  distance: string;
}


const proveedores: Proveedor[] = [
  {
    id: "1",
    title: "Proveedor 1",
    image: require("../../../../assets/svgImages/Usuario/Home/imgs/Slider11.png"),
    review: 4.5,
    distance: "a 1 km",
  },
  {
    id: "2",
    title: "Proveedor 2",
    image: require("../../../../assets/svgImages/Usuario/Home/imgs/slider2.jpg"),
    review: 3.2,
    distance: "a 1 km",
  },
];

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  
  justify-content: center;
  width: 100%;
`;

const ScrollContainer = styled.View`
  display: flex;
  margin-bottom: 80px;
  height: 250px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled(ImageBackground)`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const TextContainer = styled.View`
`;

const IndicatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 17px;
  font-family: ${(props) => props.theme.FONTS.OUTFITBOLD};
`;

const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StarText = styled.Text`
  font-size: 13px;
  margin-left: 2%;
  font-family: ${(props) => props.theme.FONTS.OUTFITLIGHT};
`;

const Carousel: React.FC<OverviewProps> = ({ navigation, route }) => {

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef(null);

  const { width: windowWidth } = useWindowDimensions();

  const renderDots = (index: number) => {
    const inputRange = [
      (index - 1) * windowWidth,
      index * windowWidth,
      (index + 1) * windowWidth,
    ];

    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [8, 9, 8],
      extrapolate: "clamp",
    });

    const dotColor = scrollX.interpolate({
      inputRange,
      outputRange: ["#C4C4C4", "#828282", "#C4C4C4"],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        key={index}
        style={{
          width: dotWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: dotColor,
          marginHorizontal: 4,
        }}
      />
    );
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
        >
          {proveedores.map((proveedor, proveedorIndex) => {
            return (
              <Pressable onPress={() => navigation.navigate("Provider")} key={proveedor.id}>
            
          
              <View
                style={{ width: windowWidth - 20, height: 200, }}
                key={proveedor.id}
              >
                <Card
                  key={proveedor.id}
                  source={proveedor.image}
                  style={{ elevation: 3 }}
                ></Card>
                <TextContainer>
                  <View style={{ paddingLeft: 15, marginTop: 5 }}>
                    <Title>{proveedor.title}</Title>
                    <StarContainer>
                      <StarSvg />
                      <StarText>
                        {proveedor.review} (20 reseñas) {proveedor.distance}
                      </StarText>
                    </StarContainer>
                  </View>
                </TextContainer>
              </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <IndicatorContainer>
          {proveedores.map((_, index) => renderDots(index))}
        </IndicatorContainer>
      </ScrollContainer>
    </Container>
  );
};

export { Carousel };
