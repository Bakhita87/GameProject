// import { Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";

// const GameGrid = () => {
   
//     const {games,error} =  useGames ();

//     return(

//         <>
//          {error && <Text>error</Text>}


//        <ul>
//          {games.map((game) => (
//          <li key={game.id}>{game.name}</li>
//          ))}
//        </ul>
//        </>
//     )
// }

// export default GameGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={10}>
        {isLoading && 
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
