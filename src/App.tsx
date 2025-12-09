// App.tsx
import './App.css';
import FuzzyText from './component/FuzzyText';

function App() {
  return (
    <div className="container">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={120}
        color="#fff"
      >
        404
      </FuzzyText>

      <h2 className="subtitle">Page Not Found</h2>

      <p className="description">
        Sorry, we are currently performing updates to improve your experience. Please check back later.
      </p>
    </div>
  );
}

export default App;
