import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={100}
        width={100}
        color="rgba(63, 81, 181, 0.6)"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgba(63, 81, 181, 0.6)"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </LoaderWrapper>
  );
};

export default Loader;
