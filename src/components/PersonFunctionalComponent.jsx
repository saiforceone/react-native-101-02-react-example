import React, {useEffect, useState} from 'react';

export const PersonFunctionalComponent = ({heroes}) => {

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  // component did mount - simulation
  useEffect(() => {
    console.log('component did mount - simulated');

    return () => {
      console.log('component will unmount - simluated');
    }
  }, []);

  useEffect(() => {
    console.log('component did update - simluated with count: ', count);
  }, [count])

  return (
    <div>
        <h1>Some Person - Functional</h1>
        <p>Some occupation</p>
        <p>count: {count}</p>
        <button onClick={() => updateCount()}>Increment</button>
        <hr />
        {heroes.map((hero, index) => (
          <div key={`functional-hero-${index}`}>
            <h3>{hero['name']}</h3>
          </div>
        ))}
      </div>
  );
};
