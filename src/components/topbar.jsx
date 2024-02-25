import { useState } from 'react'
import '../assets/styles/topbar.css'

const InitialChars = ({ sentence }) => {
    const words = sentence.split(' ');
    const firstInitial = words[0] ? words[0][0] : '';
    const lastInitial = words.length > 1 ? words[words.length - 1][0] : '';
    const text = firstInitial + lastInitial;
    return text.toUpperCase()
  }

const Topbar = ({groupdata, selectedgroup}) => {
    const groupname = groupdata[selectedgroup].groupname;
    const groupcolor = groupdata[selectedgroup].color;

  return (
    <>
        <div className='group-name-container'>

            <div className="top-group-name">
                <div style={{
                        display: 'flex',
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        backgroundColor: groupcolor,
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 13
                      }}><InitialChars sentence={groupname} /></div>

                <div className="selected-group" key="selected-group">
                    {groupname.charAt(0).toUpperCase() + groupname.slice(1)}
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar
