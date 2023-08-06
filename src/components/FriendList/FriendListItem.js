import { Span } from "./FirendList.styled"

export const FriendListItem = ({avatar,name,isOnline})=>{
    console.log({ isOnline })
    return <>
        <Span isOnline = {isOnline} className="status"></Span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </>
}