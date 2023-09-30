import SingleSocial from "@/components/Social/SingleSocial";
import socialData from "@/components/Social/socialData";

const Social = () => {
  return (
    <>
      <div className="m-auto flex xs:w-full lg:w-6/12">
        {socialData.map((social) => (
          <SingleSocial key={social.id} social={social}></SingleSocial>
        ))}
      </div>
    </>
  );
};

export default Social;
