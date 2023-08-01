import {
    Box,
    Grid,
    Heading,
    VStack,
    Image,
    Container,
    IconButton,
} from "@chakra-ui/react"
import { MdAudiotrack, MdPlayArrow } from "react-icons/md";
import club from '../club.png';
import React, { useEffect, useState } from 'react';
import joy from '../assets/joyful.wav';
import clubaudio from '../assets/nightclub-audio.wav';
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


export const Ambience6 = (): any => {
    // @ts-ignore
    const [playingformal, toggleclub] = useAudio(clubaudio);
    const [playingjoy, togglejoy] = useAudio(joy);
    const [playingneutral, toggleneutral] = useAudio(neutral);
    const [playinglombard, togglelombard] = useAudio(lombard);
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
           <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
                You are a bartender at a nightclub in the middle of the city’s center.
                The atmosphere is loud and large. You can hear the DJ’s music and feel the thumping of the bass.
                It’s a Saturday night and you have been juggling dozens of customers all night. One particular
                customer really wants a drink you don’t know how to make!
           </Container>
            <Image src= {club} alt='Night Club Ambience' maxWidth={"37%"} />
            <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                Ambiant Background
            </Heading>
            <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {toggleclub()}}
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
