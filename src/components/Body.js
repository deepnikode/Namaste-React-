import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import { useState } from "react";

import resList from "../utils/mockData";


const Body=()=>
    {


        // let listOfRestaurant=[];
        const [listOfRestaurants,setListOfRestaurant]=useState(resList);

        
        




                           console.log("Body");



        return(
            <div className="body">

                <div className="filter">
                    <button className="filter-btn" 
                    onClick={   
                                    ()=>{

                                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                                        
                                        setListOfRestaurant(filteredList);

                                        // setListOfRestaurant(
                                        //     listOfRestaurants.filter((res)=>res.info.avgRating>4)
                                        // );



                                        // listOfRestaurant=listOfRestaurant.filter(
                                        //     (res)=>res.info.avgRating>4
                                        // );
                                        // console.log(listOfRestaurant);
                                        }
                            } >Top rated Restaurant</button>
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
                       listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                    // resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)

                    }




                                           
                    

                    
                    
                    

                </div>

            </div>
        )
    }




    




    

    


    export default Body;