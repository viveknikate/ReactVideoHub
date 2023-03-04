import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
     return (
     <Container
          // bgColor={'grey'}
          maxW={'container.xl'}
          height='100vh'
          p='16'
     >
          <form>
               <VStack
                    alignItems={'stretch'}
                    w={['full','96']}
                    m='auto'
                    spacing={8}
                    my={16}
               >
                    <Heading
                         textAlign={'center'}
                    >
                         Sign Up
                    </Heading>
                    <Avatar 
                         alignSelf={'center'}
                         boxSize={20}
                    />
                    <Input placeholder='name' type={'text'} focusBorderColor={'purple.400'} required/>
                    <Input placeholder='email' type={'email'} focusBorderColor={'purple.400'} required/>
                    <Input placeholder='password' type={'password'} focusBorderColor={'purple.500'} required/>
                    <Button type='submit' colorScheme={'purple'}>
                         SignUp
                    </Button>
                    <Text
                         textAlign={'end'}
                    >
                         Already have an account?
                         {' '}
                         <Button
                              color={'purple'}
                              variant={'link'}
                         >
                              <Link to={'/login'}>
                                   Login
                              </Link>
                         </Button>
                    </Text>
               </VStack>
          </form>
     </Container>
     )
}

export default Signup
