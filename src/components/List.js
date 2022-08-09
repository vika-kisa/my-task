const List = ({data}) => (
    <div className="list__data">
        {
            data.map (
                (el,i) => (
                <div key={i}>
                    {el.name}
                </div>
                )
            )
        }
    </div>  

);


export default List;