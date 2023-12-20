import { HStack, Image } from "@chakra-ui/react";
import logo_web from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
    return (
        <HStack>
            <Image src={logo_web}  boxSize='60px'/>
            <ColorModeSwitch/>
        </HStack>
        
    )
}

export default NavBar;