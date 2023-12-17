import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './style/style.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //   <React.StrictMode>
   <App />
   //   </React.StrictMode>
);