import { Box, Flex, HStack, Img, VStack } from '@chakra-ui/react'
import { IMG_PATH } from '../static-variables/constants'

const Nav = () => {
  return (
    <Box className='navigation' h={'7vh'} p={'2vh'}>
        <Flex justifyContent={'space-between'}>
          <Img src={`${IMG_PATH}menu-icon.svg`} alt='menu-icon'/>
          <HStack>
              <Box>
                  <HStack>
                      <Img src={`${IMG_PATH}heart-icon.svg`} alt='heart-icon'/>
                      <Img src={`${IMG_PATH}shoppingcart-icon.svg`} alt='shoppingcart-icon'/>
                      <Img src={`${IMG_PATH}user-icon.svg`} alt='user-icon'/>
                  </HStack>
              </Box>
          </HStack>
        </Flex>
    </Box>
    
  )
}

export default Nav