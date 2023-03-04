import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     <Container 
          height={'100vh'}
          maxW={'container.xl'}
          p={'16'}
     >
          <form>
               <VStack
                    alignItems={'stretch'}
                    spacing={8}
                    w={['full','96']}
                    m={'auto'}
                    my={'16'}
                    
               >
                    <Heading>Welcome Back..!</Heading>
                    <Input placeholder='email' type={'email'} focusBorderColor={'purple.300'} required/>
                    <Input placeholder='password' type={'password'} focusBorderColor={'purple.300'} required/>
                    <Button 
                         alignSelf={'flex-end'}
                         variant={'link'}
                    >
                         Forget password?
                    </Button>
                    <Button 
                         colorScheme={'purple'}
                         type={'submit'}
                    >
                         Login
                    </Button>
                    <Text textAlign={'end'}>
                         New user?{' '}
                         <Button
                              color={'purple'}
                              variant={'link'}>
                              <Link to={'/signup'}>
                                   Sign-up
                              </Link>
                         </Button>
                    </Text>
               </VStack>
          </form>
     </Container>
  )
}

export default Login
