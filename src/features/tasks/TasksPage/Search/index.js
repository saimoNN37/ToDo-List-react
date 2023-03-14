import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input"
import { useQueryParameters, useReplaceQueryParameters } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameters();

    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input 
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
        />
        </Wrapper>
    )
};