import "./App.css";
import Header from "./componants/Header";
import Body from "./componants/Body";
import Footer from "./componants/Footer";

const Childcomp = () => {
  return(div>child compn)
}
 
function App() {
  const BodyProbs = {
    name: "SD",
    location: "서울시",
    favorList: "",
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProbs} />
      <Footer>
        <childComp/>
      </Footer>
    </div>
  );
}

export default App;
