import React, {useCallback, useState} from 'react';
import { EmojiGenerator } from './generator/EmojiGenerator';
import './App.css';

const App: React.FC = function() {
  const [percentage, setPercentage] = useState(0);
  const onPercentageChange = useCallback(e => setPercentage(e.target.value), [setPercentage]);
  return (
    <div className="App">
      <EmojiGenerator />
    </div>
  );
}

export default App;
