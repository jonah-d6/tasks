import React from "react";
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
                <Button onClick={ () => { console.log("Hello World!") } }>
                  Log Hello World</Button>
            </header>
            <Container>
              <Row>
                <Col>
                  <p>
                    My name is Jonah Dean. Hello World!
                    Here&#39;s an image.
                  </p>
                  <img src="images/penguins-295133_640.png"
                       alt="Three penguins standing in a circle."></img>
                  <div style = { { width:100, height:100,
                    backgroundColor:"red" } }/>
                </Col>
                <Col>
                  <p>Now have a list of 3 random letters!</p>
                  <ol>
                    <li>R</li>
                    <li>E</li>
                    <li>D</li>
                  </ol>
                </Col>
              </Row>
            </Container>
        </div>
    );
}

export default App;
