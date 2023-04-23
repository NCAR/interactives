---
layout: frontpage
title: Home
banner-title: Interactive Data Visualizations
banner-description: Experiments in developing informative, data-driven stories accessible directly from the web browser.
---

<html lang="en">
<body>
    <div id='container'>
        <a href="watervapor/index.html">
            <div id='water-vapor' class='card'>
                <img src='public/images/water-vapor.jpg' alt=''>
                <div class='card-text'>
                    <p>Visualizing changes in water vapor in future climates.</p>
                    <a href="watervapor/index.html">Launch</a>
                </div>
            </div>
        </a>
        <a href="windspeed/index.html">
            <div id='wind' class='card'>
                <img src='public/images/wind.jpg' alt=''>
                <div class='card-text'>
                    <p>A look into how surface wind speeds vary over the world.</p>
                    <a href="windspeed/index.html">Launch</a>
                </div>
            </div>
        </a>
    </div>
</body>
</html>

<style>
    .container {
        display: flex;
    }

    .card {
        display: flex;
        background-color: '53565A';
        max-width: 45%;
    }

    .card-text {
        padding: 1em;
    }
</style>