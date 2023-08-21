import React, { useState } from 'react';

interface ReminderFormProps {
    onSubmit: (reminder: ReminderData) => void;
    onCancel: () => void;
}

interface ReminderData {
    title: string;
    date: string;
    time: string;
    description: string;
}

const ReminderForm: React.FC<ReminderFormProps> = ({ onSubmit, onCancel }) => {
    const initialFormData: ReminderData = {
        title: '',
        date: '',
        time: '',
        description: '',
    };

    const [formData, setFormData] = useState<ReminderData>(initialFormData);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData(initialFormData); // Reset form after submission
    };

    return (
        <div className="reminder-form-popup">
            <form className="reminder-form" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={formData.time} onChange={handleInputChange} />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Add Reminder</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default ReminderForm;
