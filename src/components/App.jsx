import { useState } from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'
import Notes from './notes'
import InputNote from './input_notes'
import '../assets/styles/App.css'
import lock from '../assets/img/lock.png';
import blanknote from '../assets/img/blanknote.png';
import '../assets/styles/notes.css'

function App() {
  const [groupdata, setGroupData] = useState([]);
  const [selectedgroup, setselectedgroup] = useState(null);

  // localStorage.setItem(groupdata, 'groupdata');
  // setselectedgroup(JSON.parse(localStorage.getItem('groupdata')));
  
  return (
    <>
    <div id="sidebar">
      <Sidebar groupdata={groupdata} selectedgroup={selectedgroup} setselectedgroup={setselectedgroup}/>
    </div>

    {(groupdata.length !== 0 && selectedgroup !== null) ? (
      <div id="main">
        <div id="topbar">
          <Topbar groupdata={groupdata} selectedgroup={selectedgroup}/>
        </div>
        <div id="notes">
          <Notes groupdata={groupdata} selectedgroup={selectedgroup}/>
        </div>
        <div id="input-notes">
          <div id="input-note-block">
            <InputNote groupdata={groupdata} selectedgroup={selectedgroup} setGroupData={setGroupData}/>
          </div>
        </div>
      </div>
    ) : (
        <div id="blank-main">
          <img id="blanknote" src={blanknote}x/>
          <h2>Pocket Notes</h2>
          <strong><h4>
          Send and receive messages without keeping your phone online. <br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.<br/>
          </h4></strong>
          <div id="lock-block">        
            <img id="lock" src={lock}/>&nbsp;&nbsp;end-to-end encrypted
          </div>
        </div>
    )
  }


      
 

    </>
  )
}

export default App
