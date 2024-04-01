import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GamGrid() {
  const { games, error,loading } = useGames();
  const skeletons=[1,2,3,4,5,6]
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3}}
        spacing={3}
        padding="20px"
      >
        {loading && skeletons.map(skeleton=> <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
        {games.map((game) => {
          return <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer> 
        })}
      </SimpleGrid>
    </div>
  );
}

export default GamGrid;
