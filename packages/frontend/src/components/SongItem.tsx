import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

interface ItemProps {
    album: string,
    artist: string,
    name: string,
    release_year: number
}

class SongItem extends React.Component<ItemProps> {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">{this.props.name}</Typography>
                    <Typography variant="body1">{this.props.artist}</Typography>
                    <Typography variant="body1">{this.props.album}</Typography>
                    <Typography variant="body1">{this.props.release_year}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default SongItem;