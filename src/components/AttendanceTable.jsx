import "./Table.css";

export const AttendanceTable = ({ rows, detailRow }) => {
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Attached File</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
                const formattedDate = new Date(row.checkin_timestamp);

              return (
                <tr key={idx}>
                  <td>{formattedDate.toLocaleDateString()}</td>
                  <td>{formattedDate.toLocaleTimeString()}</td>
                  <td className="expand">
                    <span className="actions">
                    <button className="edit-btn" onClick={() => detailRow(idx)}>
                        View
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