
import Navbar from './Navbar';
import TextForm from './TextForm'; 
import './styles.css';


export default function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}


