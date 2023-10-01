import Image from "next/image";
interface TimelineProps {
  className: string;
  heightClassName: string;
  length: number;
}

const Timeline: React.FC<TimelineProps> = ({
  className,
  heightClassName,
  length,
}) => {
  const elementIndex = new Array<number>(length - 1);
  const divClassName = `${className}`;

  for (let i = 0; i < elementIndex.length; i++) {
    elementIndex[i] = i + 1;
  }

  return (
    <div className={divClassName}>
      {elementIndex.map((index, count) => (
        <div key={count} className="flex items-center h-20">
          <img className={heightClassName} src="/isometric_cube.png"></img>
          <div className="my-auto w-20 h-1 bg-black"></div>
          {index == length - 1 && (
            <Image
              alt="isometric_cube"
              className={heightClassName}
              src="/isometric_cube.png"
              width={10}
              height={10}
            ></Image>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
