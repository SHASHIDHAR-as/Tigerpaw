import React from 'react'
import { Routes, Route } from "react-router-dom";

import Dashboard from './components/Sidebar/NavigationItems/Dashboard/Dashboard.js';
import Attendance from'./components/Sidebar/NavigationItems/Attendance/Attendance.js'
import TimeSheet from './components/Sidebar/NavigationItems/TimeSheet/TimeSheet.js';
import Approval from './components/Sidebar/NavigationItems/Approval/Approval.js';
import Payroll from './components/Sidebar/NavigationItems/Payroll/Payroll.js';
import ProfileSettings from './components/Sidebar/NavigationItems/ProfileSettings/ProfileSettings.js';
import Project1 from './components/Sidebar/NavigationItems/ProjectTask/Project1.js';
import Project2 from './components/Sidebar/NavigationItems/ProjectTask/Project2.js';
export default function AppRoutes() {
  return (
    <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/attendance" element={<Attendance />} />
    <Route path="/timesheet" element={<TimeSheet />} />
    {/* <Route path="/projecttask" element={<ProjectTask />} /> */}
    <Route path="/approval" element={<Approval />} />
    <Route path="/payroll" element={<Payroll />} />
    <Route path="/profilesettings" element={<ProfileSettings />} />
    <Route path="/projecttask/project1" element={<Project1 />} />
    <Route path="/projecttask/project2" element={<Project2 />} />
</Routes>
  );
}

