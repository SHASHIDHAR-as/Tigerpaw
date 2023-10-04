import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashboard from './components/Sidebar/NavigationItems/Dashboard/Dashboard.js';
import Attendance from'./components/Sidebar/NavigationItems/Attendance/Attendance.js'
import TimeSheet from './components/Sidebar/NavigationItems/TimeSheet/TimeSheet.js';
import Payroll from './components/Sidebar/NavigationItems/Payroll/Payroll.js';
import ProfileSettings from './components/Sidebar/NavigationItems/ProfileSettings/ProfileSettings.js';
import Project1 from './components/Sidebar/NavigationItems/ProjectTask/Project1.js';
import Project2 from './components/Sidebar/NavigationItems/ProjectTask/Project2.js';
import Task from './components/Sidebar/NavigationItems/ProjectTask/Task.js';
import Approval1 from './components/Sidebar/NavigationItems/Approval/Approval1.js';
import Approval2 from './components/Sidebar/NavigationItems/Approval/Approval2.js';
import Task1 from './components/Sidebar/NavigationItems/Approval/Task.js';
import Logout from './components/Sidebar/NavigationItems/Logout/Logout.js';

export default function AppRoutes() {
  return (
    <Routes>

    <Route path="/" element={null} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/attendance" element={<Attendance />} />
    <Route path="/timesheet" element={<TimeSheet />} />
    {/* <Route path="/projecttask" element={<ProjectTask />} /> */}
    {/* <Route path="/approval" element={<Approval />} /> */}
    <Route path="/payroll" element={<Payroll />} />
    <Route path="/profilesettings" element={<ProfileSettings />} />
    <Route path="/projecttask/project1" element={<Project1 />} />
    <Route path="/projecttask/project2" element={<Project2 />} />
    <Route path="/projecttask/task" element={<Task />} />
    <Route path="/approval/approval1" element={<Approval1 />} />
    <Route path="/approval/approval2" element={<Approval2 />} />
    <Route path="/approval/task1" element={<Task1 />} />
    <Route path="/logout" element={<Logout />} />
    
</Routes>
  );
}

