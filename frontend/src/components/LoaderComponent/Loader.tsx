import { Spinner } from "reactstrap";
import { LoaderContainer } from "./styles";

const Loader: React.FC = () => {
    return (
        <LoaderContainer>
            <Spinner />
        </LoaderContainer>
    );
}

export default Loader;