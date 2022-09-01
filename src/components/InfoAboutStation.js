
const InfoAboutStation = ({data, name}) => {
    return (
    <div className="info__stations">
        {data.length}
        {data.length > 1 ? ` stations` : ` station`}
    </div>
    );
};


export default InfoAboutStation;