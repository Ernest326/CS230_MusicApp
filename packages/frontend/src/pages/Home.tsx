import React from 'react'
import { Container, Typography, Box, Stack, Button} from "@mui/material";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container maxWidth="sm" sx={{ height:"100vh", textAlign: "center", p: 6}}>
            <Typography variant="h1">Music App</Typography>
            <Typography variant="subtitle1" gutterBottom>
                Explore different songs, artists and albums!
            </Typography>

            <Box mt={5}>
                <Stack spacing={3}>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/artist">Artists</Button>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/albums">Albums</Button>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/songs">Songs</Button>
                </Stack>
            </Box>

        </Container>
    )
}

export default Home;