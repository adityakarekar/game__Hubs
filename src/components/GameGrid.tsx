import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GamGrid() {
  const { games, error,loading } = useGames();
  const skeletons=[1,2,3,4,5,6]
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="20px"
      >
        {loading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </div>
  );
}

export default GamGrid;
