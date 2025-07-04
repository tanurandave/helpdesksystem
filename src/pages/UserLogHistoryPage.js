import React from 'react';

const userLogs = [
  {
    no: 1,
    signIn: "130821 / 0800",
    staffId: "XL000001",
    department: "OT",
    activity: "Create Team",
    signOut: "130821 / 0815",
  },
  {
    no: 2,
    signIn: "130821 / 0805",
    staffId: "",
    department: "",
    activity: "",
    signOut: "130821 / 0810",
  },
];

function UserLogHistoryPage() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Log History</h2>
      
      <div className="mb-4 flex items-center space-x-2">
        <label htmlFor="entries" className="text-gray-700 font-medium">Show:</label>
        <select id="entries" className="border border-gray-300 rounded px-2 py-1">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="text-gray-600">Entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700 border border-collapse">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">Date/Sign In Time</th>
              <th className="px-4 py-2 border">Staff ID</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Activity</th>
              <th className="px-4 py-2 border">Date/Sign Out Time</th>
            </tr>
          </thead>
          <tbody>
            {userLogs.map((log, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{log.no}</td>
                <td className="px-4 py-2 border">{log.signIn}</td>
                <td className="px-4 py-2 border">{log.staffId || "-"}</td>
                <td className="px-4 py-2 border">{log.department || "-"}</td>
                <td className="px-4 py-2 border">{log.activity || "-"}</td>
                <td className="px-4 py-2 border">{log.signOut}</td>
              </tr>
            ))}
            {/* Fill remaining rows */}
            {[...Array(3)].map((_, i) => (
              <tr key={`empty-${i}`} className="text-gray-300">
                <td className="px-4 py-2 border text-center">{userLogs.length + i + 1}</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-sm text-gray-600 mt-2">Showing 1 to 5 of 5 entries</div>
        <div className="text-right text-gray-400 mt-1">&laquo; 1 &raquo;</div>
      </div>
    </div>
  );
}

export default UserLogHistoryPage;
