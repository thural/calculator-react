import CalcBody from "./components/CalcBody/CalcBody";
import Screen from "./components/Screen/Screen";
import ButtonBox from './components/ButtonBox/ButtonBox';
import Btn from './components/Button/Button';
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <CalcBody>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((button, i) => (
            <Btn value={button} key={i} />
          ))}
        </ButtonBox>
      </CalcBody>
    </CalcProvider>
  );
}

export default App;