import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card >
      <Image src={ getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
        <PlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
