import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import CookieContainer from './Components/CookieContainer/CookieContainer';

function App() {

    const [modal, setModal] = useState(true);
    
    const changeModal = () => {
        setModal(!modal);
    }
    
    return (
        <div>
            <div class="button">
                <Button onClick={changeModal}>
                    Show cookies
                </Button>
            </div>
           <Modal active={modal} setActive={setModal}>
                <CookieContainer />
           </Modal>
        </div>
    );
}

export default App;
