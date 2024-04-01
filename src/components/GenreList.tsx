import { HStack, Image, List, ListIcon, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

export default function GenreList(){
    const{genres,loading} = useGenres()

    if(loading) return <Spinner/>

    return(
        <List>
            {genres.map(genre=>
            <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px"  borderRadius={8} src={getCroppedImgUrl(genre.image_background)}/>
                    <Text fontSize="lg">{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}