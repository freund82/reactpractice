import Header from './components/Header/Header'
import HeaderInnerSection from './components/HeaderInnerSection/HeaderInnerSection';
import Main from './components/Main/Main'
import Energy from './components/Energy/Energy';
import Calm from './components/Calm/Calm';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderInnerSection></HeaderInnerSection>
      <Main></Main>
      <Energy></Energy>
      <Calm></Calm>
    </div>
  );
}

export default App;
