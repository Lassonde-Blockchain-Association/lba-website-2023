import Image from "next/image";
interface TimelineProps {
  className: string;
  height: number;
  length: number;
}

const Timeline: React.FC<TimelineProps> = ({ className, height, length }) => {
  const elementIndex = new Array<number>(length - 1);
  const divClassName = `${className}`;

  for (let i = 0; i < elementIndex.length; i++) {
    elementIndex[i] = i + 1;
  }

  const cubeClassName = " ";

  return (
    <div className={divClassName}>
      {elementIndex.map((index, count) => (
        <div key={count} className="flex items-center">
          <Image
            className={cubeClassName}
            src="/3D_cube.png"
            alt="isometric_cube"
            height={height}
            width={height}
          ></Image>
          <div key={count} className="my-auto w-20 h-0.5 bg-white"></div>
          {index == length - 1 && (
            <Image
              alt="isometric_cube_light"
              className={cubeClassName}
              src="/3D_cube.png"
              height={height}
              width={height}
            ></Image>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
