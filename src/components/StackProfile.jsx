import MyProfile from "../assets/MyProfile.jpeg";
import secondProfile from "../assets/secondProfile.jpeg";

const StackProfile = () => {
  return (
    <div className="flex justify-center absolute top-56">
      <img
        src={MyProfile}
        alt="My Profile"
        className="h-96 relative translate-y-36 z-10"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-96 absolute -translate-y-32 -translate-x-12"
      />
      <img
        src={MyProfile}
        alt="My Profile"
        className="h-96 absolute -translate-y-28 -translate-x-24"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-96 absolute -translate-y-20 -translate-x-32"
      />
      <img
        src={MyProfile}
        alt="My Profile"
        className="h-96 absolute -translate-y-12 -translate-x-40"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-96 absolute translate-y-0 -translate-x-32"
      />
      <img
        src={MyProfile}
        alt="My Profile"
        className="h-96 absolute translate-y-12 -translate-x-24"
      />
      <img
        src={secondProfile}
        alt="My Profile"
        className="h-96 absolute translate-y-24 -translate-x-12"
      />
    </div>
  );
};

export default StackProfile;
