import React from 'react';
import {
  Menu,
  Button,
  VStack,
  Center,
  NativeBaseProvider,
  Text,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

//colors
import COLORS from "../../../../styles/theme";

function Filtro() {
  const [shouldOverlapWithTrigger] = React.useState(false);
  const [position, setPosition] = React.useState('auto');
  return (
    <VStack space={2} alignSelf="flex-start" w="100%">
      <Menu
        w="160"
        shouldOverlapWithTrigger={shouldOverlapWithTrigger}
        // @ts-ignore
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps: any) => {
          return (
            <Button
              alignSelf="center"
              variant="solid"
              backgroundColor="#FFFFFF"
              colorScheme="dark"
              borderRadius={20}
              shadow={1}
              height={10}
              startIcon={
                <Ionicons name="menu-outline" size={15} color="#000000"/>
              }
              endIcon={
                <Ionicons name="chevron-down-outline" size={16} color="#000000"/>
              }
              {...triggerProps}>
              <Text >Rating</Text>
            </Button>
          );
        }}>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
        <Menu.Item>4</Menu.Item>
        <Menu.Item>5</Menu.Item>
      </Menu>
    </VStack>
  );
}

export default Filtro;

