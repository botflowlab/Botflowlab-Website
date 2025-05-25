import React from 'react';
import { SubmitStatus } from '../../types/contact';

interface ContactFormStatusProps {
  status: SubmitStatus;
  errorMessage?: string;
}

export const ContactFormStatus: React.FC<ContactFormStatusProps> = ({ status, errorMessage }) => {
  if (status === 'idle') return null;

  return (
    <>
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
          {errorMessage || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'}
        </div>
      )}
    </>
  );
};