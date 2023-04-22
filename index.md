---
layout: frontpage
title: Home
banner-title: Interactive Data Visualizations
banner-description: Experiments in developing informative, data-driven stories accessible directly from the web browser.
---

<html lang="en">
<body>
    <div id='container'>
        <div id='water-vapor' class='card'>
            <img src='public/images/water-vapor.jpg' alt=''>
            <div class='card-text'>
                <p>Visualizing changes in water vapor in future climates.</p>
                <a href="interactives/watervapor/index.html">Launch</a>
            </div>
        </div>
        <div id='wind' class='card'>
            <img src='public/images/wind.jpg' alt=''>
            <div class='card-text'>
                <p>A look into how surface wind speeds vary over the world.</p>
                <a href="interactives/windspeed/index.html">Launch</a>
            </div>
        </div>
    </div>
</body>
</html>

<style>
    .card {
        display: flex;
        background-color: '53565A';
        max-width: 50%;
    }

    .card-text {
        padding: 0.5em;
    }
</style>