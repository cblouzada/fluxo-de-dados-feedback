import {TitleHeader, HeaderProfile, ImgProfile, NamePhoto} from './styled'

export const Header = (props) => {
    return(
        <>
        <TitleHeader>
            Instagram
        </TitleHeader>
        <HeaderProfile>
                <NamePhoto>{props.object.name}</NamePhoto>
                <ImgProfile src={props.object.profilePic}/>
        </HeaderProfile>
        </>
    )
}