import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

type ItemProps = {
    name: string,
    monthly_listeners: number,
    genre: string
};

const ArtistItem:React.FC<ItemProps> = ({name, monthly_listeners, genre}) => (
    <Card>
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">Listeners: {monthly_listeners}</Typography>
            <Typography variant="body1">Genre: {genre}</Typography>
        </CardContent>
    </Card>
);

export default ArtistItem;