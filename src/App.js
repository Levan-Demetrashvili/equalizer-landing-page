import "./App.css";
import ImagePreview from "./components/ImagePreview/ImagePreview";
import Creator from "./components/Creator/Creator";
import CurrencyPrice from "./components/CurrencyPrice/CurrencyPrice";

function App() {
  return (
    <div className='card'>
      <ImagePreview />
      <h1>Equilibrium #3429</h1>
      <p className='description'>Our Equilibrium collection promotes balance and calm.</p>
      <CurrencyPrice />

      <hr />
      <Creator />
    </div>
  );
}

export default App;
