import { useState } from "react";

const nets = [1,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87,2,3,56,432,65,76,89,35,25,14,58,87,56,95,87];


const NetworksList = () => {
    const [networks] = useState(nets);

    return (
        <div className="network__list">
            {
                networks.map (
                    (el,index) => (
                    <div key={index}>
                        {el}
                    </div>
                    )
                )
            }
        </div>
    );

}


export default NetworksList;