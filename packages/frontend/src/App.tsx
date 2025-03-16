import { Container, Typography } from "@mui/material";
import { Component } from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

interface AppState {
  res: any;
}

class App extends Component<{}, AppState> {

  res = {};

  constructor(props: {}) {
    super(props);
    this.state = {
      res: {},
    };
    api.get('/').then((res) => {
      console.log(res.data)
      this.setState({ res: res.data });
    })
    .catch((error) => console.error(error));
  }

  render() {
    return (
      <Container>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="body1">{JSON.stringify(this.state.res, null, 2)}</Typography>
      </Container>
    );
  }
}

export default App;
