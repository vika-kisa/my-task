const List = ({data,nameElement}) => (
    <div className="list__data">
        {
            data.map (
                (el,i) => (
                <div key={i}>
                    {el[nameElement]}
                </div>
                )
            )
        }
    </div>  

);


export default List;