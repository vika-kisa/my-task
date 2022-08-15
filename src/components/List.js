const List = ({data, dataKey, onClickElement, name}) => (
    data.length !== 0 ? (
    <div className="list__data">
        {
            data.map (
                (el,i) => (
                <div key={i} onClick={() => onClickElement(el.id)}>
                    {el[dataKey]}
                </div>
                )
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