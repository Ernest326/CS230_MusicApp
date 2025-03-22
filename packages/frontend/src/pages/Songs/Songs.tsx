import { Container, Typography, IconButton, Box, Stack, TextField, Button, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SongItem from "../../components/SongItem";
import axios from "axios";
import React, {useState} from "react";

type Song = {
    album: string,
    artist: string,
    name: string,
    release_year: number
}

const AlbumsPage:React.FC = () => {

    const [songs, setSongs] = useState<Song[]>([]);
    const [msg, setMessage] = useState<string>("");

    //Params
    const [id, setId] = useState<string>("");
    const [albumId, setAlbumId] = useState<string>("");
    const [album, setAlbum] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [release_year, setReleaseYear] = useState<number>(0);

    //POST Request
    const addItem = async () => {
        const data = {
            album: album,
            artist: artist,
            name: name,
            release_year: release_year
        }
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/song", data, headers);
            if(res.status !== 200) {
                setMessage("Failed to create song!");
                return;
            } else {
                setMessage("Song created successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to create song!");
        }
        
    }
    
    //PUT Request
    const updateItem = async () => {
        const data = {
            album: album,
            artist: artist,
            name: name,
            release_year: release_year
        }
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            const res = await axios.put(`http://localhost:5000/song/${id}&${albumId}`, data, headers);
            if(res.status !== 200) {
                setMessage("Failed to update song!");
                return;
            } else {
                setMessage("Song updated successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to update song!");
        }
    }
    
    //DELETE Request
    const deleteItem = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/song/${id}&${albumId}`);
            if(res.status !== 200) {
                setMessage("Failed to delete song!");
                return;
            } else {
                setMessage("Song deleted successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to delete song!");
        }
    }
    
    //Get Request
    const getItems = async () => {
        const res = await axios.get("http://localhost:5000/song");
        if(res.status !== 200) {
            setMessage("Failed to retrieve songs!");
            return;
        } else {
            const data = res.data;
            setMessage("Songs retrieved successfully!");
            setSongs(data);
        }
    }

    return (
        <Container maxWidth="md" sx={{mt: 5}}>
            <Box display="flex" alignItems="center" mb={3}>
                <IconButton component={Link} to="../"> <ArrowBackIcon/> </IconButton>
                <Typography variant="h4" sx={{ml: 1}}>Songs</Typography>
            </Box>

            <Stack direction="row" spacing={2} mb={3}>
                <TextField fullWidth label="Target Song" sx={{mb: 1}} onChange={(e) => setId(e.target.value)} />
                <TextField fullWidth label="Album" sx={{mb: 1}} onChange={(e) => setAlbumId(e.target.value)} />
            </Stack>
            <Stack direction="row" spacing={2} mb={3}>
                <TextField fullWidth label="Song Name" onChange={(e) => setName(e.target.value)}/>
                <TextField fullWidth label="Album name" onChange={(e) => setAlbum(e.target.value)} />
                <TextField fullWidth label="Artist" onChange={(e) => setArtist(e.target.value)} />
                <TextField fullWidth label="Release Year" onChange={(e) => setReleaseYear(parseInt(e.target.value))}/>
            </Stack>
            <Stack direction="row" spacing={2} mb={3}>
                <Button variant="contained" color="primary" fullWidth onClick={() => addItem()}>Add</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => updateItem()}>Update</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => deleteItem()}>Delete</Button>
            </Stack>
            <Button variant="contained" color="secondary" fullWidth onClick={() => getItems()}>Get All Songs</Button>
            <Typography my={3}>{msg}</Typography>
            <Grid container spacing={3}>
                {songs.map((song, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <SongItem album={song.album} artist={song.artist} name={song.name} release_year={song.release_year} />
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    )
}

export default AlbumsPage;