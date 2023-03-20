@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

/* ----------------------------------------
Resets / Defaults / Common 
-------------------------------------------- */

button{
    all: initial;
    cursor: pointer;
}

html{
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* https://uigradients.com/#NeonLife */
    background: #B3FFAB;
    background: -webkit-linear-gradient(to bottom, #12FFF7, #B3FFAB); 
    background: linear-gradient(to bottom, #12FFF7, #B3FFAB);

}



/* ---------------------------------------
Picture in Picture
------------------------------------------*/

.capture-button{
    width: 20rem;
    height: 5rem;
    padding: 2rem;
    box-shadow: 
        1px 3px 6px rgba(0, 0, 0, 0.5),
        1px 1px 10px rgba(0, 0, 0, 0.2) inset;
    text-align: center;
    font-family: 'Major Mono Display', monospace;
    font-weight: bold;
    font-size: 1.6rem;
    background-color: transparent;
    color: #fff;
    -webkit-filter: url("#filter");
    filter: url("#filter");
    border: solid;
    border-image: linear-gradient(to top, #ece9e6d5, #ffffffbd) 5 / .5rem;
    border-image-outset: 0rem;
    border-radius: 5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    transition: all .3s;
}

.capture-button:hover{
    border-image: linear-gradient(to bottom, #ece9e641, #ffffff54) 5 / .5rem;
    border-image-outset: 2rem;
    text-shadow: 1px 1px 10px #B3FFAB;
    border-radius: 1rem;
    box-shadow: 
        1px 3px 6px rgba(0, 0, 0, 0.8),
        1px 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.capture-button:active{
    transform: translateY(3px);
    box-shadow: 
    1px 3px 6px rgba(0, 0, 0, 0.8),
    1px 5px 15px rgba(0, 0, 0, 0.7) inset;
}


.show-stream{
    width: 4rem;
    display: none;
}

.show-stream img{
    width: 100%;
    filter: invert(2) drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3));
    transition: all 0.1s;
}

.show-stream img:hover{
    filter: invert(2) drop-shadow(1px 1px 4px #B3FFAB);
}

/* [hidden]{
    display: none;
} */

/* ---------------------------------------
Media Query
------------------------------------------*/

@media screen and (max-width: 850px){
    body{
        flex-direction: column;
    }
}


@media screen and (max-width: 500px) {
    .capture-button{
        width: 15rem;
        padding: 1rem;
    }
}
