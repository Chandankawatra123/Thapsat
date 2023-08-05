import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch table data from the API when the user is logged in
      fetchTableData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // Fetch the updated table data whenever tableData changes
    fetchTableData();
  }, [tableData]);



  const fetchTableData = async () => {
    try {
      // Make an API request to fetch the table data
      const response = await fetch('https://fun.codeasia.org/api/viewall');
      const data = await response.json();

      // Set the fetched table data to the state
      setTableData(data.Data.map(row => ({ ...row })));
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };
  const handleSendMail = async (name, age, email, state, study, custom, newsletter) => {
    try {
      
        console.log('Sending email:', name, age, email, state, study, custom, newsletter);
      const response = await fetch(`https://fun.codeasia.org/api/sendmail?name=${name}&age=${age}&rmail=${email}&state=${state}&school=${study}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
     
      if (response.ok) {
    
        fetchTableData();
      } else {
     
        console.error('Error sending mail. API response:', response);
      }
    } catch (error) {
   
      console.error('Error sending mail:', error);
    }
  };
  
  
  

  const handleLogin = () => {
    // Perform login validation here
    if (username === 'vansh' && password === 'letsbuildthefuture@1008') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      // Make an API request to delete the entry
      await fetch(`https://fun.codeasia.org/api/delete?id=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Remove the deleted entry from the tableData state
      setTableData((prevData) => prevData.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const handleApprove = async (id, name, age, email, state, study, custom, newsletter) => {
    try {
      // Make an API request to approve the entry
      await fetch(`https://fun.codeasia.org/api/mail_yes?id=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Call handleSendMail to send the mail
      await handleSendMail(name, age, email, state, study, custom, newsletter);
    } catch (error) {
      console.error('Error approving entry:', error);
    }
  };
  
  


  
   


const handleDeny = async (id) => {
  try {
    // Make an API request to deny the entry
    await fetch(`https://fun.codeasia.org/api/mail_no?id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Fetch the updated table data after denying the entry
    fetchTableData();
  } catch (error) {
    console.error('Error denying entry:', error);
  }
};
    
 
  return (
    <div className="container-fluid" style={{ backgroundColor: '#003152', minHeight: '100vh', padding: '20px' }}>
      <div className="d-flex justify-content-end mb-4">
        {isLoggedIn && (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        )}
      </div>
      <h1 className="text-center mb-4" style={{ color: '#ffffff' }}>
        <b>Login Page</b>
      </h1>
      {isLoggedIn ? (
        <div>
          <h1 className="text-center mb-4" style={{ color: '#ffffff' }}>
            <b>Welcome, {username}!</b>
          </h1>
          <div className="table-responsive">
            <table className="table table-bordered table-light">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>State</th>
                  <th>Study</th>
                  <th>Newsletter</th>
                  <th>Email</th>
                  <th>Question</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.state}</td>
                    <td>{row.study}</td>
                    <td>{row.newsletter}</td>
                    <td>{row.email}</td>
                    <td>{row.custom}</td>
                    <td>{row.mail_status}</td>
                    <td>
                    <button onClick={() => handleApprove(row.id, row.name, row.age, row.email, row.state, row.study, row.custom, row.newsletter)} className="btn btn-outline-success">
                    Approve Mail
                  </button>
                  
                      <button onClick={() => {handleDeny(row.id)  }} className="btn btn-outline-warning ml-2">
                        Deny Mail
                      </button>
                      <button onClick={() => handleDelete(row.id)} className="btn btn-outline-danger ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control mb-3"
          />
          <button onClick={handleLogin} className="btn btn-primary mb-3">
            Login
          </button>
          {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default LoginPage;
