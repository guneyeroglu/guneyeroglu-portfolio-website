import { FC } from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

import { contents, myMail } from './config';
import { IContent } from '@global/interfaces';

const ContactPage: FC = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Card className='w-[320px] border-t-1.5 border-t-success-500 max-sm:w-auto'>
        <CardHeader className='justify-center border-b-1.5 border-b-success-500'>
          <span className='text-3xl text-success-50 text-center max-md:text-xl'>Contact</span>
        </CardHeader>
        <CardBody className='max-sm: gap-2'>
          {contents.map((content: IContent) => (
            <div
              key={content.title}
              className='flex justify-start items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0'
            >
              <span className='min-w-[25%] text-success-50 text-end max-sm:text-start max-xxs:text-sm'>
                {content.title}:
              </span>
              <span className='text-neutral-400 break-all max-xxs:text-sm'>
                {content.description}
              </span>
            </div>
          ))}
        </CardBody>
        <CardFooter className='p-0 bg-success-500 hover:bg-success-700/hover'>
          <a
            href={`mailto:${myMail}`}
            className='w-full flex justify-center items-center py-2 text-success-50 max-xxs:text-sm'
          >
            Mail Me
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactPage;
