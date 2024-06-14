import { FunctionComponent } from "react";

interface UserDefaultAvatarProps {
  name: string;
  mini?: boolean;
}

const UserDefaultAvatar: FunctionComponent<UserDefaultAvatarProps> = ({
  name,
  mini,
}) => {
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
      <div className="w-32 h-32 rounded-full bg-grayDefault flex flex-col justify-center items-center ">
        {mini ? (
          <p className="font-bold text-lg">{formatInitials()}</p>
        ) : (
          <p className="font-bold text-5xl">{formatInitials()}</p>
        )}
      </div>
    </>
  );
};

export default UserDefaultAvatar;
