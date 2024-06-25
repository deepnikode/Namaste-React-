import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";




const Body=()=>
    {
        console.log("Body");

        return(
            <div className="body">

                <div className="search">
                    Search
                </div>

                <div className="res-container">
                           
                    {/* RestaurantCard - I have declared the container above */}
                    
                    {/* <RestaurantCard resData={resList[1]} />
                    <RestaurantCard resData={resList[2]} />
                    <RestaurantCard resData={resList[3]} />
                    <RestaurantCard resData={resList[4]} />
                    <RestaurantCard resData={resList[5]} />
                    <RestaurantCard resData={resList[6]} />
                    <RestaurantCard resData={resList[7]} /> */}


                    {/* Instead of this ^ i have used map to itterate the data.  */}

                    {
                      resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                    }




                                           
                    

                    
                    
                    

                </div>

            </div>
        )
    }




    




    

    


    export default Body;