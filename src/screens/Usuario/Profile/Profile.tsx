import React from "react";
import { Text } from "react-native";
import { Container } from "../Login/styles";
const Profile: React.FC = () => {
  return (
    <Container style={{flex: 1, justifyContent: "center" , alignItems: "center"}}>
      <Text>Profile</Text>
    </Container>
  );
};

export { Profile };
