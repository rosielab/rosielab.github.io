import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
    IconButton,
} from "@chakra-ui/react"
import { MdAudiotrack, MdPlayArrow } from "react-icons/md";
import cafe from '../cafe.png';
import React, { useEffect, useState } from 'react';
import joy from '../assets/joyful.wav';
import cafeaudio from '../assets/cafe-audio.wav';
import neutral from '../assets/neutral.wav';
import lombard from '../assets/lombard.wav';

// @ts-ignore
const useAudio = playaudio => {
  const [audio] = useState(new Audio(playaudio));
  const [playing, setPlaying] = useState(false);
  const toggle = () => {setPlaying(!playing)};
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );
  useEffect(() => {
    audio.addEventListener('ended', () => { 
      setPlaying(false);
     });
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

export const Ambience2 = (): any => {
    // @ts-ignore
    const [playingformal, togglecafe] = useAudio(cafeaudio);
    const [playingjoy, togglejoy] = useAudio(joy);
    const [playingneutral, toggleneutral] = useAudio(neutral);
    const [playinglombard, togglelombard] = useAudio(lombard);
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
              You are a waiter in one of the city’s popular cafés. The atmosphere is bustling and green.
              It’s bright and lively and the people’s conversations carry. It has been a busy Saturday morning
              for you. One of your customers is looking for a nice breakfast. However, on this particular
              morning, you have run out of the eggs benedict which the customer was hoping to order.
            </Container>
            <Image src={cafe} alt='Café Ambience' maxWidth={"34%"}/>
            <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                Ambiant Background
            </Heading>
            <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {togglecafe()}}
              />
            <Grid templateColumns='repeat(3, 1fr)' gap={5} >
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Joyful Voice
              </Heading>
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Neutral Voice
              </Heading>
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Lombard Voice
              </Heading>
            </Grid>
            <Grid templateColumns='repeat(3, 1fr)' gap={180} pb='30px' >
              <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {togglejoy()}}
              />
              <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {toggleneutral()}}
              />
              <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {togglelombard()}}
              />
            </Grid>
          </VStack>
        </Box>
    )
};
