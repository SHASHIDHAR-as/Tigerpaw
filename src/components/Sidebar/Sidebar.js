import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../Images/icons/icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isProjectTaskOpen, setIsProjectTaskOpen] = useState(false);

  const toggleProjectTaskDropdown = () => {
    setIsProjectTaskOpen(!isProjectTaskOpen);
  };
  const [isProjectTask1Open, setIsProjectTask1Open] = useState(false);

  const toggleProjectTask1Dropdown = () => {
    setIsProjectTask1Open(!isProjectTask1Open);
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
      <div className='sidebar bg-gray scroll'>
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
            <Link  onClick={toggleProjectTaskDropdown}>
              <i>{icons['ProjectTask']}</i>
              Project / Task
              <i className='dp'>{icons['Dropdownicon']}</i>
            </Link>
            {isProjectTaskOpen && (
              <ul className='dropdown-menu1'>
                <li>
                  <Link to='/projecttask/project1' className='menuitem' onClick={() => logClickedLink('/projecttask/project1')}>Project 1</Link>
                </li>
                <li>
                  <Link to='/projecttask/project2' className='menuitem' onClick={() => logClickedLink('/projecttask/project2')}>Project 2</Link>
                </li>
                <li>
                  <Link to='/projecttask/task' className='menuitem'  onClick={() => logClickedLink('/project/task1')}>Task 1</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link  onClick={toggleProjectTask1Dropdown}>
              <i>{icons['Approval']}</i>
              Approval
              <i className='dp'>{icons['Dropdownicon']}</i>
            </Link>
            {isProjectTask1Open && (
              <ul className='dropdown-menu1'>
                <li>
                  <Link to='/approval/approval1'  className='menuitem' onClick={() => logClickedLink('/approval/app1')}>Approval 1</Link>
                </li>
                <li>
                  <Link to='/approval/approval2' 
                  className='menuitem'
                  onClick={() => logClickedLink('/approval/app2')}>Approval 2</Link>
                </li>
                <li>
                  <Link to='/approval/task1'
                  className='menuitem' onClick={() => logClickedLink('/approval/task1')}>Task 1</Link>
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
