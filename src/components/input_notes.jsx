import { useState } from 'react'
import '../assets/styles/input_notes.css'
import disable_button from '../assets/img/enter_button_disable.png';
import enable_button from '../assets/img/enter_button_enable.png';

const InputNotes = ({groupdata, selectedgroup, setGroupData}) => {

  const [inputnote, setInputNote] = useState("");
  const [clickButton, setClickButton] = useState(disable_button);

  const checkInputNote = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    if (inputValue.trim() !== ''){
      setInputNote(inputValue);
      setClickButton(enable_button);
    } else {
      setClickButton(disable_button);
    }
  }
  
  const addNote = () => {

    if (inputnote.trim() !== ''){

      // const current_date = new Date().toLocaleString();
      // const date = new Date();
      const date = new Date('2024-02-17T21:04:00');
      // const date = new Date('2024-02-17T21:04:00');
      const current_date = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }).format(date);
      

      setGroupData(groupdata =>{
        return groupdata.map((data,index)=>{
          return index === selectedgroup ? {...data,notes:[...data.notes,[inputnote, current_date]]} : data
        })
      })
      setInputNote("");
    }

  }

  return (
    <>
    <div className='box' style={{ display: 'flex' }}>
      <div id="input-note-box">
        <textarea onChange={(e) => checkInputNote(e)} id="input-note-field" placeholder='Enter your text here.........' cols="50" rows="50" value={inputnote}></textarea>
      </div>
      <div id="enter-note-box" onClick={addNote}>
        <img id="note-img" src={clickButton} ></img>
      </div>
    </div>

    </>
  )
}

export default InputNotes
