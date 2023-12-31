import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


type signupProps = {
  trigger: boolean;
  onClose: () => void;
};

const Signup: React.FC<signupProps> = ({ trigger, onClose }) => {

  // Data to pass to post request
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    caseDate: '',
    caseRepresentative: '',
    clientName: '',
    caseType: '',
    caseDescription: '',
  });

  // Login status
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<any>) => {
    const {name, value} = e.target;
    setFormData((formData) => ({ ...formData, [name]: value}));
  }

  const [response, setResponse] = useState('')

  const navigate = useNavigate();

  // Login handler
  const handleLogin = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      const response = await fetch('/signup', {
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
          password: '',
          caseDate: '',
          caseRepresentative: '',
          clientName: '',
          caseType: '',
          caseDescription: '',
        });
        onClose();

        //Navigate to main

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
    <div className="bg-black p-8 rounded-lg shadow-lg z-10 w-[700px] flex flex-col justify-center items-center">
      <p className='font-bold text-white pt-8 text-2xl mb-[10px]'>Sign Up</p>
      <form className='flex flex-col items-center' onSubmit={handleLogin}>
        <input
          name='email'
          value={formData.email}
          className='text-white rounded-sm p-2 bg-black mb-3 ml-[-300px] mt-[20px]'
          type="text"
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          name='password'
          value={formData.password}
          className='rounded-sm p-2 text-white bg-black mb-3 ml-[300px] mt-[-50px]'
          type="password"
          placeholder='Password'
          onChange={handleChange}
        />
        {/* Add the new input fields here */}
        <input
          name='caseDate'
          value={formData.caseDate}
          className='text-white rounded-sm p-2 bg-black mb-3 ml-[-300px] mt-[10px]'
          type="text"
          placeholder='MM-DD-YYYY (Case Date)'
          onChange={handleChange}
        />
        <input
          name='caseRepresentative'
          value={formData.caseRepresentative}
          className='text-white rounded-sm p-2 bg-black mb-3 ml-[300px] mt-[-50px]'
          type="text"
          placeholder='Case Representative'
          onChange={handleChange}
        />
        <input
          name='clientName'
          value={formData.clientName}
          className='text-white rounded-sm p-2 bg-black mb-3 ml-[-300px] mt-[5px]'
          type="text"
          placeholder='Client Name'
          onChange={handleChange}
        />
        <input
          name='caseType'
          value={formData.caseType}
          className='text-white rounded-sm p-2 bg-black mb-3 ml-[300px] mt-[-50px]'
          type="text"
          placeholder='Case Type'
          onChange={handleChange}
        />
        <textarea
          name='caseDescription'
          value={formData.caseDescription}
          style={{ width: '600px', height: '140px' }}
          className='text-white rounded-sm p-2 bg-black mb-[30px] ml-[px] mt-[10px]'
          placeholder='Case Description'
          onChange={handleChange}
        />
        {message ? <div className='text-red-500 text-center text-md'>{message}</div> : null}
        <button className='bg-white text-black font-bold rounded-full w-[300px] p-3 '>Sign Up</button>
        <p className='p-3'></p>
        <button className='text-white' onClick={onClose}>Close</button>
      </form>
    </div>
  </div>
  ) : null;
};

export default Signup;