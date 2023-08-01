import * as React from "react"
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react"
import back from '../back.jpg';
import us from '../us.png';
import nserc from '../nserc.png';

export const HomePage = () => (
    <VStack>
      <Box w='100%' h={['500px','730px','730px' ]} bgImage={back} bgSize='cover' bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat' > </Box>
      <Box h="100vh" w="full" px="250px" py="60px" paddingLeft={['0px','10px','100px' ]} paddingRight={['0px','10px','100px' ]}>
        <Heading
          textAlign="center"
          color="red.300"
          letterSpacing="1px"
          pb="100px"
          paddingTop='30px'
          paddingBottom="40px"
          fontSize={{ sm: '18px', md: '20px', lg: '37px' }}
        >
          Read the Room: Adapting a Robot's Voice to Ambient and Social Contexts
        </Heading>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '16px', md: '18px', lg: '25px' }}
        >
          Emma Hughson¹, Paige Tuttösí¹, Akihiro Matsufuji², and Angelica Lim¹³
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '14px', md: '16px', lg: '22px' }}
        >
          IEEE Internatonal Conference on Robotics and Automation
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '10px', md: '10px', lg: '12px' }}
        >
          1. Simon Fraser University
          2. Tokyo Metropolitan University
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='15px'
          fontSize={{ base: '10px', md: '10px', lg: '12px' }}
        >
          3. We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC).
          Nous remercions le Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG) de son soutien.
        </Text>
        <Container>
          <Image src= {nserc} alt='Photo of the authors' maxHeight={"45%"} align="center"/>
        </Container>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingBottom='10px'
          paddingTop='15px'
          fontSize={{ base: '10px', md: '10px', lg: '18px' }}
        >
          How should a robot speak in a formal, quiet and dark, or a bright, 
          lively and noisy environment? By designing robots to speak in a more 
          social and ambient-appropriate manner we can improve perceived 
          awareness and intelligence for these agents. We describe a process and 
          results toward selecting robot voice styles for perceived 
          social appropriateness and ambiance awareness. Understanding how 
          humans adapt their voices in different acoustic settings can be 
          challenging due to difficulties in voicecapture in the wild. Our 
          approach includes 3 steps: (a) Collecting and validating voice data 
          interactions in virtual Zoom ambiances, (b) Exploration and clustering 
          human vocal utterances to identify primary voice styles, and (c) 
          Testing robot voice styles in recreated ambiances using projections, 
          lighting and sound. We focus on food service scenarios as a 
          proof-of-concept setting. We provide results using the Pepper robot's 
          voice with different styles, towards robots that speak in a 
          contextually appropriate and adaptive manner. Our results with N=120 
          participants provide evidence that the choice of voice style in 
          different ambiances impacted a robot's perceived intelligence in 
          several factors including: social appropriateness, comfort, awareness, 
          human-likeness and competency.
        </Text>
        <Container>
          <Image src= {us} alt='Photo of the authors' maxHeight={"45%"} align="center"/>
        </Container>
      </Box>
    </VStack>
)