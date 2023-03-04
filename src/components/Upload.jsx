import { Button, Container, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
     return (
          <Container maxW={'container.xl'} h={'100vh'} p='16'>
               <VStack h={'full'} justifyContent={'center'} color={'purple.500'}>
                    <AiOutlineCloudUpload size={'10vmax'}/>
                    <form>
                         <Stack direction={['column','row']}>
                              <Input type={'file'} required border={'none'} css={{
                                   "&::file-selector-button":{
                                        // borderRadius:'none',
                                        borderRadius:'20px',
                                        width: 'calc(50%)',
                                        height:'100%',
                                        backgroundColor:'white',
                                        // marginLeft:['-30px'],
                                        color:'purple',
                                        cursor:'pointer'
                                   }
                              }}/>
                              <Button type='submit' colorScheme={'purple'}>Upload</Button>
                         </Stack>
                    </form>
               </VStack>
          </Container>
     )
}

export default Upload
