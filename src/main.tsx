import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store, StoreContext } from './stores/store.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
