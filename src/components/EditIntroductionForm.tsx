import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIntroduction } from '../features/introductionSlice';
import { IntroductionState } from '../types/types';

interface EditIntroductionFormProps {
  introduction: IntroductionState;
  onCancel: () => void;
}

function EditIntroductionForm({
  introduction,
  onCancel,
}: EditIntroductionFormProps) {
  const dispatch = useDispatch();
  const [editedIntroduction, setEditedIntroduction] = useState(introduction);

  const handleSave = () => {
    dispatch(updateIntroduction(editedIntroduction));
    onCancel();
  };

  return (
    <div className="main">
      <h2>Edit Introduction</h2>
      <div>
        <label className="label">Description:</label>
        <textarea
          className="textarea"
          id="description"
          value={editedIntroduction.description}
          onChange={(e) =>
            setEditedIntroduction({
              ...editedIntroduction,
              description: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label className="label" htmlFor="imgUrl">
          Image URL:
        </label>
        <input
          type="text"
          className="input"
          id="imgUrl"
          value={editedIntroduction.imgUrl}
          onChange={(e) =>
            setEditedIntroduction({
              ...editedIntroduction,
              imgUrl: e.target.value,
            })
          }
        />
      </div>
      <button type="button" className="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" className="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

export default EditIntroductionForm;
