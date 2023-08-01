import {
    Box,
    Grid,
    Container,
    VStack,
    Image,
    Heading,
    IconButton,
} from "@chakra-ui/react"
import { MdAudiotrack, MdPlayArrow } from "react-icons/md";
import noisybar from '../noisybar.png';
import React, { useEffect, useState } from 'react';
import joy from '../assets/joyful.wav';
import loudbaraudio from '../assets/loudbar-audio.wav';
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

export const Ambience5 = (): any => {
    // @ts-ignore
    const [playingformal, toggleloudbar] = useAudio(loudbaraudio);
    const [playingjoy, togglejoy] = useAudio(joy);
    const [playingneutral, toggleneutral] = useAudio(neutral);
    const [playinglombard, togglelombard] = useAudio(lombard);
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
              You are a bartender at a small bar that is always bringing in a steady flow of customers.
              The atmosphere is bright, warm, and noisy. You here the bustling of many conversations and loud laughter.
              Today is the Stanley Cup finals, so the bar is full of eager watchers. One fan wants nachos for the table,
              but you’ve ran out of nacho cheese!
            </Container>
            <Image src={noisybar} alt='Noisy Bar Ambience' maxWidth={"38%"} />
            <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                Ambiant Background
            </Heading>
            <IconButton
                color='#FC8181'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<MdPlayArrow />}
                // @ts-ignore
                onClick={() => {toggleloudbar()}}
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
