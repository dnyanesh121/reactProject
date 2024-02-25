import { useState } from 'react'
import '../assets/styles/sidebar.css'
import ellipse from '../assets/img/ellipse.png';
import plus from '../assets/img/plus.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const InitialChars = ({ sentence }) => {
  const words = sentence.split(' ');
  const firstInitial = words[0] ? words[0][0] : '';
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : '';
  const text = firstInitial + lastInitial;
  return text.toUpperCase()
}

const Sidebar = ({ groupdata, selectedgroup, setselectedgroup }) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [groupname, setGroupName] = useState(null);
  const [selectedcolor, setSelectedColor] = useState(null);
  
  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectColor = (val) => {
    if (val !== selectedcolor) {
      setSelectedColor(val);
    }
  };

  const updateGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const addGroup = () => {
    groupdata.push({groupname:groupname.trim(),
                    color:selectedcolor,
                    notes:[]})
    closeModal();
  };

  const updateSelectedGroup = (index) => {
    setselectedgroup(index);
  };

  return (
    <>
      <div id="side-header">
        Pocket Notes
      </div>
      <div className='group-lists'>
        {groupdata && groupdata.length > 0 && (
          groupdata.map((item, index) => (
            <div className="individual-list">
            <div style={{
                        display: 'flex',
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}><InitialChars sentence={item.groupname} /></div>

            <div className="group-list" key={"group-list-" + index} onClick={() => updateSelectedGroup(index)}>
              {item.groupname.charAt(0).toUpperCase() + item.groupname.slice(1)}
            </div>
            </div>
          ))
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '25%',
            width: '30%',
            padding: '20px',
            overflow: "none",
            borderRadius: 10,
            display: 'flex'
          }
        }}
        portalClassName="input-box-container"
      
      ><> 
      <div className="input-box-container" id="input-box-container">
        <h2>Create New group</h2>
          <label>Group Name</label>
            <input onChange={updateGroupName} type="text" id="input-box" name="input-box" placeholder='Enter group name' required></input><br></br><br></br>
          <span className='group-input-span'>
          <label>Choose color</label>
          <div id="color-inputs">
          {colors.map((color, index) => (
            <div
              key={index}
              className="colorCircle"
              style={{
                backgroundColor: color
              }}
              onClick={() => selectColor(color)}>
            </div>
        ))}
          </div>
          </span>
          <br></br>
          <input type="submit" id="create-button" onClick={addGroup} value="Create"></input>
      </div>
      </>
      </Modal>

      <div id="side-footer">
        <div id="input-box" onClick={openModal}>
          <img id="ellipse" src={ellipse}/>
          <img id="plus" src={plus}/>
        </div>
      </div>

    </>
  )
}

export default Sidebar
