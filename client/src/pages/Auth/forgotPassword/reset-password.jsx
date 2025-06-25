// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`/reset-password/${token}`, { email, newPassword });
//       alert(response.data);
//       navigate('/');
//     } catch (error) {
//       alert('Error resetting password.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Reset Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="email" 
//           name="email" 
//           placeholder="Enter your email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           name="newPassword" 
//           placeholder="Enter new password" 
//           value={newPassword} 
//           onChange={(e) => setNewPassword(e.target.value)} 
//           required 
//         />
//         <input type="submit" value="Reset Password" />
//       </form>
//       <a href="/">Back to Login</a>
//     </div>
//   );
// };

// export default ResetPassword;
