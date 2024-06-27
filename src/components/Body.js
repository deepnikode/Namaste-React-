import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import { useEffect, useState } from "react";

import resList from "../utils/mockData";

import Shimmer from "./Shimmer";


const Body=()=>
    {


        // let listOfRestaurant=[];



        // here i am loading the mock data before component rendering.............
        // initial value of listOfRestaurants is resList ie.mockdata
        //const [listOfRestaurants,setListOfRestaurant]=useState(resList);
        
        // here i am not loading the data before component rendering.............
        // initial value of listOfRestaurants is empty array
        const [listOfRestaurants,setListOfRestaurant]=useState([]);
        const [filteredRestaurant,setFilteredRestaurant]=useState([]);

        const [searchText, setSearchText]=useState([]);


        
        console.log("Component Rendering");


        useEffect(()=>{
            console.log("UseEffect Called");
            fetchData();
        } , [] );
        
        
        

        const fetchData = async()=>{
            const swiggyAPI=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const jsonData=await swiggyAPI.json();


            console.log("jsonData");
            console.log(jsonData);
            

            //OPTIONAL CHAINING ( ?. ) 
            setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };
        


        if(listOfRestaurants.length===0)
            {
                return <Shimmer/>;
            }

        

        
         

        return(
            <div className="body">

                <div className="filter">

                    <div className="search">
                        <input type="text" className="search-box" value={searchText} 
                        onChange={
                                (e)=>{
                                        setSearchText(e.target.value); 
                                    }
                                }/>
                        <button 
                        onClick={
                            ()=>{
                                //Filter the Restaurants
                                
                                console.log(searchText);
                                
                                
                                const filteredRestaurant=listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                
                                setFilteredRestaurant(filteredRestaurant);

                                }
                        }       
                        >Search Button</button>
                    </div>

                    <button className="filter-btn" 
                    onClick={   
                                    ()=>{

                                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                                        
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
                       filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                    // resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)

                    }


 

                </div>

            </div>
        )
    }




    




    

    


    export default Body;