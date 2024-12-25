import "./Table.css";

export const Table = ({ rows, editRow, detailRow }) => {
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
                const formattedDate = new Date(row.date_of_birth).toISOString().split('T')[0];

              return (
                <tr key={idx}>
                  <td>{row.full_name}</td>
                  <td>{formattedDate}</td>
                  <td>{row.position}</td>
                  <td>{row.department}</td>
                  <td>{row.salary}</td>
                  <td className="expand">
                    <span className="actions">
                    <button className="edit-btn" onClick={() => editRow(idx)}>
                        Edit
                    </button>
                    <button className="edit-btn" onClick={() => detailRow(idx)}>
                        Attendance
                    </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };