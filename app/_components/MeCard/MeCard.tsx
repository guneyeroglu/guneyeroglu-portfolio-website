'use client';

import { FC } from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

import { IContent, IMeCard } from '@global/interfaces';
import { useMeStore } from '@store';

interface IProps extends IMeCard {}

const MeCard: FC<IProps> = ({ label, contents }) => {
  const { setHover } = useMeStore();
  const isItMe: boolean = label === 'Me';

  const onMouseEnter = (): void => setHover(isItMe);
  const onMouseLeave = (): void => setHover(false);

  return (
    <Card
      className='w-1/2 border-1 border-neutral-200/disabled border-l-0 border-r-0 max-lg:w-2/3 max-md:w-full'
      isHoverable={isItMe}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardHeader className='justify-center border-b-1 border-b-divider'>
        <span className='text-2xl '>{label}</span>
      </CardHeader>
      <CardBody className='max-md:flex-row max-md:flex-wrap max-md:gap-y-2'>
        {contents.map((content: IContent) => (
          <div
            key={content.title}
            className='w-full flex justify-start items-start gap-2 max-sm:flex-col max-md:flex-1 max-md:basis-[calc(50%_-_2rem)] max-md:max-w-[50%] max-md:p-1 max-sm:max-w-full max-sm:basis-full'
          >
            <span className='min-w-[20%] font-medium text-neutral-200 text-end max-md:text-start max-md:min-w-fit'>
              {`${content.title}:`}
            </span>
            <span className='text-neutral-200/disabled break-words'>{content.description}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default MeCard;
