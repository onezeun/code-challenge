import { atom, selector } from 'recoil';

export const wishToVisitState = atom<string[]>({
  key: 'wishToVisitState',
  default: []
});

export const visitedState = atom<string[]>({
  key: 'visitedState',
  default: []
});

export const favoriteState = atom<string[]>({
  key: 'favoriteState',
  default: []
});

export const persistState = selector<void>({
  key: 'persistState',
  get: () => {},
  set: ({ get }) => {
    localStorage.setItem('wishToVisit', JSON.stringify(get(wishToVisitState)));
    localStorage.setItem('visited', JSON.stringify(get(visitedState)));
    localStorage.setItem('favorite', JSON.stringify(get(favoriteState)));
  }
});
