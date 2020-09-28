import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import top from '../../img/top.png';

const  Join = ()=>{
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');

    return(
      <React.Fragment>
        <div className="joinOuterContainer">
        <img src={top} alt="top" style={{marginTop:"-90vh" ,marginLeft:"-100px", height:"100px", width:"200px"}}/>
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome back!</h1>
        <p className="pera">We are happy to see you again!</p>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join Room</button>
        </Link>
      </div>
    </div>
    </React.Fragment>
    )
}

export default Join;