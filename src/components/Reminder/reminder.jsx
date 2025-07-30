import React from 'react'
import './reminder.css';

import { MdEmail, MdOutlinePhone, MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { useState } from 'react';
import { supabase } from '../../backend/supabase-client';

export const Reminder = () => {
    let [firstName, setFirstName] = useState('');

    let [lastName, setLastName] = useState('');

    let [email, setEmail] = useState('');

    let [phoneNumber, setPhoneNumber] = useState('');

    let [interviewDate, setInterviewDate] = useState('');

    let [interviewTime, setInterviewTime] = useState();

    const handleSubmit = async () => {
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setInterviewDate('');
        setInterviewTime('');

        const payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            interview_date: interviewDate,
            interview_time: interviewTime
        }
        console.log(payload);

        const { error } = await supabase.from("interviews").insert(payload).single();

        if (error) {
            console.error("Error adding new interview:", error.message);
        }
        if (error) {
            console.error("Error adding interviewee:", error.message);
        }

    };


  return (
    <div class="container">
        <div class="header">
            <h1>📅 Reminder App</h1>
        </div>
        
        <div class="input">
            <input 
                type="text" 
                placeholder=" First Name" 
                onChange={e => setFirstName(e.target.value)} 
                value={firstName}
            />
        </div>
        
        <div class="input">
            <input 
                type="text" 
                placeholder=" Last Name" 
                onChange={e => setLastName(e.target.value)} 
                value={lastName}
            />
        </div>
        
        <div class="input">
            <input 
                type="email" 
                placeholder=" Email" 
                onChange={e => setEmail(e.target.value)} 
                value={email}
            />
        </div>
        
        <div class="input">
            <input 
                type="tel" 
                placeholder=" Phone" 
                onChange={e => setPhoneNumber(e.target.value)} 
                value={phoneNumber}
            />
        </div>
        
        <div class="input">
            <input 
                type="date" 
                placeholder=" Date" 
                onChange={e => setInterviewDate(e.target.value)} 
                value={interviewDate}
            />
        </div>
        
        <div class="input">
            <input 
                type="time" 
                placeholder=" Time" 
                onChange={e => setInterviewTime(e.target.value)}
                value={interviewTime}
            />
        </div>
        
        <button class="submit-btn" onClick={handleSubmit}>Set Reminder</button>
    </div>
  );
};
