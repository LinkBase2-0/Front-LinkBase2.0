import React from 'react';
import { ArrowBackIcon, Box, Button, Input, Pressable, Stack, Text, VStack } from "native-base";
import { LogInProps } from '../../App';

const LogInScreen: React.FC<LogInProps> = ({ navigation }) => (

	<Box
		safeArea
		display="flex"
		flex="1"
		justifyContent="flex-start"
		bgColor="white"
	>
		<Box px="39" pt="10" pb="6" flexDirection="row" alignItems="center">
			<Pressable onPress={() => navigation.navigate("Intro")}>
				<ArrowBackIcon size="6" color="#464444"/>
			</Pressable>
			<Text 
				mx="50"
				fontFamily="body" 
				fontSize="4xl" 
				fontWeight="700" 
				color="#464444"
			>Iniciar Sesión</Text>	
		</Box>
		<VStack space={5} alignItems="center">
			<Text 
				px="16" 
				fontFamily="body"
				fontWeight="400"
				textAlign="center"
			>Inicia sesión o crea una cuenta para empezar 
			a conectar con proveedores cerca de ti</Text>
			<Stack space={3} width="75%" mx="auto" alignItems="center" mt="6">
				<Input 
					size="md" 
					variant="filled" 
					placeholder="Nombre de Usuario o Email" 
					shadow="2" 
					borderRadius="15"
					width="320"
					height="60"
					isFocused={false}
					focusOutlineColor="none"
					_focus={{bg:"none"}}
				/>
				<Input 
					size="md" 
					variant="filled" 
					placeholder="Contraseña" 
					shadow="2" 
					borderRadius="15"
					width="320"
					height="60"
					isFocused={false}
					focusOutlineColor="none"
					_focus={{bg:"none"}}
					type="password"
				/>
			</Stack>
			<Pressable onPress={() => navigation.navigate("Intro")}>
				<Box 
					px="39"
					width="100%" 
					display="flex"
					flexDirection="row" 
					justifyContent="flex-end"
				>
					<Text 
						fontFamily="body"
						fontSize="lg"
						fontWeight="500"
						color="#666161"
					>Olvidaste tu contraseña?</Text>	
				</Box>
			</Pressable>	
			<Box display="flex" flexDirection="row">
				<Button
					onPress={() => navigation.navigate("Main")}
					width="320"
					height="60"
					borderRadius="15"
					bg="#981D9A"
					_pressed={{ bg: "#6f1570" }}
					shadow="9"
				>
					<Text 
						fontFamily="heading" 
						fontSize="lg"
						fontWeight="700"
						color="white"
					>Iniciar Sesión</Text>
				</Button>
			</Box>
		</VStack>
	</Box>
);

export default LogInScreen;	