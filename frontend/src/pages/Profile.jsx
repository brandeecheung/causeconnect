// DonationHistory.js
// import './DonationHistory.css'; // Import the stylesheet if you need styling

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
    <div className="profile-section">
      {/* Profile Section */}
      <div className="profile-info">
        <img className="pfp" src={user.profilePicture} alt={`${user.name}'s Profile`} />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Donation History Section */}
      <div className="donation-history">
        <h2>Your Donation History</h2>
        <table>
          <thead>
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
  );
}
