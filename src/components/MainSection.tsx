import { Box, Button, Flex, HStack, Img, Input, Progress, Text, VStack } from '@chakra-ui/react'
import { IMG_PATH } from '../static-variables/constants'
import '../index.css'

const MainSection = () => {
  return (
    <Box className='main-section' h={'auto'} p={'2vh'}> 
      <Flex direction={'column'}>
        <Img src={`${IMG_PATH}logo.svg`}/>
        <Text textAlign={'center'} marginTop={'2vh'} fontSize={'2.5vh'}>
          Generate your ART <br /> by typing in field below any words that comes to your mind!
        </Text>
        <HStack spacing={0} marginTop="4vh">
          <Box
            bg="#CB2B28" 
            h="8px"
            flex="1" 
            borderRadius={'full'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Img src={`${IMG_PATH}ikona1.svg`} alt='ikona 1 czerwona'/>
          </Box>
          <Box
            bg="#E5E5E7" 
            h="8px" 
            flex="1" 
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          > 
            <Img src={`${IMG_PATH}ikona2.svg`} alt='ikona 2 szara'/>
          </Box>
          <Box
            bg="#E5E5E7" 
            h="8px" 
            flex="1" 
            borderRadius={'full'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Img src={`${IMG_PATH}ikona3.svg`} alt='ikona 3 szara'/>
          </Box>
        </HStack>

        <Flex justifyContent="space-between" width="100%" marginTop={'2vh'} fontFamily={'Raleway Bold'}>
            <Text flex="1" textAlign="center" color={'#CE2B28'}>Generate <br/> Image</Text>
            <Text flex="1" textAlign="center">Choose Your Product</Text>
            <Text flex="1" textAlign="center">Order</Text>
        </Flex>
      
        <Flex marginTop={'4vh'} boxShadow="lg" h={'6vh'}><Input placeholder='What do you want to create?' type='text' bg={'#B7B2B25C'} opacity={'36%'} h={'100%'}/><Img src={`${IMG_PATH}rediconpen.svg`} alt='red icon pen' height={'100%'} boxShadow="2xl"/></Flex>

        <HStack w={'100%'} h={'6vh'} marginTop={'2vh'} fontSize={'1.8vh'} fontWeight={'600'} fontFamily={'Raleway Regular'}>
          <Flex justifyContent={'center'} alignItems={'center'} textAlign={'center'} w={'33%'} h={'100%'} bg={'#F5F5F6'} borderRadius={'lg'}>High Quality</Flex>
          <Flex justifyContent={'center'} alignItems={'center'} textAlign={'center'} w={'33%'} h={'100%'} bg={'#F5F5F6'} borderRadius={'lg'}>Pop Art</Flex>
          <Flex justifyContent={'center'} alignItems={'center'} textAlign={'center'} w={'34%'} h={'100%'} bg={'#F5F5F6'} borderRadius={'lg'}>Realistic Look</Flex>
        </HStack>

        <Flex w={'100%'} marginTop={'2vh'} h={'20vh'} boxShadow="2xl" borderRadius={'lg'}>
          <Flex w={'50%'} h='100%' padding={'1vh'}>
            <Box w={'10%'}><Img src={`${IMG_PATH}leftarrow-icon.svg`} alt='left arrow icon'/></Box>
            <VStack w={'90%'}>
                
                <Text fontFamily={'Raleway Regular'}>Style Preview</Text>
                <Img src={`${IMG_PATH}hero-icon.svg`} alt='hero icon gray'/>
            </VStack>            
          </Flex>
          <Box w={'50%'} bg={'#F5F5F6'} h='100%'>
            <Flex w={'100%'} h='100%'>
              <Img src={`${IMG_PATH}grabbing-icon.svg`} alt='grabbing icon'/>
              <Flex flexDir={'column'} h='100%'>
                  <Button bg={'#F5F5F6'} h={'33%'}>MINIMALISTIC</Button>
                  <Button bg={'#CB2B28'} color={'whitesmoke'} h={'33%'} boxShadow="inset 0 0 8px rgba(0, 0, 0, 0.7)">CARTOON</Button>
                  <Button bg={'#F5F5F6'} h={'33%'} fontFamily={'Trislan'}>ARTISTIC</Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Box bg={'#F5F5F6'} marginTop={'2vh'} p={'2vh'} borderRadius={'lg'}>
          <VStack fontFamily={'Open Sans Bold'}>
                <Text color={'#CB2B28'} textAlign={'center'} fontSize={'2.5vh'}>GET INSPIRED!</Text>
                <Text fontSize={'2.5vh'} textAlign={'center'}>BEST USERS DESIGNS</Text>
                <HStack><Text fontSize={'2vh'} textAlign={'center'}>See More</Text><Img src={`${IMG_PATH}arrow-icon.svg`} alt='arrow icon'/></HStack>
                <Img src={`${IMG_PATH}demon-icon.svg`} alt='demon icon'/>
                <Box w={'100%'} h={'5vh'} borderRadius={'lg'}>
                  <Flex w={'100%'} bg={'#E5E5E7'} h={'100%'} borderRadius={'lg'} fontFamily={'Raleway Regular'}>
                      <HStack w={'70%'} h={'100%'} paddingLeft={'2vh'}><Text>punk heart, gothic</Text></HStack>
                      <Flex w={'30%'} h={'100%'} bg={'#CFCFD0'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}><Text>ARTISTIC</Text></Flex>
                  </Flex>
                  
                </Box>

                <Button bg={'#CB2B28'} fontSize={'2.5vh'} color={'whitesmoke'} w={'60%'} marginTop={'2vh'}>BUY</Button>
          </VStack>
          
        </Box>

      </Flex>
    </Box>
  )
}

export default MainSection