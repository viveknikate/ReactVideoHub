import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import {AiFillGithub,  AiFillInstagram, AiOutlineSend} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
    return (
        <Box  bgColor={'blackAlpha.900'} p={16} color={'white'} minH={50}>
            <Stack direction={['column','row']}>
                <VStack w={'full'} px={4} alignItems={'stretch'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                        py={2}
                    >
                        <Input 
                            placeholder='Enter email here...' 
                            border={'none'}
                            borderRadius={'none'}
                            focusBorderColor='none'
                            outline={'none'}
                        />
                        <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            p={0}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20}/>
                        </Button>
                    </HStack>
                </VStack>
                <VStack 
                    w={'full'}
                    borderLeft={['none','1px solid white']}
                    borderRight={['none','1px solid white']}
                    color={'white'}
                >
                    <Heading 
                        textTransform={'uppercase'}
                        textAlign={'center'}
                        backgroundImage={'linear-gradient(to right,rgba(121, 50, 168,.1) , rgba(121, 50, 168,1), rgba(121, 50, 168,.1))'}
                        borderBottom={' 3px solid white'}
                        p={2}
                        borderRadius={4}
                    >
                        video hub
                    </Heading>
                    <Text>
                        All rights reserved@2023
                    </Text>
                </VStack>
                
                <VStack
                    w={'full'}
                >
                    <Heading
                        size={'md'}
                        textTransform={'uppercase'}
                        >
                        Social Media    
                    </Heading>
                    <HStack>
                        <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            p={0}
                            >
                            <a href="https://www.youtube.com/" target={'blank'}>
                                <AiFillYoutube size={40}/>   
                            </a>
                        </Button>
                        <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            p={0}
                        >
                            <a href="https://www.github.com/" target={'blank'}>
                                <AiFillGithub size={40}/>
                            </a>
                        </Button>
                        <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            p={0}
                        >
                            <a href="https://www.instagram.com/" target={'blank'}>
                                <AiFillInstagram size={40}/>
                            </a>
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
                <Text fontSize={'1.5rem'} textAlign={'center'} marginTop={10}>
                &copy;2023VivekNikate
            </Text>
        </Box>
    )
}

export default Footer
