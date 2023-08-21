// src/components/Reminder.tsx
import React from 'react';

interface ReminderProps {
    title: string;
    date: string;
    time: string;
    description: string;
    onDelete: () => void; // Tambahkan prop onDelete
}

const Reminder: React.FC<ReminderProps> = ({ title, date, time, description, onDelete }) => {
    return (
        <div className="reminder">
            <h3>{title}</h3>
            <p>{date} at {time}</p>
            <p>{description}</p>
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Reminder;
