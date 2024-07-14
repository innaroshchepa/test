import UsersSettingsForm from '../../UsersSettingsForm/UsersSettingsForm.jsx';
import css from './userSettingsModal.module.css';
import React, { useState } from 'react';

const UserSettingsModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleUpdate = data => {};
  return (
    <div>
      <h2>Setting</h2>
      <button onClick={handleOpenModal}>Setting</button>
      <UsersSettingsForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserSettingsModal;
