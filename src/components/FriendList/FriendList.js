import { Item } from "./FirendList.styled"
import { FriendListItem } from "./FriendListItem"
import { Container } from "components/profile/Profile.styled"
export const  FriendList = ({friends})=>{
    return (
        <Container>
        <ul className="friend-list">
            {friends.map(friend=>
            <Item className="item" key={friend.id}>
            <FriendListItem avatar = {friend.avatar} name = {friend.name} isOnline={friend.isOnline}/>
            </Item>
            
            )
            }
            </ul>
        </Container>
    )

}