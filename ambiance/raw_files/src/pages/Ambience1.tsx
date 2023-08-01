import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
    IconButton
} from "@chakra-ui/react"
import { MdAudiotrack, MdPlayArrow } from "react-icons/md";
import finedining from '../finedining.png';
import React, { useEffect, useState } from 'react';
import joy from '../assets/joyful.wav';
import formalaudio from '../assets/formal-audio.wav';
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

export const Ambience1 = (): any => {
  // @ts-ignore
  const [playingformal, toggleformal] = useAudio(formalaudio);
  const [playingjoy, togglejoy] = useAudio(joy);
  const [playingneutral, toggleneutral] = useAudio(neutral);
  const [playinglombard, togglelombard] = useAudio(lombard);
    return (
        <Box textAlign="center" fontSize="x01">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
            You are a waiter in the city’s fanciest restaurant. The atmosphere is warm, the music is slow
            and romantic, and the lights are dimmed.  People come far and wide to experience this particular
            restaurant and the food it has to offer. As such, every night is fully booked. One of your
            customers is on a date and is trying to make the most of the evening. However, on this particular
            night, you have run out of the popular duck which the customer was hoping to order.
            </Container>
            <Image src= {finedining} alt='Fine Dining Ambience' maxWidth={"32%"}/>
            <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                Ambiant Background
            </Heading>
            <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {toggleformal()}}
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
