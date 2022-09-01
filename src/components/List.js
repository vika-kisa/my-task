import NonActiveLike from '../likeNonActive.svg';
import ActiveLike from '../likeActive.svg';

const List = ({data, onClickElement, name, likes}) => (
    data.length !== 0 ? (
    <div className="list__data">
        {
            data.map (
                (el,i) => {
                return (
                    <div key={i} onClick={() => onClickElement(el)}>
                        {name === 'Stations' && (
                            <img 
                                src={likes.includes(el.id) ? ActiveLike : NonActiveLike} 
                                className="like"
                                alt='like'>
                            </img> 
                        )} 
                        {el.name} 
                    </div>
                )}
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