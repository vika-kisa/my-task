import NonActiveLike from '../likeNonActive.svg';
import ActiveLike from '../likeActive.svg';

const List = ({data, dataKey, onClickElement, name}) => (
    data.length !== 0 ? (
    <div className="list__data">
        {
            data.map (
                (el,i) => {
                let isActive = false; 
                return (
                <div key={i} onClick={() => onClickElement(el.id) }>
                    {name === 'Stations' && (
                    <img 
                    src={isActive ? ActiveLike : NonActiveLike} 
                    className="like"
                    onClick={() => isActive = !isActive}>
                    </img> 
                    )} 
                    {el[dataKey]} 
                </div>
                )
                }
            )
        }
    </div>  
    ) : 
    <div className="loading">
        {
            `${name} are loading......`
        }
    </div>
);


export default List;