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
      className='w-1/2 border-1 border-neutral-200/disabled border-l-0 border-r-0'
      isHoverable={isItMe}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardHeader className='justify-center border-b-1 border-b-divider'>
        <span className='text-2xl '>{label}</span>
      </CardHeader>
      <CardBody>
        {contents.map((content: IContent) => (
          <div key={content.title} className='w-full flex justify-start items-start gap-2'>
            <span className='min-w-[20%] font-medium text-neutral-200 text-end'>
              {content.title}:
            </span>
            <span className='text-neutral-200/disabled'>{content.description}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default MeCard;
