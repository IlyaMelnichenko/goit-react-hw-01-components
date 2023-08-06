import { Span } from "./FirendList.styled"

export const FriendListItem = ({avatar,name,isonline})=>{
    console.log(isonline)
    return <>
        <Span isonline = {isonline} className="status"></Span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </>
}