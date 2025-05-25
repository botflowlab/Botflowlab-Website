import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedServiceButton } from './AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';

export const TrackingButton: React.FC<{ isVisible?: boolean }> = ({ isVisible = true }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <div className="flex flex-col items-center">
      <div onClick={handleClick}>
        <AnimatedServiceButton isVisible={isVisible} buttonText="Comenzar proyecto" />
      </div>
    </div>
  );
};