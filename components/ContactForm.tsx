import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const ContactForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [datePickerReady, setDatePickerReady] = useState(false);
  const t = useTranslations('contact');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setStartDate(new Date());
      setDatePickerReady(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FieldValues> = ({ firstName, lastName, message, phone, email }) => {
    emailjs
      .send(
        'gmail',
        'template_1G20d3s3',
        {
          message_html: message,
          start_date: startDate?.toLocaleDateString('pl-PL') ?? '',
          from_firstName: firstName,
          from_lastName: lastName,
          from_phone: phone,
          reply_to: email,
        },
        process.env.NEXT_PUBLIC_EMAILJS,
      )
      .then(() => {
        toast.success(t('alertSuccess'));
        reset();
      })
      .catch(() => {
        toast.error(t('alertError'));
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow overflow-hidden sm:rounded-md bg-gray-300'>
        <div className='px-4 py-5 sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
                {t('formName')}
              </label>
              <input
                type='text'
                {...register('firstName', { required: true })}
                id='firstName'
                className={`mt-1 ${
                  errors.firstName
                    ? 'focus:border-red-400 focus:ring-red-400'
                    : 'focus:border-indigo-500 focus:ring-indigo-500'
                }  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
                {t('formLastName')}
              </label>
              <input
                type='text'
                {...register('lastName', { required: true })}
                id='lastName'
                className={`mt-1 ${
                  errors.lastName
                    ? 'focus:border-red-400 focus:ring-red-400'
                    : 'focus:border-indigo-500 focus:ring-indigo-500'
                } block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
              />
            </div>
            <div className='col-span-6 sm:col-span-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                {...register('email', {
                  required: true,
                  validate: {
                    matchPattern: (v) => /^[^\s@]+@(?:[^\s@.]+\.)+[^\s@.]{2,}$/i.test(v),
                  },
                })}
                id='email'
                className={`mt-1 ${
                  errors.email
                    ? 'focus:border-red-400 focus:ring-red-400'
                    : 'focus:border-indigo-500 focus:ring-indigo-500'
                } block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
              />
            </div>
            <div className='col-span-6 sm:col-span-4'>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                {t('formPhone')}
              </label>
              <input
                type='tel'
                {...register('phone', {
                  required: true,
                  validate: (v) => /^\+?\d{7,15}$/.test(v.replace(/[\s().-]/g, '')),
                })}
                id='phone'
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                  errors.phone
                    ? 'focus:border-red-400 focus:ring-red-400'
                    : 'focus:border-indigo-500 focus:ring-indigo-500'
                }`}
              />
            </div>
            <div className='col-span-6'>
              <label htmlFor='transferDate' className='block text-sm font-medium text-gray-700'>
                {t('formDate')}
              </label>
              {datePickerReady ? (
                <DatePicker
                  id='transferDate'
                  selected={startDate}
                  onChange={(date: Date | null) => {
                    if (date) setStartDate(date);
                  }}
                  className='mt-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md shadow-sm'
                />
              ) : (
                <input
                  id='transferDate'
                  disabled
                  aria-label={t('formDate')}
                  className='mt-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md shadow-sm'
                />
              )}
            </div>
            <div className='col-span-6'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                {t('formMessage')}
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  {...register('message', { required: true })}
                  rows={3}
                  className={`resize-none shadow-sm ${
                    errors.message
                      ? 'focus:border-red-400 focus:ring-red-400'
                      : 'focus:border-indigo-500 focus:ring-indigo-500'
                  } mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`}
                  placeholder={t('formTextarea')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-3 text-right sm:px-6'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600 hover:bg-indigo-700'
          >
            {t('formBtn')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
