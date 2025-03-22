import { Container, Typography, IconButton, Box, Stack, TextField, Button, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import AlbumItem from "../../components/AlbumItem";
import axios from "axios";
import React, {useState} from "react";

type Album = {
    artist: string,
    name: string,
    release_year: number,
    listens: number
}

const AlbumsPage:React.FC = () => {

    const [albums, setArtists] = useState<Album[]>([]);
    const [msg, setMessage] = useState<string>("");

    //Params
    const [id, setId] = useState<string>("");
    const [artistId, setArtistId] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [release_year, setReleaseYear] = useState<number>(0);
    const [listens, setListens] = useState<number>(0);

    //POST Request
    const addItem = async () => {
        const data = {
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
            const res = await axios.post("http://localhost:5000/album", data, headers);
            if(res.status !== 200) {
                setMessage("Failed to create album!");
                return;
            } else {
                setMessage("Album created successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to create album!");
        }
        
    }
    
    //PUT Request
    const updateItem = async () => {
        const data = {
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
            const res = await axios.put(`http://localhost:5000/album/${id}&${artistId}`, data, headers);
            if(res.status !== 200) {
                setMessage("Failed to update artist!");
                return;
            } else {
                setMessage("Artist updated successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to update artist!");
        }
    }
    
    //DELETE Request
    const deleteItem = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/album/${id}&${artistId}`);
            if(res.status !== 200) {
                setMessage("Failed to delete album!");
                return;
            } else {
                setMessage("Album deleted successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to delete album!");
        }
    }
    
    //Get Request
    const getItems = async () => {
        const res = await axios.get("http://localhost:5000/album");
        if(res.status !== 200) {
            setMessage("Failed to retrieve albums!");
            return;
        } else {
            const data = res.data;
            setMessage("Albums retrieved successfully!");
            setArtists(data);
        }
    }

    return (
        <Container maxWidth="md" sx={{mt: 5}}>
            <Box display="flex" alignItems="center" mb={3}>
                <IconButton component={Link} to="../"> <ArrowBackIcon/> </IconButton>
                <Typography variant="h4" sx={{ml: 1}}>Albums</Typography>
            </Box>

            <Stack direction="row" spacing={2} mb={3}>
                <TextField fullWidth label="Target Album" sx={{mb: 1}} onChange={(e) => setId(e.target.value)} />
                <TextField fullWidth label="Artist" sx={{mb: 1}} onChange={(e) => setArtistId(e.target.value)} />
            </Stack>
            <Stack direction="row" spacing={2} mb={3}>
                <TextField fullWidth label="Artist" onChange={(e) => setArtist(e.target.value)} />
                <TextField fullWidth label="Album name" onChange={(e) => setName(e.target.value)} />
                <TextField fullWidth label="Release Year" onChange={(e) => setReleaseYear(parseInt(e.target.value))}/>
                <TextField fullWidth label="Listens" onChange={(e) => setListens(parseInt(e.target.value))}/>
            </Stack>
            <Stack direction="row" spacing={2} mb={3}>
                <Button variant="contained" color="primary" fullWidth onClick={() => addItem()}>Add</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => updateItem()}>Update</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => deleteItem()}>Delete</Button>
            </Stack>
            <Button variant="contained" color="secondary" fullWidth onClick={() => getItems()}>Get All Albums</Button>
            <Typography my={3}>{msg}</Typography>
            <Grid container spacing={3}>
                {albums.map((album, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <AlbumItem artist={album.artist} name={album.name} release_year={album.release_year} listens={album.listens} />
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    )
}

export default AlbumsPage;