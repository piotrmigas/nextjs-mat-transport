import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAlert } from 'react-alert';
import { useTranslation } from 'next-i18next';
import emailjs, { init } from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

type Inputs = {
  firstName: string;
  lastName: string;
  message: string;
  phone: number;
  email: string;
};

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { t } = useTranslation('common');

  init(process.env.NEXT_PUBLIC_EMAILJS as string);

  const alert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = ({ firstName, lastName, message, phone, email }) => {
    emailjs
      .send('gmail', 'template_1G20d3s3', {
        message_html: message,
        start_date: startDate.toLocaleDateString('pl-PL'),
        from_firstName: firstName,
        from_lastName: lastName,
        from_phone: phone,
        reply_to: email,
      })
      .then(() => {
        alert.success(t`contact.alertSuccess`);
        reset();
      })
      .catch(() => {
        alert.error(t`contact.alertError`);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow overflow-hidden sm:rounded-md bg-gray-300'>
        <div className='px-4 py-5 sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
                {t`contact.formName`}
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
                {t`contact.formLastName`}
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
                type='text'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: '',
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
                {t`contact.formPhone`}
              </label>
              <input
                type='number'
                {...register('phone')}
                id='phone'
                min='0'
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>
            <div className='col-span-6'>
              <label htmlFor='transferDate' className='block text-sm font-medium text-gray-700'>
                {t`contact.formDate`}
              </label>
              <DatePicker
                id='transferDate'
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className='mt-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div className='col-span-6'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                {t`contact.formMessage`}
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
                  placeholder={t`contact.formTextarea`}
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
            {t`contact.formBtn`}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
