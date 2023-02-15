import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { DataContext } from '../';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

function Note({ title, content, onDelete, id, onEdit }) {

  return (
    <div className="note">
      <h1>{title} <button onClick={}>
        <PushPinOutlinedIcon size={25} />
      </button></h1>
      <p>{content}</p>
      <button onClick={() =>{onEdit(id)}}>
        <BorderColorOutlinedIcon size={25} />
      </button>

      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
      
    </div>
  );
}

export default Note;
