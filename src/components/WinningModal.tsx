import React, { useEffect } from 'react';
import './WinningModal.css';

interface WinningModalProps {
  winner: 'X' | 'O';
  onClose: () => void;
}

const WinningModal: React.FC<WinningModalProps> = ({ winner, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="stars">
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
        </div>
        <h2 className="winner-text">
          Player {winner} Wins!
        </h2>
        <div className="stars">
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
        </div>
      </div>
    </div>
  );
};

export default WinningModal; 