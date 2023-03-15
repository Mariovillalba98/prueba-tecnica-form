import Form from './src/components/Form';
import axios from 'axios';

// axios.defaults.baseURL="http://10.0.2.2:3001"
axios.defaults.baseURL="https://prueba-tecnica-form-production.up.railway.app"
export default function App() {

  return (
      <Form/>
  );
}
