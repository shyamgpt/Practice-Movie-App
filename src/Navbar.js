import React, { Component } from "react";
import "./index.css"; 
import styled from "styled-components";

const Nav = styled.div`
height: 70px;
background: linear-gradient(170deg, #1bc059, #0d47a1);
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`;

const Title = styled.div`
        font-size: 30px;
        color: #fff;
        fontWeight: 600;
        font-family: 'Times New Roman', Times, serif;
        textTransform: uppercase;
        margin-left: 20px;
        //Hover pseudoClass-->
        &:hover{color: black}
`;

const CartImg = styled.img`
height: 48px;
margin-right: 20px;
`;


const CartIconContainer = styled.div `
        position: relative;
        cursor: pointer;
`;

// this component has already access to props, Hence we can directly use the props-->
const CartCount = styled.div`
// background-color: orange;
//Here Dynamically we are provind the color-->
background-color: ${(props)=>props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
fontSize: 12px;
visibility: ${(props) => props.show? "visible": "hidden"};
`;

class Navbar extends React.Component{
    render(){
        return(
            <>
           
            <Nav>
                <Title>Movie-App</Title>
                <CartIconContainer>
                    <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" style={styles.cartIcon}/>
                   {/* Here we are providing the props--> */}
                    <CartCount color = "yellow" show= {true}>0</CartCount>
                </CartIconContainer>
            </Nav>

            {/* <div style={styles.nav}>
                <div style={styles.title}>Movie-App</div>
                <div style={styles.cartContainer}>
                    <img alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" style={styles.cartIcon}/>
                    <span style={styles.cartCount}>0</span>
                </div>
            </div> */}
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav:{
            width: "100%",
            height: 70,
            background: "cadetblue" ,
            display: "flex",
            justifyContent: "space-between"
    },

    title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20

    },

    cartContainer:{
        position:"relative",
        cursor:"pointer",
    },

    cartIcon:{
        height:48,
        marginRight:20
    },

    cartCount:{
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right:10,
        top: -5,
        fontSize: 12
    }
}