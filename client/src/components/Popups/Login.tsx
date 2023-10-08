import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


type LoginProps = {
  trigger: boolean;
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ trigger, onClose }) => {

  // Data to pass to post request
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Login status
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<any>) => {
    const {name, value} = e.target;
    setFormData((formData) => ({ ...formData, [name]: value}));
  }

  const navigate = useNavigate();

  // Login handler
  const HandleLogin = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.status === 'SUCCESS') {
        console.log(data.message);
        setFormData({
          email: '',
          password: ''
        });
        onClose();

        //Navigate to main screen
        navigate('/main');

      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log('error submitting this form: ', error)
    }

  }

  return trigger ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-black p-8 rounded-lg shadow-lg z-10 w-96 flex flex-col justify-center items-center">
        <p className='font-bold text-white pt-8 text-2xl pb-5'>Log In</p>
        <form className='flex flex-col items-center' onSubmit={HandleLogin}>
          <input name='email' value={formData.email} className='text-white rounded-sm p-2 bg-black' type="text" placeholder='Email' onChange={handleChange} />
          <p className='p-3'></p>
          <input name='password' value={formData.password} className='rounded-sm p-2 text-white bg-black' type="password" placeholder='Password' onChange={handleChange} />
          <p className='p-7'></p>
          {message ? <div className='text-red-500 text-center text-md'>{message}</div> : null}
          <button className='bg-white text-black font-bold rounded-full w-[300px] p-3 '>Log In</button>
          <p className='p-3'></p>
          <button className='text-white' onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Login;