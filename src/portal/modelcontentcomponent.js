export default function ModalContentComponent({ onClose }) {
    return (
      <div className="modaldlg">
        <div>I'm a modal dialog box</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  