import React, { useState } from 'react';
import './TimeSheet.css';

const TimeSheet = () => {
  const [rows, setRows] = useState([
    {
      projectNo: '',
      startTime: '',
      endTime: '',
      activity: '',
      remarks: '',
    },
  ]);

  const handleChange = (e, rowIndex, fieldName) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, [fieldName]: value };
        }
        return row;
      })
    );
  };

  const handleAddRow = () => {
    const currentRow = rows[rows.length - 1];
    const isRowEmpty = Object.values(currentRow).some((value) => value === '');

    if (!isRowEmpty) {
      const newRow = {
        projectNo: '',
        startTime: '',
        endTime: '',
        activity: '',
        remarks: '',
      };

      setRows((prevRows) => [...prevRows, newRow]);
    }
  };

  return (
    <section>
      <div className='container'>
        <div className='inner-container'>
          <div className='form'>
            <div className='form-headings'>
              <span>Project No</span>
              <span>Start Time</span>
              <span>End Time</span>
              <span>Activity</span>
              <span>Remarks</span>
            </div>
            <div className='form-scroll-container'>
              {rows.map((row, rowIndex) => (
                <form key={rowIndex}>
                  <input
                    htmlFor={`projectNo${rowIndex}`}
                    id={`projectNo${rowIndex}`}
                    value={row.projectNo}
                    onChange={(e) => handleChange(e, rowIndex, 'projectNo')}
                    required // Add the required attribute
                  />

                  <input
                    htmlFor={`startTime${rowIndex}`}
                    id={`startTime${rowIndex}`}
                    value={row.startTime}
                    onChange={(e) => handleChange(e, rowIndex, 'startTime')}
                    required // Add the required attribute
                  />

                  <input
                    htmlFor={`endTime${rowIndex}`}
                    id={`endTime${rowIndex}`}
                    value={row.endTime}
                    onChange={(e) => handleChange(e, rowIndex, 'endTime')}
                    required // Add the required attribute
                  />

                  <input
                    htmlFor={`activity${rowIndex}`}
                    id={`activity${rowIndex}`}
                    value={row.activity}
                    onChange={(e) => handleChange(e, rowIndex, 'activity')}
                    required // Add the required attribute
                  />

                  <input
                    htmlFor={`remarks${rowIndex}`}
                    id={`remarks${rowIndex}`}
                    value={row.remarks}
                    onChange={(e) => handleChange(e, rowIndex, 'remarks')}
                    required // Add the required attribute
                  />
                </form>
              ))}
            </div>
            <div className='buttons'>
              <button type='button' onClick={handleAddRow}>
                Add Row
              </button>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSheet;
