import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../Images/icons/icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isProjectTaskOpen, setIsProjectTaskOpen] = useState(false);

  const toggleProjectTaskDropdown = () => {
    setIsProjectTaskOpen(!isProjectTaskOpen);
  };

  // Function to log the clicked link to the console
  const logClickedLink = (destination) => {
    console.log('Clicked Link:', destination);
  };

  return (
    <>
      <input type='checkbox' id='check' />
      <label htmlFor='check'>
        <i id='btn'>{icons['Hamburger']}</i>
        <i id='cancel'>{icons['Cancel']}</i>
      </label>
      <div className='sidebar bg-gray'>
        <ul>
          <li>
            <Link to='/dashboard' onClick={() => logClickedLink('/dashboard')}>
              <i>{icons['Dashboard']}</i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/attendance' onClick={() => logClickedLink('/attendance')}>
              <i>{icons['Attendance']}</i>
              Attendance
            </Link>
          </li>
          <li>
            <Link to='/timesheet' onClick={() => logClickedLink('/timesheet')}>
              <i>{icons['TimeSheet']}</i>
              TimeSheet
            </Link>
          </li>
          <li>
            <Link to='/projecttask' onClick={toggleProjectTaskDropdown}>
              <i>{icons['ProjectTask']}</i>
              Project / Task<i>{icons['Dropdownicon']}</i>
            </Link>
            {isProjectTaskOpen && (
              <ul className='dropdown-menu'>
                <li>
                  <Link to='/projecttask/project1' onClick={() => logClickedLink('/projecttask/project1')}>Project 1</Link>
                </li>
                <li>
                  <Link to='/projecttask/project2' onClick={() => logClickedLink('/projecttask/project2')}>Project 2</Link>
                </li>
                <li>
                  <Link to='/projecttask/task' onClick={() => logClickedLink('/project/task1')}>Task 1</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to='/approval' onClick={toggleProjectTaskDropdown}>
              <i>{icons['Approval']}</i>
              Approval
              <i>{icons['Dropdownicon']}</i>
            </Link>
            {isProjectTaskOpen && (
              <ul className='dropdown-menu1'>
                <li>
                  <Link to='/approval/approval1' onClick={() => logClickedLink('/approval/app1')}>Approval 1</Link>
                </li>
                <li>
                  <Link to='/approval/approval2' onClick={() => logClickedLink('/approval/app2')}>Approval 2</Link>
                </li>
                <li>
                  <Link to='/approval/task1' onClick={() => logClickedLink('/approval/task1')}>Task 1</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to='/payroll' onClick={() => logClickedLink('/payroll')}>
              <i>{icons['Payroll']}</i>
              Payroll
            </Link>
          </li>
          <li>
            <Link to='/profilesettings' onClick={() => logClickedLink('/profilesettings')}>
              <i>{icons['ProfileSettings']}</i>
              Profile Settings
            </Link>
          </li>
          <li>
            <Link className='text-red' to='/logout' onClick={() => logClickedLink('/logout')}>
              <i>{icons['Logout']}</i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
