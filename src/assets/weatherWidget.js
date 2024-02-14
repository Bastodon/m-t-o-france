window.weatherWidgetConfig =  window.weatherWidgetConfig || [];

    window.weatherWidgetConfig.push({
        selector:".weatherWidget",
        apiKey:"B86YHNP7VRPEKLTYJTRPBZ4VH", //Sign up for your personal key
        location:"Paris, France", //Enter an address
        unitGroup:"metric", //"us" or "metric"
        forecastDays:3, //how many days forecast to show
        title:"Île de France", //optional title to show in the 
        showTitle:true, 
        showConditions:true
    });
        
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();