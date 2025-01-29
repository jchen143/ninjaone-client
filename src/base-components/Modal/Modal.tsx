import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import Xout from 'src/media/Xout';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  additionalClassNames?: string[];
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, title, children, additionalClassNames } = props 

  return (isOpen ? ReactDOM.createPortal(
    <div className="modal-background">
      <div className={"modal" + (additionalClassNames ? ` ${additionalClassNames.join(" ")}` : "")}>
        <div className="modal__header">
          <h2>{title}</h2>
          <button className="modal__close" onClick={onClose}><Xout /></button>
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>,
    document.body 
    // may need to make above node(document.body) more precise per documentation: 
    // https://blog.logrocket.com/build-modal-with-react-portals/
  ) : null);
};

export default Modal; 