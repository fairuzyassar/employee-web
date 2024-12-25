import { useEffect, useState } from "react";
import { Table } from "../components/Table"
import { Modal } from "../components/FormModal";
import api from "../api/axiosInstance";

const EmployeeDashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const [rowToEdit, setRowToEdit] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await api.get('/users', { headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZGkuZ3Jvb3ZlIiwicm9sZSI6W10sImlhdCI6MTczNTEyMjA4MSwiZXhwIjoxNzM1MTY1MjgxfQ.CHvtrxMJVu4zeLwL7jFfuW8sSJBkSIR3L-JFOUWkIsQ`
            }});
            setRows(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

    fetchData();
  }, []); 
  
    const handleEditRow = (idx) => {
      setRowToEdit(idx);
  
      setModalOpen(true);
    };

    const handleSubmit = async (newRow) => {
        try {
            const response = await api.get('/users/update-data', newRow, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZGkuZ3Jvb3ZlIiwicm9sZSI6W10sImlhdCI6MTczNTEyMjA4MSwiZXhwIjoxNzM1MTY1MjgxfQ.CHvtrxMJVu4zeLwL7jFfuW8sSJBkSIR3L-JFOUWkIsQ`
                }
            }); 
            setRows(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        rowToEdit === null
          ? setRows([...rows, newRow])
          : setRows(
              rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
    
                return newRow;
              })
            );
      };

      const handleDetail = (newRow) => {
      };

    return (
        <div className="app">
            <Table rows={rows} editRow={handleEditRow} detailRow={handleDetail} />
                {modalOpen && (
                    <Modal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                    />
                )}
        </div>
    )
}

export default EmployeeDashboard;