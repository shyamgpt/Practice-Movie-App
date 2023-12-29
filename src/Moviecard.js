import { Component } from "react";
import "./index.css";

class MovieCard extends Component{


    render(){

        const {movies, addStars, decStar, ToggleFav, ToggleCart} = this.props;

        const{title,plot, price, rating, stars,fav,isInCart} = this.props.movies; 
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                    <img alt="poster" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF2rcm0aZ8JJ7Uwl8wb0owjpsA3Rk3d0Pug&usqp=CAU"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" 
                                alt="decrase" 
                                src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                                onClick={()=>{decStar(movies)}}/>
                                
                                <img className="stars" 
                                alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                 // onClick={() => {this.props.addStars(this.props.movies)}}
                                    onClick={() => {addStars(movies)}}

                                />

                                <span className="starCount">{stars}</span>
                            </div>

                            {fav? <button className="unfavourite-btn" onClick={() => {ToggleFav(movies)}}>Un-favourite</button>
                            :<button className="favourite-btn" onClick={() => {ToggleFav(movies)}}>Favourite</button>}

                            {isInCart? <button className="cart-btn-Remv" onClick={() => {ToggleCart(movies)}}> Remove cart</button>
                            : <button className="cart-btn" onClick={() => {ToggleCart(movies)}}> Add to cart</button>}

                            

                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MovieCard;