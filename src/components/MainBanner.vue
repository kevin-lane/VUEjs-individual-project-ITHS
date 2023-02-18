<template>
  <div id="main-banner">
    <h2 id="banner-heading">Welcome to Kelans Store</h2>
    <p id="banner-slogan">Some fun and needy stuff for you</p>
    <button type="button" id="collection-button" class="btn btn-outline-dark">View Collection</button>
  </div>
</template>

<style scoped>
  #main-banner{
    top: 1rem;
    margin: auto;
    width: 100%;
    height: 26rem;
    box-shadow: inset 0rem 10rem 20rem 20px darkslateblue;
    background-image:url('../assets/banner_img_640_480.jpg');
    background-repeat: no-repeat;
    color: wheat;
  }
  #banner-heading{
    text-align: center;
    position: absolute;
    right: 14rem;
    top: 4rem;
    font-family: math;
    font-style: italic;
    text-transform: uppercase;
  }
  #banner-slogan{
    text-align: center;
    position: absolute;
    right: 17rem;
    top: 10rem;
    font-family: emoji;
    text-transform: uppercase;
  }
  #collection-button{
    position: absolute;
    bottom: 0em;
    left: 0rem;
    font-weight: 600;
    font-family:monospace;
    font-style: italic;
    border: 2px solid green;
    border-bottom: none;
    border-left: none;
    color: black;
  }
  #collection-button:hover {
    background-color: rgba(0, 255, 0, 0.3);
    border: 2px solid rgba(0, 255, 0, 0.3);
    border-bottom: none;
    border-left: none;
    color: white;
  }
</style>
