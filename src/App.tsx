// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Reminder from './components/Reminder';
import ReminderForm from './components/ReminderForm';

interface ReminderData {
  title: string;
  date: string;
  time: string;
  description: string;
}

const App: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderData[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addReminder = (reminder: ReminderData) => {
    setReminders((prevReminders) => [...prevReminders, reminder]);
    setShowForm(false);
  };

  const deleteReminder = (index: number) => {
    const newReminders = [...reminders];
    newReminders.splice(index, 1);
    setReminders(newReminders);
  };

  const cancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <h1>Event Reminder List:</h1>
      <button
        className="add-reminder-button"
        onClick={() => setShowForm(true)}
      >
        Add Reminder
      </button>
      {showForm && (
        <div className="reminder-form-overlay">
          <ReminderForm onSubmit={addReminder} onCancel={cancelForm} />
        </div>
      )}
      {reminders.map((reminder, index) => (
        <div className="reminder-card" key={index}>
          <Reminder
            title={reminder.title}
            date={reminder.date}
            time={reminder.time}
            description={reminder.description}
            onDelete={() => deleteReminder(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
