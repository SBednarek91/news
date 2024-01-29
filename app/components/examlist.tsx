import React, { useState } from 'react';

const ExamList: React.FC = () => {
  const [exams, setExams] = useState<string[]>([]);
  const [examName, setExamName] = useState<string>('');

  const addExam = () => {
    if (examName.trim() !== '') {
      setExams((prevExams) => [...prevExams, examName]);
      setExamName('');
    }
  };

  const removeExam = (index: number) => {
    const updatedExams = exams.filter((_, i) => i !== index);
    setExams(updatedExams);
  };

  return (
    <div>
      <ul className='flex flex-col items-center '>
        {exams.map((exam, index) => (
          <li className='items-center text-xl' key={index}>
            {exam}
            <button className='text-sm justify-items-end pl-4 text-white' onClick={() => removeExam(index)}>usuń</button>
          </li>
        ))}
      </ul>
      <div className='flex flex-col items-center mt-10'>
        <div><label>Nazwa egzaminu:</label></div>
        <div className='my-2'><input
          type="text"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        /></div>
      </div>
      <div className='flex flex-col items-center mt-2'>
        <button onClick={addExam}>Dodaj</button>
      </div>
      
    </div>
  );
};

export default ExamList;