import { Button, Text} from "@chakra-ui/react";
import { useState } from "react";

// Interface to get our random word from our Game.tsx
interface RandomWord{
  theWord: string;
  guessed: string[];

}

const RandomWord = ({theWord, guessed}:RandomWord) => {

  return (
    <>

      {theWord.split('').map((letter, index) =>(
        <Button
        margin={2}
        size="lg"
        width='50px'
        height='70px'
        colorScheme="teal"
        variant="outline"
        key={index}
      >
        <Text fontSize="4xl" as='b' style={{
          visibility: guessed.includes(letter) ? 'visible' : 'hidden'
        }}> {letter}</Text>
        
      </Button>
      ))}

     
    </>
  );
  
};

export default RandomWord;
