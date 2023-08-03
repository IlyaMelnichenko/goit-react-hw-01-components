export const Statisticitem = ({stats})=>{
    
 return (
    <div>
        <span className="label">{stats.label}</span>
        <span className="percentage">{stats.percentage}%</span>
    </div>
 
        
);
};