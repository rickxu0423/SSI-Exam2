import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailIcon from '@material-ui/icons/Mail';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';

import SimpleTab from '../tab/SimpleTab'


function renderAvatar() {

  return (
    <div className='avatar-container'>
      <Avatar className='avatar' style={{backgroundColor: '#8abc89'}}>
          <FolderIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#e91e63'}}>
          <ThreeDRotationIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#4caf50'}}>
        <DeleteOutlinedIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#AE13E6'}}>
        <ShoppingCartIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#F01F6C'}}>
        <MailIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#F06C1F'}}>
        <DoneIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#16A177'}}>
        <FaceIcon/>
      </Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#457ab2'}}>R</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#ff5722'}}>U</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#673ab7'}}>I</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#1B61ED'}}>Y</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#f572a2'}}>A</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#a43ab7'}}>N</Avatar>
      <Avatar className='avatar' style={{backgroundColor: '#38E265'}}>G</Avatar>
    </div>
  );
}

const usage = 
`
    import Avatar from '@material-ui/core/Avatar';
      <Avatar src="your link" />
      <Avatar>
        <Your Icon>
      </Avatar>
      <Avatar>
        Your Text
      </Avatar>`;  


class avatar extends React.Component {

  render() {

    return (
      <div>
        <SimpleTab data={['Avatar', renderAvatar, usage]} />
      </div>
    );
  }
}
export default avatar