import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ContactFormData, SubmitStatus } from '../types/contact';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  description: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: formData
      });

      if (error) {
        throw new Error(error.message);
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleSubmit,
    handleChange
  };
};