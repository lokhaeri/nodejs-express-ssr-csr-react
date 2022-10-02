import React from "react";
import {
  ThemeProvider,
  StyleReset,
  Div,
  Button,
  Text,
  Icon
} from "react-atomize";
import { mainTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Div p="1rem" d="flex" flexDir="column">
        <StyleReset />
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="6rem"
            w="100%"
            rounded="brandRadius"
            bg="gray200"
          >
          <Div d="flex" m={{ l: "2rem", t: "2rem" }}>
            <Text textSize="display2"><Icon name="Draft" size="20px" /> Draft Start</Text>
          </Div>
          </Div>
        </Div>

        <Text textSize="customSize">Custom Template Starts Here</Text>
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="16rem"
            w="100%"
            rounded="brandRadius"
            bg="success700"
          />
        </Div>
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="12rem"
            w="100%"
            rounded="brandRadius"
            bg="warning700"
          />
        </Div>
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="6rem"
            w="100%"
            rounded="brandRadius"
            bg="danger700"
          />
        </Div>
      </Div>
    </ThemeProvider>
  );
}

export default App;