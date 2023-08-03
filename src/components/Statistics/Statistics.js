import { Statisticitem } from "components/Statistics/StatisticItem"

export const Statistics = ({stats,tittle})=>{
    
    
    return (<section className="statistics">
    <h2 className="title">{tittle}</h2>
    <ul className="stat-list">
     {stats.map(stat=>(
         <li className="item" key = {stat.id}>
            <Statisticitem stats = {stat}/>
         </li>
     ))}
    </ul>
  </section>);
};