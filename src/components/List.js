const List = ({data, dataKey}) => (
    <div className="list__data">
        {
            data.map (
                (el,i) => (
                <div key={i}>
                    {el[dataKey]}
                </div>
                )
            )
        }
    </div>  

);


export default List;