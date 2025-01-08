import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

const Back = () => {
  const router = useRouter();

  return (
    <IoIosArrowBack
      size={18}
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default Back;
