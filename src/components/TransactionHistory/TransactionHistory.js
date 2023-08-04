import { TransactionTd } from "./TransactionTd"
import { Container } from 'components/profile/Profile.styled'
export const TransactionHistory = ({items})=>{
  return (
    <Container>
      <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
    {items.map(item =>
    <tr key={item.id}>
        <TransactionTd item={item}/>
    </tr>
       
       
    )}
    </tbody>
    </table>
      </Container>)
    
  
  
}