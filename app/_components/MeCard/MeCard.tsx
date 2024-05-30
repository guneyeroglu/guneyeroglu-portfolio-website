import { FC } from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { IContent } from '@global/interfaces';

interface IProps {
  header: string;
  contents: IContent[];
}

const MeCard: FC<IProps> = ({ header, contents }) => {
  const titles: string[] = contents.map((content: IContent) => content.title);
  const descriptions: string[] = contents.map((content: IContent) => content.description);

  return (
    <Card className='border-1 border-neutral-200/disabled border-l-0 border-r-0' isHoverable>
      <CardHeader className='justify-center border-b-1 border-b-divider'>
        <span className='text-2xl '>{header}</span>
      </CardHeader>
      <CardBody className='flex flex-row justify-start items-center gap-2'>
        <div className='flex flex-col justify-start items-end'>
          {titles.map((title: string) => (
            <span key={title} className='font-medium text-neutral-200'>
              {title}:
            </span>
          ))}
        </div>
        <div className='flex flex-col justify-start items-start'>
          {descriptions.map((description: string) => (
            <span key={description} className='text-neutral-200/disabled'>
              {description}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MeCard;
