// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    CodePane,
    Heading,
    Image,
    ListItem,
    List,
    Quote,
    Slide,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    kilix: require("../assets/tesselateBg.png"),
    thinkingInReact: require("../assets/thinking-in-react.png")
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgImage={images.kilix}>
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        React Training
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Heading size={6} caps>Who?</Heading>
                    <Text>Amélie Lefèvre & Augustin Le Fèvre</Text>
                    <Text
                        style={{marginTop: '30px'}}
                        textSize="2rem"
                    >
                        Working full-time with react since June 2015
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Heading size={5} textColor="secondary">
                        Program
                    </Heading>
                    <List>
                        <ListItem textSize="2rem">Introduction to React core concepts ~1 hour</ListItem>
                        <ListItem textSize="2rem">React API ~2 hours</ListItem>
                        <ListItem textSize="2rem">Lunch break</ListItem>
                        <ListItem textSize="2rem">Going further with react ~1 hour</ListItem>
                        <ListItem textSize="2rem">Practice ~3 hours</ListItem>
                        <ListItem textSize="2rem">Home sweet home</ListItem>
                        <ListItem textSize="2rem">Redux ~3 hours</ListItem>
                        <ListItem textSize="2rem">Lunch break</ListItem>
                        <ListItem textSize="2rem">Let's build a full-fledged project ~4 hours</ListItem>
                        <ListItem textSize="2rem">Closing advices, resources, questions, etc. ~1 hour</ListItem>
                    </List>
                </Slide>

                <Slide transition={["zoom"]} bgImage={images.kilix} id="react" >
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        React
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Rethinking best practices</Heading>
                    <Text size={6}>Separation of technologies !== separation of concerns</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>F(D) = V</Heading>
                    <Text size={6}>Your view is nothing but a pure function of data</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>JSX</Heading>
                    <CodePane
                        lang="jsx"
                        source={require("raw-loader!./jsx")}
                        margin="20px auto"
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6}>Build complex UI by composing simple elements</Heading>
                    <Image src={images.thinkingInReact} height="350px"/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.</Quote>
                        <Cite>Joe Armstrong, creator of Erlang, on software reusability</Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6}>Practice</Heading>
                    <List>
                        <ListItem>Pair Programming: switch every 15 minutes</ListItem>
                        <ListItem>The solutions are in the repo. Please don't check them.</ListItem>
                        <ListItem>Call one of us to validate each step.</ListItem>
                    </List>
                </Slide>


                <Slide transition={["zoom"]} bgImage={images.kilix} id="futher-with-react">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Further with React
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Reconciliation</Heading>
                    <Text size={6}>
                        On each render, React tries to limit the amount of changes to the DOM
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Higher Order Components</Heading>
                    <Text>A function that takes a Component and returns a new one</Text>
                    <Text>It's just a wrapper around a component</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Context</Heading>
                    <Text>A way to pass data from an upper to a lower one, without
                        having to do it through each children of the hierarchy
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Function as a child component</Heading>
                    <Text>children is nothing but a normal prop</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Refs</Heading>
                    <Text>A way to do imperative action on a component (call a function on it for instance),
                        or access the DOM generated by a component.
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Events</Heading>
                    <Text>React events are pretty close from the DOM ones, with a bit of cross-browser normalization
                        and the fact that they are pooled.
                    </Text>
                </Slide>


                <Slide transition={["zoom"]} bgImage={images.kilix} id="redux">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Redux
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>One way data flow</Heading>
                    <Text size={6}>Components work with a top-down data flow</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>One-way data flow</Heading>
                    <Text>Your views don't have any control on the model, they cannot modify it</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Redux</Heading>
                    <Text>A small library to manage your state</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Actions, simple objects describing a request</Heading>
                    <CodePane
                        lang="js"
                        source={`{type: 'ADD_FILTER', keyword: 'react'}
{type: 'REMOVE_FILTER', keyword: 'fp'}
{type: 'RECEIVE_TWITTER_BIO': contactId: 1, value: 'blablabla'}`}
                    />
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>The reducer updates the state after each action</Heading>
                    <Text>S' = F(S, A)</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>The reducer updates the state after each action</Heading>
                    <Text>S' = F(S, A)</Text>
                    <Text>And yes, it's a pure function</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>Let's first use it without React</Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} caps>There are bindings for react, angular & co.</Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} cape>Let's use that in real life</Heading>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
                    <Heading size={6} cape>Best-practices</Heading>
                    <List>
                        <ListItem>Single source of truth</ListItem>
                        <ListItem>No duplication</ListItem>
                        <ListItem>Don't store something that can be computed</ListItem>
                        <ListItem>Normalize your data</ListItem>
                        <ListItem>Keep presentational and container components separated</ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6}>Practice</Heading>
                    <List>
                        <ListItem>Pair Programming: switch every 15 minutes</ListItem>
                        <ListItem>The solutions are in the repo. Please don't check them.</ListItem>
                        <ListItem>Call one of us to validate each step.</ListItem>
                        <ListItem>Check mainPractice</ListItem>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
