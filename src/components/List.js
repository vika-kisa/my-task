const List = ({data}) => {
    <div className="list">
        {
            data.map (
                (el,i) => (
                <div key={i}>
                    {el}
                </div>
                )
            )
        }
    </div>  

}


export default List;