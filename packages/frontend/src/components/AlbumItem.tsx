import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

type ItemProps = {
    artist: string,
    name: string,
    release_year: number,
    listens: number
};

const AlbumItem:React.FC<ItemProps> = ({artist, name, release_year, listens}) => (
    <Card>
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">Artist: {artist}</Typography>
            <Typography variant="body1">Release Year: {release_year}</Typography>
            <Typography variant="body1">Listens: {listens}</Typography>
        </CardContent>
    </Card>
);

export default AlbumItem;