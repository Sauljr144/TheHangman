import { Button, Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import LetterGrid from "./LetterGrid";
import words from "../data/words.json";
import RandomWord from "./RandomWord";
import Drawing from "./Drawing";


const Game = () => {

  // using a useState to set our random word and pass it in to the RandomWord component's prop
  const [theRndWord, setTheRndWord] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  });

  // using useState to set our guessed letters into an array
  const [guessed, setGuessed] = useState<string[]>([]);

  // getting an array with our incorrect values that we guessed
  const incorrect = guessed.filter(letter => !theRndWord.includes(letter));
  
  // Winner and loser
  const loser = incorrect.length >=6;;
  const winner = theRndWord.split('').every(letter => guessed.includes(letter))

  // function to whihc we pass in our letters from our letterGrid
  const addGuessed = useCallback((letter: string) =>{
    if(guessed.includes(letter)) return;
    setGuessed(currentLetters => [...currentLetters, letter])
    console.log(letter)
  },[guessed])


// using a useEffect to use our keybord as inputs
  useEffect(() => {
    const handler = (e: KeyboardEvent) =>{
      const key = e.key
      if(!key.match(/^[a-z]$/))return

      e.preventDefault()
      addGuessed(key)

    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress',handler)
    }
  }, [guessed])

  const Reload = () => window.location.reload();

  return (
    <>
      <Grid>
       
        <GridItem  marginY="50px">
          <Center>
          <Drawing incorrectGuesses = {incorrect.length}/>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
           <h1 style={{fontSize: '30px', fontWeight: 'bold'}}>{winner && "Winner!"}</h1> 
           <h1 style={{fontSize: '30px', fontWeight: 'bold'}}>{loser && "You Lost."}</h1>
          </Center>
        </GridItem>

       

        <GridItem>
          <Center> 
            <h1 style={{fontSize: '30px', fontWeight: 'bold'}}>{loser && `The word is: ${theRndWord}`}</h1></Center>
        </GridItem>


        <GridItem marginY='20px'>
          <Center>
          {loser && <Button onClick={Reload}>Play Again?</Button>}
          {winner && <Button onClick={Reload}>Play Again?</Button>}
          </Center>
        </GridItem>


        <GridItem marginY={5}>
          <Center>
          <RandomWord theWord={theRndWord} guessed={guessed}/>
          </Center>
        </GridItem>
        <Center>
        <GridItem  width='400px' >
            <LetterGrid addGuessedLetter={addGuessed}/>
        </GridItem>
        </Center>
      </Grid>
      {loser && <audio autoPlay src="../src/assets/song.aac"></audio>}
    </>
  );
};

export default Game;
