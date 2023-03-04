import React from "react";
import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";

import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.png';

const HeadingOptions ={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    borderRadius:'15',
    p:'4',
    textTransform:'uppercase',
    size:'2xl'
}

const Home = () =>{
    return(
        <Box>
            <MyCarousel />
            <Container minH={'100vh'} p={16} maxW={'container.xl'}>
                <Heading 
                    textTransform={'uppercase'} 
                    borderBottom={'3px solid'} 
                    textAlign={'center'} 
                    width={'fit-content'} 
                    margin={'auto'}
                    py={2}
                >
                    Services
                </Heading>
                <Stack
                    alignItems={'center'}
                    h={'full'}
                    p={'4'}
                    direction={['column','row']}
                >
                    <Image src={photo5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>
                    <Text letterSpacing={'widest'} lineHeight={2} p={[4,16]} textAlign={'center'}>
                    What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, 
                    you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?
                    I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do.
                    Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. 
                    But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}
export default Home;

const MyCarousel = () =>{
   return(
    <Carousel 
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        interval={1500} 
        showStatus={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={photo1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
                <Image src={photo2} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={'whiteAlpha.900'} color={'black'} {...HeadingOptions}>
                    Future is gaming
                </Heading>
            </Box>
        <Box w={'full'} h={'100vh'}>
                <Image src={photo3} h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
                        Gaming on Console
                </Heading>
            </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={photo4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
                Night Life
            </Heading>
        </Box>
    </Carousel>
   );
}
