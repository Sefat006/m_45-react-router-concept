import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id, name, email, phone} = user;
   const userStyle={
    border: '2px solid yellow',
    padding: '10px',
    borderRadius: '5px'
   }

    return (
        <div style={userStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;