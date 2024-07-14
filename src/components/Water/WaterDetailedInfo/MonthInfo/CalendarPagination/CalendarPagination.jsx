import { useState } from 'react';

const CalendarPagination = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  return (
    <div className="calendar-pagination">
      <button onClick={handlePreviousMonth}>&lt;</button>
      <span>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );
};

export default CalendarPagination;


