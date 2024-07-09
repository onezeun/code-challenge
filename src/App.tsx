import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { wishToVisitState, visitedState, favoriteState, persistState } from './recoil/countryState';

const App = () => {
  const [wishToVisit, setWishToVisit] = useRecoilState(wishToVisitState);
  const [visited, setVisited] = useRecoilState(visitedState);
  const [favorite, setFavorite] = useRecoilState(favoriteState);
  const setPersistState = useSetRecoilState(persistState);

  const [newCountry, setNewCountry] = useState('');

  const handleAddCountry = () => {
    if (newCountry) {
      setWishToVisit([...wishToVisit, newCountry]);
      setPersistState();
      setNewCountry('');
    }
  };

  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <div>
        <input
          type="text"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
        />
        <button onClick={handleAddCountry}>가자!</button>
      </div>
      <ul>
        {wishToVisit.map((country, index) => (
          <li key={index}>
            {country}
            <button
              onClick={() => {
                setWishToVisit(wishToVisit.filter((c) => c !== country));
                setPersistState();
              }}
            >
              🗑️
            </button>
            <button
              onClick={() => {
                setWishToVisit(wishToVisit.filter((c) => c !== country));
                setVisited([...visited, country]);
                setPersistState();
              }}
            >
              ✔️
            </button>
          </li>
        ))}
      </ul>

      <h2>내가 가본 나라들</h2>
      <ul>
        {visited.map((country, index) => (
          <li key={index}>
            {country}
            <button
              onClick={() => {
                setVisited(visited.filter((c) => c !== country));
                setWishToVisit([...wishToVisit, country]);
                setPersistState();
              }}
            >
              🙅‍♀️
            </button>
            <button
              onClick={() => {
                setVisited(visited.filter((c) => c !== country));
                setFavorite([...favorite, country]);
                setPersistState();
              }}
            >
              👍
            </button>
          </li>
        ))}
      </ul>

      <h2>내가 좋아하는 나라들</h2>
      <ul>
        {favorite.map((country, index) => (
          <li key={index}>
            {country}
            <button
              onClick={() => {
                setFavorite(favorite.filter((c) => c !== country));
                setVisited([...visited, country]);
                setPersistState();
              }}
            >
              💩
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
