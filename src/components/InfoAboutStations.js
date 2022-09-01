const InfoAboutStations = ({data, name}) => (
    name !== '' ? (
        <div className="info__stations">
            {`${name}` + ' - ' + `${data.length}`}
            {data.length > 1 ? ` stations` : ` station`}
        </div>
    ) : ''
);


export default InfoAboutStations;