import { useState } from "react";
import { Modal } from "../components/FormModal";
import { AttendanceTable } from "../components/AttendanceTable";
import { FileModal } from "../components/FileModal";

const AttendanceDashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            "id": "91380c29-706a-48b9-898e-7d47e6cfc2a6",
            "checkin_timestamp": "1999-08-14T17:00:00.000Z",
            "file_path": "123"
        },
        {
            "id": "91380c29-706a-48b9-898e-7d47e6cfc2a7",
            "checkin_timestamp": "1999-08-15T17:00:00.000Z",
            "file_path": "123"
        }
    ]);
  
    const handleDetail = (newRow) => {
        setModalOpen(true);

    };

    return (
        <div className="app">
            <AttendanceTable rows={rows} detailRow={handleDetail} />
                {modalOpen && (
                    <FileModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    />
                )}
        </div>
    )
}

export default AttendanceDashboard;