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
import livelyrestaurant from '../livelyrestaurant.png';
import React, { useEffect, useState } from 'react';
import joy from '../assets/joyful.wav';
import familyaudio from '../assets/family-audio.wav';
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

export const Ambience3 = (): any => {
    // @ts-ignore
    const [playingformal, togglefamily] = useAudio(familyaudio);
    const [playingjoy, togglejoy] = useAudio(joy);
    const [playingneutral, toggleneutral] = useAudio(neutral);
    const [playinglombard, togglelombard] = useAudio(lombard);
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
            You are a waiter in one of the city’s unique pizza places. The atmosphere is colourful and fun.
            It’s bright and lively and families and friends have gathered and are having loud conversations.
            It has been a busy Saturday afternoon for you. It has been one of the hottest days of the summer.
            One of your customers is looking for a margherita pizza. However, you have run out of basil.
            </Container>
            <Image src= {livelyrestaurant} alt='Livley Restaurant Ambience'  maxWidth={"31%"} />
            <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                Ambiant Background
            </Heading>
            <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {togglefamily()}}
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
