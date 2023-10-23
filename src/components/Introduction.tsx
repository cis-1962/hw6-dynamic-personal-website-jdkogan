import React, { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIntroduction } from '../features/introductionSlice';
import EditIntroductionForm from './EditIntroductionForm';

function Introduction() {
  const introduction = useSelector(selectIntroduction);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="main">
      <h1>Hey This Is Me!</h1>
      {isEditing ? (
        <EditIntroductionForm
          introduction={introduction}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div>
          <img
            src={introduction.imgUrl}
            alt="Introduction"
            onError={handleImageError}
          />
          <p>{introduction.description}</p>
          <button className="button" type="button" onClick={handleEdit}>
            Edit Introduction
          </button>
        </div>
      )}
    </div>
  );
}

export default Introduction;
