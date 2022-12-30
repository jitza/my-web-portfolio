import myProfile from "../assets/myProfile.jpeg";
import secondProfile from "../assets/secondProfile.jpeg";

const StackProfile = () => {
  return (
    <div className="relative">
      <img
        src={myProfile}
        alt="My Profile"
        className="h-80 absolute right-0 -translate-y-12 z-10"
      />
      <img
        src={myProfile}
        alt="My Profile"
        className="h-80 absolute -translate-y-44 -translate-x-16"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-80 absolute -translate-y-36 -translate-x-8"
      />
      <img
        src={myProfile}
        alt="My Profile"
        className="h-80 absolute -translate-y-28 translate-x-2"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-80 absolute -translate-y-20 translate-x-12"
      />
    </div>
  );
};

export default StackProfile;
