import { FunctionComponent } from "react";

interface AvatarProps {
  name: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ name }) => {
  const teste = () => {
    console.log(name);
  };

  const formatInitials = () => {
    const initials = name
      .split(" ")
      .map((name) => name[0])
      .join(".")
      .toUpperCase();

    return initials;
  };

  return (
    <>
      <div
        onClick={() => teste()}
        className="w-32 h-32 rounded-full bg-secundary flex flex-col justify-center items-center font-bold text-5xl"
      >
        {formatInitials()}
      </div>
    </>
  );
};

export default Avatar;
