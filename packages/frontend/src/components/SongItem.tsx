import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

type ItemProps = {
    album: string,
    artist: string,
    name: string,
    release_year: number
}

const SongItem:React.FC<ItemProps> = ({album, artist, name, release_year}) => (
    <Card>
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">Album: {album}</Typography>
            <Typography variant="body1">Artist: {artist}</Typography>
            <Typography variant="body1">Release Year: {release_year}</Typography>
        </CardContent>
    </Card>
);

export default SongItem;