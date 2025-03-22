import { Container, Typography, IconButton, Box, Stack, TextField, Button, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import ArtistItem from "../../components/ArtistItem";
import axios from "axios";
import React, {useState} from "react";

type Artist = {
    name: string,
    monthly_listeners: number,
    genre: string
}

const ArtistPage:React.FC = () => {

    const [artists, setArtists] = useState<Artist[]>([]);
    const [msg, setMessage] = useState<string>("");

    //Params
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [monthly_listeners, setMonthlyListeners] = useState<number>(0);
    const [genre, setGenre] = useState<string>("");

    //POST Request
    const addItem = async () => {
        const data = {
            name: name,
            genre: genre,
            monthly_listeners: monthly_listeners
        }
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/artist", data, headers);
            if(res.status !== 200) {
                setMessage("Failed to create artists!");
                return;
            } else {
                setMessage("Artist created successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to create artist!");
        }
        
    }
    
    //PUT Request
    const updateItem = async () => {
        const data = {
            name: name,
            monthly_listeners: monthly_listeners,
            genre: genre
        }
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            const res = await axios.put(`http://localhost:5000/artist/${id}`, data, headers);
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
            const res = await axios.delete(`http://localhost:5000/artist/${id}`);
            if(res.status !== 200) {
                setMessage("Failed to delete artist!");
                return;
            } else {
                setMessage("Artist deleted successfully!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to delte artist!");
        }
    }
    
    //Get Request
    const getItems = async () => {
        const res = await axios.get("http://localhost:5000/artist");
        if(res.status !== 200) {
            setMessage("Failed to retrieve artists!");
            return;
        } else {
            const data = res.data;
            setMessage("Artists retrieved successfully!");
            setArtists(data);
        }
    }

    return (
        <Container maxWidth="md" sx={{mt: 5}}>
            <Box display="flex" alignItems="center" mb={3}>
                <IconButton component={Link} to="../"> <ArrowBackIcon/> </IconButton>
                <Typography variant="h4" sx={{ml: 1}}>Artists</Typography>
            </Box>

            <TextField fullWidth label="Target" sx={{mb: 1}} onChange={(e) => setId(e.target.value)} />
            <Stack direction="row" spacing={2} mb={3}>
                <TextField fullWidth label="Artist name" onChange={(e) => setName(e.target.value)} />
                <TextField fullWidth label="Monthly listeners" onChange={(e) => setMonthlyListeners(parseInt(e.target.value))}/>
                <TextField fullWidth label="Genre" onChange={(e) => setGenre(e.target.value)}/>
            </Stack>
            <Stack direction="row" spacing={2} mb={3}>
                <Button variant="contained" color="primary" fullWidth onClick={() => addItem()}>Add</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => updateItem()}>Update</Button>
                <Button variant="contained" color="primary" fullWidth onClick={() => deleteItem()}>Delete</Button>
            </Stack>
            <Button variant="contained" color="secondary" fullWidth onClick={() => getItems()}>Get All Artists</Button>
            <Typography my={3}>{msg}</Typography>
            <Grid container spacing={3}>
                {artists.map((artist, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <ArtistItem name={artist.name} monthly_listeners={artist.monthly_listeners} genre={artist.genre} />
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    )
}

export default ArtistPage;