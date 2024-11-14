import CheckIcon from "@/components/Common/CheckIcon";

const List = ({ text }: { text: string }) => {
  return (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color dark:text-white/75">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <CheckIcon />
      </span>
      {text}
    </p>
  );
};

export default List;
