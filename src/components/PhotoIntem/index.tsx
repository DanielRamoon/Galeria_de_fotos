import * as C from './styles';

type Props = {
    url: string;
    name: string;
}
/*Carregar as imagens no App via props */
export const PhotoItem = ({url, name}: Props) =>{
    return(
        <C.Container>
            <img src={url} alt= {name}/>
            {name}
        </C.Container>
    )
}