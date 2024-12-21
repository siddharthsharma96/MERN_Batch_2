import "./App.css";
import Container from "./Container";
import { Heading } from "./Heading";
import Paragraph from "./Paragraph";
import CompA from "./PropDrilling/CompA";
import Properties from "./Properties";

function App() {
  let name = "Siddharth Sharma";
  return (
    <div>
      <h1>Hello from Codehub Nexus</h1>
      <Paragraph />
      <Heading></Heading>
      <Properties myName={name} />
      <Container>
        <h1>Hello from Codehub Nexus</h1>
        <h1>Hello from Codehub Nexus</h1>
        <h1>Hello from Codehub Nexus</h1>
        <h1>Hello from Codehub Nexus</h1>
      </Container>
      <CompA />
    </div>
  );
}

export default App;
