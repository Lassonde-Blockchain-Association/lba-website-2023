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

  const cubeClassName =
    heightClassName + " hue-rotate-90 saturate-50 brightness-200";

  return (
    <div className={divClassName}>
      {elementIndex.map((index, count) => (
        <div key={count} className="flex items-center h-20">
          <Image
            className={cubeClassName}
            src="/3D_cube.png"
            alt="isometric_cube"
            width={75}
            height={75}
          ></Image>
          <div className="my-auto w-20 h-1 bg-white"></div>
          {index == length - 1 && (
            <Image
              alt="isometric_cube_light"
              className={cubeClassName}
              src="/3D_cube.png"
              width={75}
              height={75}
            ></Image>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
