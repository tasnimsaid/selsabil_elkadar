
var matlob;
var  vista;

var fajrTime;

var sunsetTime;
var pirates;
var cinqua;
var tasnimsaid;
var safe;
var meth;
var latitude, longitude;

var manos;
var manos1;
var manos2;
var manos3;
var manos4;
var manos5;
var forday12, day12, month12, year12, manos ;






function countWord() {

  let text = document.getElementById("text").value;


  
    
  
    
  
  let Counter1 = 0 ;
  let Counter2 = 0 ;
  let Counter3 = 0 ;
  let Counter4 = 0 ;
  
   let Counter5 = 0 ;
   let Counter6 = 0 ;
  let Counter7 = 0 ;
  let Counter8 = 0 ;
  let Counter9 = 0 ;
  let Counter10 = 0 ;
  
  let Counter11 = 0 ;
  let Counter12 = 0 ;
  let Counter13 = 0 ;
  let Counter14 = 0 ;
  let Counter15 = 0 ;
  let Counter16 = 0 ;
  let Counter17 = 0 ;
  let Counter18 = 0 ;
  let Counter19 = 0 ;
  let Counter20 = 0 ;
  let Counter21 = 0 ;
  let Counter22 = 0 ;
  let Counter23 = 0 ;
  let Counter24 = 0 ;
  let Counter25 = 0 ;
  let Counter26 = 0 ;
  let Counter27 = 0 ;
  let Counter28 = 0 ;
  // let Counter29 = 0 ;
  
  
  
  
  
  
  
  
  
  
  

   
  let alif = ['ا','أ','إ','آ'];

  let laa = ['ل'];
  let haa = ['ح'];
  let mim = ['م'];
  let dal = ['د'];
  let haae = ['ه' ,'ة'];
  let raa = ['ر'];
  let baa = ['ب'];
  let ine = ['ع'];
  let yaa = ['ي','ى','ئ'];
   let noon = ['ن'];
  let kaf = ['ك'];
  let ouaou = ['و','ؤ'];
  let sin = ['س'];
  let taa = ['ت'];
  let saad = ['ص'];
  let ttae = ['ط'];
  let ppaf = ['ق'];
  let ddal = ['ذ'];
  let gaa = ['غ'];
  let daa = ['ض'];
  let faa = ['ف'];
  let zay = ['ز'];
  let kha = ['خ'];
  let chine = ['ش'];
  let ddda = ['ظ'];
  let jim = ['ج'];
  let ttta = ['ث'];
  

  //




  //
  
  
  for(ch of text) {
  
    text =text.trim();
  
  let words = text.split(" ").length ;

  
 
    
 document.getElementById("best4").innerHTML=words;

  
   if (alif.includes(ch)){
      Counter1++
   }
   if (baa.includes(ch)){
      Counter2++
   }
  
   if (jim.includes(ch)){
     Counter3++
  }
  
  if (dal.includes(ch)){
     Counter4++
     
  }
  
  if (haae.includes(ch)){
     Counter5++
  }
  
  if (ouaou.includes(ch)){
     Counter6++
  }
  
  
  if (zay.includes(ch)){
     Counter7++
  }
  if (haa.includes(ch)){
     Counter8++
  }
  if (ttae.includes(ch)){
     Counter9++
  }
  if (yaa.includes(ch)){
     Counter10++
  }
  
  if (kaf.includes(ch)){
     Counter11++
  }
  
  
  if (laa.includes(ch)){
     Counter12++
  }
  
  
  if (mim.includes(ch)){
     Counter13++
  }
  
  
  
  if (noon.includes(ch)){
     Counter14++
  }
  
  
  if (sin.includes(ch)){
     Counter15++
  }
  
  
  if (ine.includes(ch)){
     Counter16++
  }
  
  
  if (faa.includes(ch)){
     Counter17++
  }
  
  
  if (saad.includes(ch)){
     Counter18++
  }
  
  
  if (ppaf.includes(ch)){
     Counter19++
  }
  
  
  if (raa.includes(ch)){
     Counter20++
  }
  
  
  if (chine.includes(ch)){
     Counter21++
  }
  
  
  if (taa.includes(ch)){
     Counter22++
  }
  
  
  if (ttta.includes(ch)){
     Counter23++
  }
  
  
  if (kha.includes(ch)){
     Counter24++
  }
  
  
  if (ddal.includes(ch)){
     Counter25++
  }
  
  
  if (daa.includes(ch)){
     Counter26++
  }
  
  
  if (ddda.includes(ch)){
     Counter27++
  }
  
  
  if (gaa.includes(ch)){
     Counter28++
  }

 
  
 

  
  
  
  }

  
  

  
  document.getElementById("text").addEventListener("keyup",countWord);
//   document.getElementById("mano").innerHTML = text;
  
  
  document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000  ;
  
  document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
  
 
 
 
  matlob =parseInt (Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 ) ;
 console.log(matlob);

 a = Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 ;

 


}





  // Get the current location from the browser
  function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  // Create a map and add a tile layer
  async function createMap() {
    // Get the latitude and longitude from the location object
    let location = await getLocation();
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    // Log the coordinates to the console
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Create a Leaflet map object and set the view to the current coordinates
    let map = L.map('map').setView([latitude, longitude], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="^5^">OpenStreetMap</a> contributors, <a href="^6^">CC-BY-SA</a>, Imagery © <a href="^7^">CloudMade</a>',
      maxZoom: 18
    }).addTo(map);

    return map;

  }

  // Add a custom marker to the map
  function addMarker(map) {
    // Use a local image file as a custom marker icon in Leaflet.js
    let customIcon = L.icon({
      iconUrl: './customicon.png', // The relative URL of the image file
      iconSize: [50, 50], // The size of the icon
      iconAnchor: [25, 50], // The point of the icon which will correspond to the marker's location
      popupAnchor: [0, -50] // The point from which the popup should open relative to the iconAnchor
    });

    // Add a marker with the custom icon to the map
    L.marker(map.getCenter(), {icon: customIcon}).addTo(map)
      .bindPopup('This is your location.')
      .openPopup();
  }

  // Call the functions to create and update the map
  createMap().then(map => {
    addMarker(map);
  });

















  var livemap;
  livemap = navigator.geolocation.watchPosition(function(position) {
    // Get the latitude and longitude
    latitude = position.coords.latitude;
     longitude = position.coords.longitude;
     getPrayerTimes1();
    // Print the length and width by hand
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
    
          // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(position);
       // Display latitude and longitude on the web page
       document.getElementById("latitude").innerHTML = latitude;
       document.getElementById("longitude").innerHTML = longitude;
  
     // document.getElementById("timezone").innerHTML = timezone;
       // Call getPrayerTimes function to get prayer times for the user's location
       //
  
      // document.getElementById("myposition").innerHTML = ` <iframe width="300px" height="250px" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&;layer=mapnik&marker=${longitude},${latitude}&marker-icon=./map-marker-free-download-png.webp/marker.png" ></iframe> `;
      
  
       //
     
     
  
    // Enter the IP
    var url = "https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude;
  
    // Convert the XML data to JSON
    var xhr = new XMLHttpRequest();
    let response;
    
    function loadXml(){
      xhr.onreadystatechange = function (){
      if (this.status === 200 && this.readyState==4 ) {
        response = this.responseXML.documentElement;
      //   var json = new DOMParser().parseFromString(xml, "text/xml").documentElement.textContent;
      console.log(response);
        // Type the data on the console
  //       
  document.getElementById("residential").innerHTML = response.getElementsByTagName("residential")[0].childNodes[0].nodeValue;
  document.getElementById("city_district").innerHTML = response.getElementsByTagName("city_district")[0].childNodes[0].nodeValue;
  document.getElementById("town").innerHTML = response.getElementsByTagName("town")[0].childNodes[0].nodeValue;
  document.getElementById("state").innerHTML = response.getElementsByTagName("state")[0].childNodes[0].nodeValue;
  document.getElementById("ISO3166").innerHTML = response.getElementsByTagName("ISO3166-2-lvl4")[0].childNodes[0].nodeValue;
  document.getElementById("postcode").innerHTML = response.getElementsByTagName("postcode")[0].childNodes[0].nodeValue;
  document.getElementById("country").innerHTML = response.getElementsByTagName("country")[0].childNodes[0].nodeValue;
  document.getElementById("country_code").innerHTML = response.getElementsByTagName("country_code")[0].childNodes[0].nodeValue;
  document.getElementById("result").innerHTML = response.getElementsByTagName("result")[0].childNodes[0].nodeValue;
  
  
  
      }
    }
    };
    xhr.open("GET", "https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude ,true );
    xhr.send();
    loadXml()
  });
  
  
  
      // A function to fetch and print the IP address from a given URL
      function fetchAndPrint(url) {
        $.get(url, function(data) {
          // Print the IP address to the console
          console.log("Your IP address is: " + data);
          document.getElementById("ip").innerHTML = data ; 
        });
      }
      
      // A function to get and print the connection information
      function getConnectionInfo() {
        // Get the connection object from the navigator
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        // Check if the connection object exists
        if (connection) {
          // Print the connection information to the console
          console.log("Your connection information is:");
          console.log("Type: " + connection.type); // This is the new line that prints the connection type
          console.log("Effective type: " + connection.effectiveType);
          console.log("Downlink: " + connection.downlink + " Mbps");
          console.log("RTT: " + connection.rtt + " ms");
          console.log("Save data: " + connection.saveData);
          document.getElementById("Type").innerHTML = connection.type;
          document.getElementById("Effective").innerHTML = connection.effectiveType ;
          document.getElementById("Downlink").innerHTML = connection.downlink + " Mbps";
          document.getElementById("RTT").innerHTML = connection.rtt + " ms";
          document.getElementById("Save data").innerHTML = connection.saveData;
        } else {
          // Print a message if the connection object is not supported
          console.log("Sorry, your browser does not support the connection API.");
        }
      }
      
      // Call the functions when the document is ready
      $(document).ready(function() {
        fetchAndPrint("https://ifconfig.me/ip");
        getConnectionInfo();
      });
      
      
      console.log(platform);
      document.getElementById("browser").innerText = platform.name ;
      document.getElementById("layout").innerText = platform.layout ;
      document.getElementById("description").innerText = platform.description ;
      document.getElementById("version").innerText = platform.version ;
      document.getElementById("os").innerText = platform.os ;
  












var method = document.getElementById("mys1");
//api calendar
async function getPrayerTimes1() {
  value = method.value ;

  // const url = `http://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method=${meth}`;
 
const url = `http://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method= ${value} `;
//const url = `https://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method=${meth}&mode: 'no-cors'`;

await  fetch(url)
     .then((response) => response.json())
     .then((data) => {
      
       // Extract prayer times from the response
       
       // hijri
      //   hijryear9 = data.data[0].date.hijri.year;

       const hijriday7 = data.data[0].date.hijri.weekday.ar;
       const hijryear7 = parseInt(data.data[0].date.hijri.year);
       const lenghts = data.data.length;
      
       
    
 



const timezone1 = data.data[0].meta.timezone;
document.getElementById("timezone").innerHTML=timezone1;

       //
       console.log(`Lengths of data: ${lenghts}`);


       var  forday1 = data.data[0].date.hijri.weekday.ar;
       const hijriday1 = data.data[0].date.hijri.day;
       const hijrmonth1 = data.data[0].date.hijri.month.ar;
       const hijryear1 = data.data[0].date.hijri.year;
       var hijriDate1 = forday1 + " " + hijriday1 + " " + hijrmonth1 + " " + hijryear1;
       const hijriDate2 = forday1 + " " + hijriday1 + " " + hijrmonth1;

       document.getElementById("firstholidays").innerHTML = hijriDate1;

       console.log(`التاريخ الهجري ${hijriDate2}`);





      


        forday12 = data.data[0].date.gregorian.weekday.en;
        day12 = data.data[0].date.gregorian.day;
     month12 = data.data[0].date.gregorian.month.en;
        year12 = data.data[0].date.gregorian.year;
       manos = forday12 + " " + day12 + " " + month12 + " " + year12;

console.log(`التاريخ الميلادي ${manos}`);

document.getElementById("firstholidays1").innerHTML = manos;










  
      if( hijriday7 ==='السبت' && lenghts===30 && hijryear7 % 2 ===0){
        document.getElementById("leilate_mano").innerHTML = 21;
        
        manos1 = data.data[21].date.gregorian.weekday.en;
        manos2 = data.data[21].date.gregorian.day;
      manos3 = data.data[21].date.gregorian.month.en;
        manos4 = data.data[21].date.gregorian.year;
	    manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
	     document.getElementById("leilate_manos").innerHTML = manos5;
        pirates = 21;
        cinqua = 118;
     

         safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
        vista = safe % 2 + safe % 3 + safe % 7 ;
        document.getElementById("total_mano").innerHTML = safe;
        document.getElementById("baki_mano").innerHTML = vista;
     fajrTime = data.data[21].timings.Fajr;
     sunsetTime = data.data[21].timings.Sunset;

         }else if( hijriday7 ==='الاحد' && lenghts===30 && hijryear7 % 2 ===0){
           document.getElementById("leilate_mano").innerHTML = 27;

           manos1 = data.data[27].date.gregorian.weekday.en;
           manos2 = data.data[27].date.gregorian.day;
         manos3 = data.data[27].date.gregorian.month.en;
           manos4 = data.data[27].date.gregorian.year;
          manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
           document.getElementById("leilate_manos").innerHTML = manos5;
           pirates = 27;
           cinqua = 118;
        
   
            safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
           vista = safe % 2 + safe % 3 + safe % 7 ;
           document.getElementById("total_mano").innerHTML = safe;
           document.getElementById("baki_mano").innerHTML = vista;
        fajrTime = data.data[27].timings.Fajr;
        sunsetTime = data.data[27].timings.Sunset;
  
            }else if( hijriday7 ==='الاثنين' && lenghts===30 && hijryear7 % 2 ===0){
              document.getElementById("leilate_mano").innerHTML = 19;

              manos1 = data.data[19].date.gregorian.weekday.en;
              manos2 = data.data[19].date.gregorian.day;
              manos3 = data.data[19].date.gregorian.month.en;
              manos4 = data.data[19].date.gregorian.year;
             manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
              document.getElementById("leilate_manos").innerHTML = manos5;


              pirates = 19;
              cinqua = 118;
           
      
               safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
              vista = safe % 2 + safe % 3 + safe % 7 ;
              document.getElementById("total_mano").innerHTML = safe;
              document.getElementById("baki_mano").innerHTML = vista;
           fajrTime = data.data[19].timings.Fajr;
           sunsetTime = data.data[19].timings.Sunset;
     
     
               }else if( hijriday7 ==='الثلاثاء' && lenghts===30 && hijryear7 % 2 ===0){
                 document.getElementById("leilate_mano").innerHTML = 25;
                 manos1 = data.data[25].date.gregorian.weekday.en;
                 manos2 = data.data[25].date.gregorian.day;
                 manos3 = data.data[25].date.gregorian.month.en;
                 manos4 = data.data[25].date.gregorian.year;
                manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                 document.getElementById("leilate_manos").innerHTML = manos5;

                 pirates = 25;
                 cinqua = 118;
              
         
                  safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                 vista = safe % 2 + safe % 3 + safe % 7 ;
                 document.getElementById("total_mano").innerHTML = safe;
                 document.getElementById("baki_mano").innerHTML = vista;
              fajrTime = data.data[25].timings.Fajr;
              sunsetTime = data.data[25].timings.Sunset;
        
                  }else if( hijriday7 ==='الاربعاء' && lenghts===30 && hijryear7 % 2 ===0){
                    document.getElementById("leilate_mano").innerHTML = 17;

                    manos1 = data.data[17].date.gregorian.weekday.en;
                    manos2 = data.data[17].date.gregorian.day;
                    manos3 = data.data[17].date.gregorian.month.en;
                    manos4 = data.data[17].date.gregorian.year;
                   manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                    document.getElementById("leilate_manos").innerHTML = manos5;
                    pirates = 17;
                    cinqua = 118;
                 
            
                     safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                    vista = safe % 2 + safe % 3 + safe % 7 ;
                    document.getElementById("total_mano").innerHTML = safe;
                    document.getElementById("baki_mano").innerHTML = vista;
                 fajrTime = data.data[17].timings.Fajr;
                 sunsetTime = data.data[17].timings.Sunset;
                     }else if( hijriday7 ==='الخميس' && lenghts===30 && hijryear7 % 2 ===0){
                       document.getElementById("leilate_mano").innerHTML = 23;
                       manos1 = data.data[23].date.gregorian.weekday.en;
                       manos2 = data.data[23].date.gregorian.day;
                       manos3 = data.data[23].date.gregorian.month.en;
                       manos4 = data.data[23].date.gregorian.year;
                      manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                       document.getElementById("leilate_manos").innerHTML = manos5;
                       pirates = 23;
                       cinqua = 118;
                    
               
                        safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                       vista = safe % 2 + safe % 3 + safe % 7 ;
                       document.getElementById("total_mano").innerHTML = safe;
                       document.getElementById("baki_mano").innerHTML = vista;
                    fajrTime = data.data[23].timings.Fajr;
                    sunsetTime = data.data[23].timings.Sunset;
                        }else if( hijriday7 ==='الجمعة' && lenghts===30 && hijryear7 % 2 ===0){
                          document.getElementById("leilate_mano").innerHTML = 29;
                          manos1 = data.data[29].date.gregorian.weekday.en;
                          manos2 = data.data[29].date.gregorian.day;
                          manos3 = data.data[29].date.gregorian.month.en;
                          manos4 = data.data[29].date.gregorian.year;
                         manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                          document.getElementById("leilate_manos").innerHTML = manos5;
                          pirates = 29;
                          cinqua = 118;
                       
                  
                           safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                          vista = safe % 2 + safe % 3 + safe % 7 ;
                          document.getElementById("total_mano").innerHTML = safe;
                          document.getElementById("baki_mano").innerHTML = vista;
                       fajrTime = data.data[29].timings.Fajr;
                       sunsetTime = data.data[29].timings.Sunset;
                           }else   if( hijriday7 ==='السبت' && lenghts===30 && hijryear7 % 2 ===1){
                             document.getElementById("leilate_mano").innerHTML = 23;
                             manos1 = data.data[23].date.gregorian.weekday.en;
                             manos2 = data.data[23].date.gregorian.day;
                             manos3 = data.data[23].date.gregorian.month.en;
                             manos4 = data.data[23].date.gregorian.year;
                            manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                             document.getElementById("leilate_manos").innerHTML = manos5;
                             pirates = 23;
                             cinqua = 13;
                          
                     
                              safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                             vista = safe % 2 + safe % 3 + safe % 7 ;
                             document.getElementById("total_mano").innerHTML = safe;
                             document.getElementById("baki_mano").innerHTML = vista;
                          fajrTime = data.data[23].timings.Fajr;
                          sunsetTime = data.data[23].timings.Sunset;
                    
                              }else if( hijriday7 ==='الاحد' && lenghts===30 && hijryear7 % 2 ===1){
                                document.getElementById("leilate_mano").innerHTML = 29;
                                manos1 = data.data[29].date.gregorian.weekday.en;
                                manos2 = data.data[29].date.gregorian.day;
                                manos3 = data.data[29].date.gregorian.month.en;
                                manos4 = data.data[29].date.gregorian.year;
                               manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                document.getElementById("leilate_manos").innerHTML = manos5;

                                pirates = 29;
                                cinqua = 13;
                             
                        
                                 safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                vista = safe % 2 + safe % 3 + safe % 7 ;
                                document.getElementById("total_mano").innerHTML = safe;
                                document.getElementById("baki_mano").innerHTML = vista;
                             fajrTime = data.data[29].timings.Fajr;
                             sunsetTime = data.data[29].timings.Sunset;
                       
                                 }else if( hijriday7 ==='الاثنين' && lenghts===30 && hijryear7 % 2 ===1){
                                   document.getElementById("leilate_mano").innerHTML = 21;
                                   manos1 = data.data[21].date.gregorian.weekday.en;
                                   manos2 = data.data[21].date.gregorian.day;
                                   manos3 = data.data[21].date.gregorian.month.en;
                                   manos4 = data.data[21].date.gregorian.year;
                                  manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                   document.getElementById("leilate_manos").innerHTML = manos5;
                              
                                   pirates = 21;
                                   cinqua = 13;
                                
                           
                                    safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                   vista = safe % 2 + safe % 3 + safe % 7 ;
                                   document.getElementById("total_mano").innerHTML = safe;
                                   document.getElementById("baki_mano").innerHTML = vista;
                                fajrTime = data.data[21].timings.Fajr;
                                sunsetTime = data.data[21].timings.Sunset;
                          
                              




                          
                                    }else if( hijriday7 ==='الثلاثاء' && lenghts===30 && hijryear7 % 2 ===1){
                                      document.getElementById("leilate_mano").innerHTML = 27;
                                      manos1 = data.data[27].date.gregorian.weekday.en;
                                      manos2 = data.data[27].date.gregorian.day;
                                      manos3 = data.data[27].date.gregorian.month.en;
                                      manos4 = data.data[27].date.gregorian.year;
                                     manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                      document.getElementById("leilate_manos").innerHTML = manos5;
                                      pirates = 27;
                                      cinqua = 13;
                                   
                              
                                       safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                      vista = safe % 2 + safe % 3 + safe % 7 ;
                                      document.getElementById("total_mano").innerHTML = safe;
                                      document.getElementById("baki_mano").innerHTML = vista;
                                   fajrTime = data.data[27].timings.Fajr;
                                   sunsetTime = data.data[27].timings.Sunset;
                                       }else if( hijriday7 ==='الاربعاء' && lenghts===30 && hijryear7 % 2 ===1){
                                         document.getElementById("leilate_mano").innerHTML = 19;
                                         manos1 = data.data[19].date.gregorian.weekday.en;
                                         manos2 = data.data[19].date.gregorian.day;
                                         manos3 = data.data[19].date.gregorian.month.en;
                                         manos4 = data.data[19].date.gregorian.year;
                                        manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                         document.getElementById("leilate_manos").innerHTML = manos5;
                                         pirates = 19;
                                         cinqua = 13;
                                      
                                 
                                          safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                         vista = safe % 2 + safe % 3 + safe % 7 ;
                                         document.getElementById("total_mano").innerHTML = safe;
                                         document.getElementById("baki_mano").innerHTML = vista;
                                      fajrTime = data.data[19].timings.Fajr;
                                      sunsetTime = data.data[19].timings.Sunset;
                                          }else if( hijriday7 ==='الخميس' && lenghts===30 && hijryear7 % 2 ===1){
                                            document.getElementById("leilate_mano").innerHTML = 25;
                                            manos1 = data.data[25].date.gregorian.weekday.en;
                                            manos2 = data.data[25].date.gregorian.day;
                                            manos3 = data.data[25].date.gregorian.month.en;
                                            manos4 = data.data[25].date.gregorian.year;
                                           manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                            document.getElementById("leilate_manos").innerHTML = manos5;
                                            pirates = 25;
                                            cinqua = 13;
                                         
                                    
                                             safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                            vista = safe % 2 + safe % 3 + safe % 7 ;
                                            document.getElementById("total_mano").innerHTML = safe;
                                            document.getElementById("baki_mano").innerHTML = vista;
                                         fajrTime = data.data[25].timings.Fajr;
                                         sunsetTime = data.data[25].timings.Sunset;
                                             }else if( hijriday7 ==='الجمعة' && lenghts===30 && hijryear7 % 2 ===1){
                                               document.getElementById("leilate_mano").innerHTML = 17;
                                               manos1 = data.data[17].date.gregorian.weekday.en;
                                               manos2 = data.data[17].date.gregorian.day;
                                               manos3 = data.data[17].date.gregorian.month.en;
                                               manos4 = data.data[17].date.gregorian.year;
                                              manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                               document.getElementById("leilate_manos").innerHTML = manos5;
                                               pirates = 17;
                                               cinqua = 13;
                                            
                                       
                                                safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                               vista = safe % 2 + safe % 3 + safe % 7 ;
                                               document.getElementById("total_mano").innerHTML = safe;
                                               document.getElementById("baki_mano").innerHTML = vista;
                                            fajrTime = data.data[17].timings.Fajr;
                                            sunsetTime = data.data[13].timings.Sunset;
                                                }else if( hijriday7 ==='السبت' && lenghts===29 && hijryear7 % 2 ===0){
                                                  document.getElementById("leilate_mano").innerHTML = 28;
                                                  manos1 = data.data[28].date.gregorian.weekday.en;
                                                  manos2 = data.data[28].date.gregorian.day;
                                                  manos3 = data.data[28].date.gregorian.month.en;
                                                  manos4 = data.data[28].date.gregorian.year;
                                                 manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                  document.getElementById("leilate_manos").innerHTML = manos5;

                                                  pirates = 28;
                                                  cinqua = 118;
                                               
                                          
                                                   safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                  vista = safe % 2 + safe % 3 + safe % 7 ;
                                                  document.getElementById("total_mano").innerHTML = safe;
                                                  document.getElementById("baki_mano").innerHTML = vista;
                                               fajrTime = data.data[28].timings.Fajr;
                                               sunsetTime = data.data[28].timings.Sunset;
                                         
                                                   }else if( hijriday7 ==='الاحد' && lenghts===29 && hijryear7 % 2 ===0){
                                                     document.getElementById("leilate_mano").innerHTML = 20;
                                                     manos1 = data.data[20].date.gregorian.weekday.en;
                                                     manos2 = data.data[20].date.gregorian.day;
                                                     manos3 = data.data[20].date.gregorian.month.en;
                                                     manos4 = data.data[20].date.gregorian.year;
                                                    manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                     document.getElementById("leilate_manos").innerHTML = manos5;
                                                     pirates = 20;
                                                     cinqua = 118;
                                                  
                                             
                                                      safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                     vista = safe % 2 + safe % 3 + safe % 7 ;
                                                     document.getElementById("total_mano").innerHTML = safe;
                                                     document.getElementById("baki_mano").innerHTML = vista;
                                                  fajrTime = data.data[20].timings.Fajr;
                                                  sunsetTime = data.data[20].timings.Sunset;
                                            
                                                      }else if( hijriday7 ==='الاثنين' && lenghts===29 && hijryear7 % 2 ===0){
                                                        document.getElementById("leilate_mano").innerHTML = 26;
                                                        manos1 = data.data[26].date.gregorian.weekday.en;
                                                        manos2 = data.data[26].date.gregorian.day;
                                                        manos3 = data.data[26].date.gregorian.month.en;
                                                        manos4 = data.data[26].date.gregorian.year;
                                                       manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                        document.getElementById("leilate_manos").innerHTML = manos5;
                                                        pirates = 26;
                                                        cinqua = 118;
                                                     
                                                
                                                         safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                        vista = safe % 2 + safe % 3 + safe % 7 ;
                                                        document.getElementById("total_mano").innerHTML = safe;
                                                        document.getElementById("baki_mano").innerHTML = vista;
                                                     fajrTime = data.data[26].timings.Fajr;
                                                     sunsetTime = data.data[26].timings.Sunset;
                                               
                                                         }else if( hijriday7 ==='الثلاثاء' && lenghts===29 && hijryear7 % 2 ===0){
                                                           document.getElementById("leilate_mano").innerHTML = 18;
                                                           manos1 = data.data[18].date.gregorian.weekday.en;
                                                           manos2 = data.data[18].date.gregorian.day;
                                                           manos3 = data.data[18].date.gregorian.month.en;
                                                           manos4 = data.data[18].date.gregorian.year;
                                                          manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                           document.getElementById("leilate_manos").innerHTML = manos5;
                                                           pirates = 18;
                                                           cinqua = 118;
                                                        
                                                   
                                                            safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                           vista = safe % 2 + safe % 3 + safe % 7 ;
                                                           document.getElementById("total_mano").innerHTML = safe;
                                                           document.getElementById("baki_mano").innerHTML = vista;
                                                        fajrTime = data.data[18].timings.Fajr;
                                                        sunsetTime = data.data[18].timings.Sunset;
                                                            }else if( hijriday7 ==='الاربعاء' && lenghts===29 && hijryear7 % 2 ===0){
                                                              document.getElementById("leilate_mano").innerHTML = 24;
                                                              manos1 = data.data[24].date.gregorian.weekday.en;
                                                              manos2 = data.data[24].date.gregorian.day;
                                                              manos3 = data.data[24].date.gregorian.month.en;
                                                              manos4 = data.data[24].date.gregorian.year;
                                                             manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                              document.getElementById("leilate_manos").innerHTML = manos5;
                                                              pirates = 24;
                                                              cinqua = 118;
                                                           
                                                      
                                                               safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                              vista = safe % 2 + safe % 3 + safe % 7 ;
                                                              document.getElementById("total_mano").innerHTML = safe;
                                                              document.getElementById("baki_mano").innerHTML = vista;
                                                           fajrTime = data.data[24].timings.Fajr;
                                                           sunsetTime = data.data[24].timings.Sunset;
                                                               }else if( hijriday7 ==='الخميس' && lenghts===29 && hijryear7 % 2 ===0){
                                                                 document.getElementById("leilate_mano").innerHTML = 16;
                                                                 manos1 = data.data[16].date.gregorian.weekday.en;
                                                                 manos2 = data.data[16].date.gregorian.day;
                                                                 manos3 = data.data[16].date.gregorian.month.en;
                                                                 manos4 = data.data[16].date.gregorian.year;
                                                                manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                 document.getElementById("leilate_manos").innerHTML = manos5;
                                                                 pirates = 16;
                                                                 cinqua = 118;
                                                              
                                                         
                                                                  safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                 vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                 document.getElementById("total_mano").innerHTML = safe;
                                                                 document.getElementById("baki_mano").innerHTML = vista;
                                                              fajrTime = data.data[16].timings.Fajr;
                                                              sunsetTime = data.data[16].timings.Sunset;
                                                                  }else if( hijriday7 ==='الجمعة' && lenghts===29 && hijryear7 % 2 ===0){
                                                                    document.getElementById("leilate_mano").innerHTML = 22;
                                                                    manos1 = data.data[22].date.gregorian.weekday.en;
                                                                    manos2 = data.data[22].date.gregorian.day;
                                                                    manos3 = data.data[22].date.gregorian.month.en;
                                                                    manos4 = data.data[22].date.gregorian.year;
                                                                   manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                    document.getElementById("leilate_manos").innerHTML = manos5;
                                                                    pirates = 22;
                                                                    cinqua = 118;
                                                                 
                                                            
                                                                     safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                    vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                    document.getElementById("total_mano").innerHTML = safe;
                                                                    document.getElementById("baki_mano").innerHTML = vista;
                                                                 fajrTime = data.data[22].timings.Fajr;
                                                                 sunsetTime = data.data[22].timings.Sunset;
                                                                     }else   if( hijriday7 ==='السبت' && lenghts===29 && hijryear7 % 2 ===1){
                                                                       document.getElementById("leilate_mano").innerHTML = 16;
                                                                       manos1 = data.data[16].date.gregorian.weekday.en;
                                                                       manos2 = data.data[16].date.gregorian.day;
                                                                       manos3 = data.data[16].date.gregorian.month.en;
                                                                       manos4 = data.data[16].date.gregorian.year;
                                                                      manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                       document.getElementById("leilate_manos").innerHTML = manos5;
                                                                       pirates = 16;
                                                                       cinqua = 13;
                                                                    
                                                               
                                                                        safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                       vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                       document.getElementById("total_mano").innerHTML = safe;
                                                                       document.getElementById("baki_mano").innerHTML = vista;
                                                                    fajrTime = data.data[16].timings.Fajr;
                                                                    sunsetTime = data.data[16].timings.Sunset;
                                                              
                                                                        }else if( hijriday7 ==='الاحد' && lenghts===29 && hijryear7 % 2 ===1){
                                                                          document.getElementById("leilate_mano").innerHTML = 22;
                                                                          manos1 = data.data[22].date.gregorian.weekday.en;
                                                                          manos2 = data.data[22].date.gregorian.day;
                                                                          manos3 = data.data[22].date.gregorian.month.en;
                                                                          manos4 = data.data[22].date.gregorian.year;
                                                                         manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                          document.getElementById("leilate_manos").innerHTML = manos5;
                                                                          pirates = 22;
                                                                          cinqua = 13;
                                                                       
                                                                  
                                                                           safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                          vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                          document.getElementById("total_mano").innerHTML = safe;
                                                                          document.getElementById("baki_mano").innerHTML = vista;
                                                                       fajrTime = data.data[22].timings.Fajr;
                                                                       sunsetTime = data.data[22].timings.Sunset;
                                                                           }else if( hijriday7 ==='الاثنين' && lenghts===29 && hijryear7 % 2 ===1){
                                                                             document.getElementById("leilate_mano").innerHTML = 27;
                                                                             manos1 = data.data[27].date.gregorian.weekday.en;
                                                                             manos2 = data.data[27].date.gregorian.day;
                                                                             manos3 = data.data[27].date.gregorian.month.en;
                                                                             manos4 = data.data[27].date.gregorian.year;
                                                                            manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                             document.getElementById("leilate_manos").innerHTML = manos5;
                                                                             pirates = 27;
                                                                             cinqua = 462;
                                                                          
                                                                     
                                                                              safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                             vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                             document.getElementById("total_mano").innerHTML = safe;
                                                                             document.getElementById("baki_mano").innerHTML = vista;
                                                                          fajrTime = data.data[24].timings.Fajr;
                                                                          sunsetTime = data.data[24].timings.Sunset;
                                                                    
                                                                              }else if( hijriday7 ==='الثلاثاء' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                document.getElementById("leilate_mano").innerHTML = 20;
                                                                                manos1 = data.data[20].date.gregorian.weekday.en;
                                                                                manos2 = data.data[20].date.gregorian.day;
                                                                                manos3 = data.data[20].date.gregorian.month.en;
                                                                                manos4 = data.data[20].date.gregorian.year;
                                                                               manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                                document.getElementById("leilate_manos").innerHTML = manos5;
                                                                                pirates = 20;
                                                                                cinqua = 13;
                                                                             
                                                                        
                                                                                 safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                                vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                document.getElementById("total_mano").innerHTML = safe;
                                                                                document.getElementById("baki_mano").innerHTML = vista;
                                                                             fajrTime = data.data[20].timings.Fajr;
                                                                             sunsetTime = data.data[20].timings.Sunset;
                                                                                 }else if( hijriday7 ==='الاربعاء' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                   document.getElementById("leilate_mano").innerHTML = 26;
                                                                                   manos1 = data.data[26].date.gregorian.weekday.en;
                                                                                   manos2 = data.data[26].date.gregorian.day;
                                                                                   manos3 = data.data[26].date.gregorian.month.en;
                                                                                   manos4 = data.data[26].date.gregorian.year;
                                                                                  manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                                   document.getElementById("leilate_manos").innerHTML = manos5;
                                                                                   pirates = 26;
                                                                                   cinqua = 13;
                                                                                
                                                                           
                                                                                    safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                                   vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                   document.getElementById("total_mano").innerHTML = safe;
                                                                                   document.getElementById("baki_mano").innerHTML = vista;
                                                                                fajrTime = data.data[26].timings.Fajr;
                                                                                sunsetTime = data.data[26].timings.Sunset;
                                                                                    }else if( hijriday7 ==='الخميس' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                      document.getElementById("leilate_mano").innerHTML = 18;
                                                                                      manos1 = data.data[18].date.gregorian.weekday.en;
                                                                                      manos2 = data.data[18].date.gregorian.day;
                                                                                      manos3 = data.data[18].date.gregorian.month.en;
                                                                                      manos4 = data.data[18].date.gregorian.year;
                                                                                     manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                                      document.getElementById("leilate_manos").innerHTML = manos5;
                                                                                      pirates = 18;
                                                                                      cinqua = 13;
                                                                                   
                                                                              
                                                                                       safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                                      vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                      document.getElementById("total_mano").innerHTML = safe;
                                                                                      document.getElementById("baki_mano").innerHTML = vista;
                                                                                   fajrTime = data.data[18].timings.Fajr;
                                                                                   sunsetTime = data.data[18].timings.Sunset;
                                                                                       }else if( hijriday7 ==='الجمعة' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                         document.getElementById("leilate_mano").innerHTML = 24;
                                                                                         manos1 = data.data[24].date.gregorian.weekday.en;
                                                                                         manos2 = data.data[24].date.gregorian.day;
                                                                                         manos3 = data.data[24].date.gregorian.month.en;
                                                                                         manos4 = data.data[24].date.gregorian.year;
                                                                                        manos5 = manos1 + " " + manos2 + " " + manos3 + " " + manos4;
                                                                                         document.getElementById("leilate_manos").innerHTML = manos5;
                                                                                         pirates = 24;
                                                                                         cinqua = 13;
                                                                                      
                                                                                 
                                                                                          safe = parseInt(pirates + cinqua + hijryear7+matlob);                             
                                                                                         vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                         document.getElementById("total_mano").innerHTML = safe;
                                                                                         document.getElementById("baki_mano").innerHTML = vista;
                                                                                      fajrTime = data.data[24].timings.Fajr;
                                                                                      sunsetTime = data.data[24].timings.Sunset;
                                                                                          }else {
                          console.log("what");
                        }
                       















                       
      


       document.getElementById("year_mano").innerHTML = hijryear1;
       document.getElementById("first_mano").innerHTML = hijriDate1;
       document.getElementById("first_manos").innerHTML = manos;
       document.getElementById("lenght_mano").innerHTML = lenghts;
       console.log(data);

       // جميع معاملات الحساب الخاصة بليلة القدر

      //  fajrTime = data.data[0].timings.Fajr;
      //   sunsetTime = data.data[0].timings.Sunset;

       // Define the time
       const time = fajrTime;
       const time1 = sunsetTime;
       const elena = 1440; //24 *60

       // Split the time into hours and minutes
       const [hours, minutes] = time.split(":");
       const [hours1, minutes1] = time1.split(":");

       // Convert the hours and minutes to minutes
       const totalMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);

       const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
       const mins = elena - (totalMinutes1 - totalMinutes);
       const unites = mins / 12;
       const horse1 = totalMinutes1 + unites;
       const horse2 = horse1 + unites;
       const horse3 = horse2 + unites;
       const horse4 = horse3 + unites;
       const horse5 = horse4 + unites;
       const horse6 = horse5 + unites;
       const horse7 = horse6 + unites;
       const horse8 = horse7 + unites;
       const horse9 = horse8 + unites;
       const horse10 = horse9 + unites;
       const horse11 = horse10 + unites;
       const horse12 = horse11 + unites;

       //التحويل من الدقائق إلى الساعات


function countwords(){
	console.log(frederico);
}







       // best code convert minute to time

       function convert(n) {
const hour = 24;
const maxSeconds = 60;

const hours = Math.floor(n / 60) % hour;
const minutes = n % 60;
const seconds = Math.floor((n % 1) * maxSeconds);

const formattedHours = String(hours).padStart(2, '0');
const formattedMinutes = String(minutes).padStart(2, '0');
const formattedSeconds = String(seconds).padStart(2, '0');

return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};


     //

     document.getElementById("sa3a1").innerHTML =  convert(horse1) ;
       document.getElementById("sa3a2").innerHTML = convert(horse2);
       document.getElementById("sa3a3").innerHTML = convert(horse3);
       document.getElementById("sa3a4").innerHTML = convert(horse4);
       document.getElementById("sa3a5").innerHTML = convert(horse5);
       document.getElementById("sa3a6").innerHTML = convert(horse6);
       document.getElementById("sa3a7").innerHTML = convert(horse7);
       document.getElementById("sa3a8").innerHTML = convert(horse8);
       document.getElementById("sa3a9").innerHTML = convert(horse9);
       document.getElementById("sa3a10").innerHTML = convert(horse10);
       document.getElementById("sa3a11").innerHTML = convert(horse11);
       document.getElementById("sa3a12").innerHTML = convert(horse12);
       // document.getElementById("sa3a13").innerHTML = sunrise;
       document.getElementById("sa3a14").innerHTML = unites;


       
       document.getElementById("sa3a31").innerHTML =  sunsetTime ;
       document.getElementById("sa3a32").innerHTML = convert(horse1);
       document.getElementById("sa3a33").innerHTML = convert(horse2);
       document.getElementById("sa3a34").innerHTML = convert(horse3);
       document.getElementById("sa3a35").innerHTML = convert(horse4);
       document.getElementById("sa3a36").innerHTML = convert(horse5);
       document.getElementById("sa3a37").innerHTML = convert(horse6);
       document.getElementById("sa3a38").innerHTML = convert(horse7);
       document.getElementById("sa3a39").innerHTML = convert(horse8);
       document.getElementById("sa3a40").innerHTML = convert(horse9);
       document.getElementById("sa3a41").innerHTML = convert(horse10);
       document.getElementById("sa3a42").innerHTML = convert(horse11);

     //
     document.getElementById("unita_mano").innerHTML = unites ;

     if (vista===0){
      document.getElementById("time_selsabil").innerHTML = ` ${sunsetTime} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse1)}`;

     }else  if  (vista===1){
      document.getElementById("time_selsabil").innerHTML = ` ${sunsetTime} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse1)}`;

     }else  if (vista===2){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse1)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse2)}`;

     }else  if (vista===3){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse2)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse3)}`;

     }else  if (vista===4){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse3)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse4)}`;

     }else  if (vista===5){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse4)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse5)}`;

     }else  if (vista===6){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse5)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse6)}`;

     }else  if (vista===7){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse6)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse7)}`;

     }else  if (vista===8){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse7)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse8)}`;

     }else  if (vista===9){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse8)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse9)}`;

     }else  if (vista===10){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse9)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse10)}`;

     }else  if (vista===11){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse10)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${convert(horse11)}`;

     }else  if (vista===12){
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse11)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${fajrTime}`;

     }else if (vista > 12) {
      document.getElementById("time_selsabil").innerHTML = ` ${convert(horse11)} &nbsp;&nbsp; إلى &nbsp;&nbsp;${fajrTime}`;

     }else{
      console.log("Tasnim && Said : My Children : I Love You ForEver");
     }


   


   


    





// END test 1 for timing






     }).catch((error) => {
       console.log(error);
     });


    }


 //End api calendar
 // app.js

  // handle the response
// });
// var livemap;

//  // Get user's current location using Geolocation API

// //  https://www.openstreetmap.org/export/embed.html?bbox=${latitude},${longitude}&;layer=mapnik

// livemap =  navigator.geolocation.watchPosition(
//    position => {
//       latitude = position.coords.latitude;
//       longitude = position.coords.longitude;
//       // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(position);
//      // Display latitude and longitude on the web page
//      document.getElementById("latitude").innerHTML = latitude;
//      document.getElementById("longitude").innerHTML = longitude;

//    // document.getElementById("timezone").innerHTML = timezone;
//      // Call getPrayerTimes function to get prayer times for the user's location
//      //

//      document.getElementById("myposition").innerHTML = ` <iframe width="300px" height="250px" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&;layer=mapnik&marker=${longitude},${latitude}&marker-icon=./map-marker-free-download-png.webp/marker.png" ></iframe> `;
    

//      //
   
//      getPrayerTimes1();
//    },
//    error => {
//      console.log(error);
//    }
//  );

//  navigator.geolocation.clearWatch(livemap);












