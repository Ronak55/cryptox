import React from 'react'
import { Avatar, Box, Stack, VStack, Text, Image } from '@chakra-ui/react'
import ronak from "../assets/ronak.jpeg";

const Footer = () => {
  return (
   
 <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>


 <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>


<VStack w={"full"} alignItems={["center", "flex-start"]}>

    <Text fontWeight={"bold"}>About Us</Text>
    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in India, we provide our guidance and stats related to crypto at a very cheap price.</Text>


</VStack>
<VStack>

<Box
  boxSize={"110px"}
  rounded={"full"}
  overflow={"hidden"}
  boxShadow={"md"}
  margin={"auto"}
>
  <Image
    src={ronak}
    alt={"Profile Image"}
    objectFit={"cover"}
  />
</Box>
    <Text>Our Founder</Text>
    <Text fontWeight={"bold"} fontStyle={"italic"}>Ronak Bothra</Text>
</VStack>

 </Stack>

    </Box>


  )
}

export default Footer