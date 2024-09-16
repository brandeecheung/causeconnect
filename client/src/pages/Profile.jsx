import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const user = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  profilePicture: 'src/assets/pfp.png', // Example image URL for profile picture
};

const donations = [
  {
    charity: 'Save the Children',
    amount: 50.00,
    date: '2024-08-01',
  },
  {
    charity: 'World Wildlife Fund',
    amount: 100.00,
    date: '2024-08-10',
  },
  {
    charity: 'Charity: Water',
    amount: 75.50,
    date: '2024-08-15',
  },
  {
    charity: 'American Red Cross',
    amount: 120.00,
    date: '2024-08-22',
  },
  {
    charity: 'Doctors Without Borders',
    amount: 200.00,
    date: '2024-08-25',
  },
];

export default function Profile() {
  return (
    <div className="container mt-5">
      {/* Profile Section */}
      <div className="card mb-4">
        <div className="row no-gutters">
          <div className="col-md-4 text-center p-3">
            <img 
              className="img-fluid rounded-circle" 
              src={user.profilePicture} 
              alt={`${user.name}'s Profile`} 
              style={{ width: '150px', height: '150px' }} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{user.name}</h3>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation History Section */}
      <div className="card">
        <div className="card-body">
          <h3>Your Donation History</h3>
          <table className="table table-striped mt-3">
            <thead className="thead-dark">
              <tr>
                <th>Charity</th>
                <th>Donation Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={index}>
                  <td>{donation.charity}</td>
                  <td>${donation.amount.toFixed(2)}</td>
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
