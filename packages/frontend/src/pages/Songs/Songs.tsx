import { Button, Container, Typography } from "@mui/material";

export default function Songs() {
    return (
        <Container>
            <Typography variant="h1">Songs</Typography>
            <Button variant="contained" color="primary">Get All Songs</Button>
        </Container>
    )
}