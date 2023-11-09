import { Button} from "@chakra-ui/react";
import { useState } from "react";
import alphabet from "../Typescript/alphabet";
import { color } from "framer-motion";


interface MyLetters{

  addGuessedLetter:(letter: string) => void

}

const LetterGrid = ({addGuessedLetter}:MyLetters) => {

  // const [isActive, setIsActive] = useState(false)

  return (
    <>
          {alphabet.map(letter => 
            <Button
              margin={2}
              size="lg"
              width="50px"
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                // setIsActive(true)
                addGuessedLetter(letter.toLowerCase())}}
              key={letter}
              // isActive={isActive}
            >
              {letter}
            </Button>
          )}
    </>
  );
};

export default LetterGrid;
