import { useState } from "react";
import FormInput from "../components/InputForm";
import { useAuth } from "../components/AuthProvider";
import api from "../api/axiosInstance";

const Attendance = () => {
    const { authToken } = useAuth()
    const [values, setValues] = useState({
        date: "",
        time: "",
        file: null
      });

    const inputs = [
        {
          id: 1,
          name: "date",
          type: "date",
          placeholder: "Attendance Date",
          label: "Attendance Date",
          required: true,
        },
        {
          id: 2,
          name: "time",
          type: "time",
          placeholder: "Attendance Date",
          label: "Attendance Date",
          required: true,
        },
        {
            id: 3,
            name: "file",
            type: "file",
            placeholder: "Upload Photo",
            label: "Upload Photo",
            accept: "image/*",
            required: true,
        },
      ];

    const handleSubmit = async (e) => {
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("checkInTimestamp", `${values.date} ${values.time}`);
      await api.post('/attendance/submit', formData, { Headers: {
        Authorization: `Bearer ${authToken}`
      }})
    }
    const onChange = (e) => {
      console.log(authToken)
      if (e.target.type === "file") {
        console.log(e.target)
        setValues({ ...values, file: e.target.files[0] }); // Update file state when file input changes
      } else {
        setValues({ ...values, [e.target.name]: e.target.value });
      }
      console.log(values)    
    };

    return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Submit Attendance</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={input.type !== "file" ? values[input.name] : undefined}
                onChange={onChange}
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
    );
}

export default Attendance;