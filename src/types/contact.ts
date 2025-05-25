export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';