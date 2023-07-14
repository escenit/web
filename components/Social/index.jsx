import SingleSocial from "@/components/Social/SingleSocial";
import socialData from "@/components/Social/socialData";

const Social = () => {
    return (
        <>
            <div className="flex m-auto lg:w-6/12 xs:w-full">
                {socialData.map((social) => (
                    <SingleSocial key={social.id} social={social}></SingleSocial>
                ))}
            </div>
        </>
    );
};

export default Social;
