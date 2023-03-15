import Form from './src/components/Form';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:3001"
export default function App() {

  return (
      <Form/>
  );
}
