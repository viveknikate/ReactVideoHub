import React from "react";
import { 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {BiMenuAltLeft} from 'react-icons/bi';

const Header =()=>{

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <>
            <Button 
                pos={'fixed'}
                colorScheme={'purple'} 
                top={'4'} 
                zIndex={'overlay'}
                left={'4'} 
                borderRadius={'full'} 
                h={'10'} 
                w={'10'} 
                p={'0'} 
                onClick={onOpen}
                >
                <BiMenuAltLeft />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement={'start'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton/> 
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button  onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button  onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                <Link to={'/videos'}>Vidoes</Link>
                            </Button>
                            <Button onClick={onClose}  variant={'ghost'} colorScheme={"purple"}>
                                    <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                            <Button  onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                    <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>
                        <HStack
                            pos={'absolute'}
                            bottom={10}
                            left={0}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button  onClick={onClose} variant={'solid'} colorScheme={'purple'}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button  onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;