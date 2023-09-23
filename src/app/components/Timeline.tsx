interface TimelineProps {
  className: string;
  length: number;
}

const Timeline: React.FC<TimelineProps> = ({ className, length }) => {
  const elementIndex = new Array<number>(length - 1);
  const divClassName = `${className}`;

  for (let i = 0; i < elementIndex.length; i++) {
    elementIndex[i] = i + 1;
  }

  return (
    <div className={divClassName}>
      {elementIndex.map((index) => (
        <div className="flex flex-start h-16">
          <img src="/isometric_cube.png"></img>
          <div className="my-auto w-16 h-1 bg-black"></div>
          {index == length - 1 && <img src="/isometric_cube.png"></img>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
