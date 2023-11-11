import React from 'react';
import { AiFillInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='bg-slate-300 flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col space-y-2 items-center'>
          <AiFillInstagram size={32} />
          <div className='text-lg'>PrimeFacilitySolutions</div>
        </div>

        <div className='flex flex-col space-y-2 items-center'>
          <AiFillMail size={32} />
          <div className='text-lg'>enquiry@pfsolutions.uk</div>
        </div>

        <div className='flex flex-col space-y-2 items-center'>
          <AiFillPhone size={32} />
          <div className='text-lg'>01159902076</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
