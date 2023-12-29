import {Component} from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies: [
                {
                    id:1,
                    title: 'The Avengers',                  
                    plot:
                      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF2rcm0aZ8JJ7Uwl8wb0owjpsA3Rk3d0Pug&usqp=CAU",
                    rating: '8.0',            
                    price: 99,            
                    stars: 0,
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    id:2,
                    title: 'The Dark Knight',                  
                    plot:
                      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF2rcm0aZ8JJ7Uwl8wb0owjpsA3Rk3d0Pug&usqp=CAU",                  
                    rating: '9.0',            
                    price: 199,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    id:3,
                    title: 'Iron Man',                 
                    plot:
                      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                    poster:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF2rcm0aZ8JJ7Uwl8wb0owjpsA3Rk3d0Pug&usqp=CAU",                  
                    rating: '7.9',            
                    price: 139,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  }
            ]

        }
    }



    // addStars =() =>{

    //     if(this.state.stars >= 5){
    //         return;
    //     }

    //     this.setState({
    //         stars: this.state.stars + 0.5
    //     });  
        
    // }

    // decStars =() =>{
         
    //     if(this.state.stars <= 0){
    //         return;
    //     }

    //     this.setState({
    //         stars: this.state.stars -0.5
    //     });

    
    // }

    // handleFav =() =>{
    //     this.setState({
    //         fav: !this.state.fav

    //     })
    // }
    // handleAddToCart =() =>{
    //     this.setState({
    //         isIncart: !this.state.isIncart

    //     })
    // }

    handleIncStar = (movie) =>{
        // handleIncStar = (movie1) =>{

        const {movies} = this.state;

        const mid = movies.indexOf(movie);
        // const mid = movies.indexOf(movie1);

        if(movies[mid].stars >= 5){
            return;
        }
        movies[mid].stars += 0.5;

        

        this.setState({
            movies: movies
         //aliter--> movies (bcoz key-value pair has the same name)


        })

    }

    handleDecStar = (movie) =>{
      // handleIncStar = (movie1) =>{

      const {movies} = this.state;

      const mid = movies.indexOf(movie);
      // const mid = movies.indexOf(movie1);

      if(movies[mid].stars <= 0){
          return;
      }
      movies[mid].stars -= 0.5;

      

      this.setState({
          movies: movies
       //aliter--> movies (bcoz key-value pair has the same name)


      })

  }

  handleToggleFav = (movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies
    })
  }

  handleToggleCart =(movie) =>{
    const {movies} =this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;

    this.setState({
      movies
    })
  }

    render(){
        // const {title,plot,price,rating,stars,fav,isIncart} = this.state.movies;
        const {movies} = this.state;
        return(
            <>

             {/* <Moviecard title={title}
                        plot= {plot}
                        price= {price}
                        rating= {rating}
                        stars= {stars}
                        fav= {fav}
                        cart={cart}
                        /> */}
           
          {/* <MovieCard movies =(this.state)> */}
            {movies.map((movie)=> <MovieCard movies ={movie} 
                                             addStars ={this.handleIncStar}
                                             decStar = {this.handleDecStar}
                                             ToggleFav={this.handleToggleFav}
                                            ToggleCart= {this.handleToggleCart}
                                            key = {movie.id}
                                             />)}
            </>
        )
    }
}

export default MovieList;