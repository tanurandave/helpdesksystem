// components/DatabasePage.js
import React from 'react';
import '../styles/DatabasePage.css';

function DatabasePage() {
  const data = [
    { id: 'ABC123', name: 'Abu', department: 'IT', specialty: 'Software' },
    { id: 'ABC124', name: 'Ahmad', department: 'Software', specialty: 'Networking' },
    { id: 'ABC125', name: 'Ali', department: 'Technical', specialty: 'Hardware' },
  ];

  return (
    <div className="page-container">
      <h2>Database</h2>
      <table>
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Specialty</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {data.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.department}</td>
              <td>{staff.specialty}</td>
              <td>✏️ 🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DatabasePage;
