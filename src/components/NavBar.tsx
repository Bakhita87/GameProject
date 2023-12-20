import { HStack, Image, Text } from "@chakra-ui/react";
import logo_web from '../assets/logo.webp'


const NavBar = () => {
    return (
        <HStack>
            <Image src={logo_web}  boxSize='60px'/>
            <Text>NavBar</Text>
        </HStack>
        
    )
}

export default NavBar;