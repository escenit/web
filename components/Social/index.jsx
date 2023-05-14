import SingleSocial from "@/components/Social/SingleSocial";
import socialData from "@/components/Social/socialData";

const Social = () => {
    return (
        <>
            <div className="flex m-auto w-fit">
                {socialData.map((social) => (
                    <SingleSocial key={social.id} social={social}></SingleSocial>
                ))}
            </div>
        </>
    );
};

export default Social;
