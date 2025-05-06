import SingleSocial from "@/components/Social/SingleSocial";
import socialData from "@/components/Social/socialData";

const Social = ({ excludeTitles = [] }) => {
  const filteredSocialData = excludeTitles.length > 0
    ? socialData.filter((social) => !excludeTitles.includes(social.title))
    : socialData;

  return (
    <div className="m-auto flex">
      {filteredSocialData.map((social) => (
        <SingleSocial key={social.id} social={social} />
      ))}
    </div>
  );
};

export default Social;