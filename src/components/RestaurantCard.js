import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>
    {
        const {resData}=props;


        const {cloudinaryImageId,name,cuisines,avgRating}= resData?.info;

        // (?.)  -----> It is called OPTIONAL CHAINING, used to handel errors, 
        //  if left side is not present then it doesnt ecxecutes right one also.
        //    Left  ?.  Right
        // insted of this --->  console.log(resData.info.name);  
        // we can write this --->  console.log(name);  
        
        
        console.log("++ Started++");
        console.log(resData.info.availability.opened);
        //console.log(resData.info.badges.imageBadges);
        console.log(resData.info.cloudinaryImageId);
        console.log("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/");
        console.log("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId);
        
        console.log(resData.info.name);
        
        return(
            <div className="res-card" style={styleCard}>
                
                <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL+resData.info.cloudinaryImageId}
                />

                {/* <h3>{props.resName}</h3>    // 1) U can also do this way
                <h4>{props.cuisine}</h4> */}

                {/* <h3>{resName}</h3>          // 2) U can also do this way
                <h4>{cuisine}</h4> */}

               
                {/* <h3>{resData.info.name}</h3>
                <h3>{resData.info.cuisines.join(", ")}</h3>
                <h3>{resData.info.avgRating} Stars</h3>   
                <h3>{resData.info.sla.deliveryTime} Minutes</h3>   */}

                
              

                <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{avgRating} Stars</h3>   
                <h3>{resData.info.sla.deliveryTime} Minutes</h3>  

                

                {/* <h4>4.3 Stars</h4>
                <h4>38 Minutes</h4> */}

            </div>
        )
    }




    const styleCard={
        backgroundColor:"#0f0f0f0"
    } 



    export default RestaurantCard;