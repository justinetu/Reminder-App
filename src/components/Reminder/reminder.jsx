import React from 'react'
import './reminder.css';

import { MdEmail, MdOutlinePhone, MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";

export const Reminder = () => {
  return (
    <div class="container">
        <div class="header">
            <h1>📅 Reminder App</h1>
        </div>
        
        <div class="input">
            <input type="text" placeholder=" First Name" />
        </div>
        
        <div class="input">
            <input type="text" placeholder=" Last Name" />
        </div>
        
        <div class="input">
            <input type="email" placeholder=" Email" />
        </div>
        
        <div class="input">
            <input type="tel" placeholder=" Phone" />
        </div>
        
        <div class="input">
            <input type="date" placeholder=" Date" />
        </div>
        
        <div class="input">
            <input type="time" placeholder=" Time" />
        </div>
        
        <button class="submit-btn">Set Reminder</button>
    </div>

  );
};
