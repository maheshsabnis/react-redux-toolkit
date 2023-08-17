import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentComponent from './modelcontentcomponent';

export default function ModelDialogPortalComponent() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => { alert('dd');setShowModal(true)}}>
        Showing modal using a React portal
      </button>
      {showModal && createPortal(
        <ModalContentComponent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
