import { HStack, Image } from "@chakra-ui/react";
import logo_web from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo_web}  boxSize='60px'/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
        
    )
}

export default NavBar;