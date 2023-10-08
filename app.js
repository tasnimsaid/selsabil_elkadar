
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


//api calendar
async function getPrayerTimes1(meth) {

  // const url = `http://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method=${meth}`;
 

await  fetch(`http://api.aladhan.com/v1/hijriCalendar/1444/9?latitude=${latitude}&longitude=${longitude}&method=${meth}`)
     .then((response) => response.json())
     .then((data) => {
      
       // Extract prayer times from the response
       
       // hijri
      //   hijryear9 = data.data[0].date.hijri.year;

       const hijriday7 = data.data[0].date.hijri.weekday.ar;
       const hijryear7 = parseInt(data.data[0].date.hijri.year);
       const lenghts = data.data.length;
      
       
    
   var myselected = document.querySelector("#mys1");

myselected.innerHTML=`  
<option selected >${data.data[0].meta.method.name}</option> 
<option value="1">University of Islamic Sciences, Karachi</option>
<option value="2">Islamic Society of North America</option>
<option value="3">Muslim World League</option>
<option value="4">Umm Al-Qura University, Makkah</option>
<option value="5">Egyptian General Authority of Survey</option>
<option value="6"></option>
<option value="7">
  Institute of Geophysics, University of Tehran
</option>
<option value="8">Gulf Region</option>
<option value="9">Kuwait</option>
<option value="10">Qatar</option>
<option value="11">Majlis Ugama Islam Singapura, Singapore</option>
<option value="12">Union Organization islamic de France</option>
<option value="13">Diyanet İşleri Başkanlığı, Turkey</option>
<option value="14">
  Spiritual Administration of Muslims of Russia
</option>
<option value="15">
  Moonsighting Committee Worldwide (also requires shafaq parameter)
</option>
<option value="16">Dubai (unofficial)</option>`;


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
var livemap;

 // Get user's current location using Geolocation API

//  https://www.openstreetmap.org/export/embed.html?bbox=${latitude},${longitude}&;layer=mapnik

livemap =  navigator.geolocation.watchPosition(
   position => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

     // Display latitude and longitude on the web page
     document.getElementById("latitude").innerHTML = latitude;
     document.getElementById("longitude").innerHTML = longitude;

   // document.getElementById("timezone").innerHTML = timezone;
     // Call getPrayerTimes function to get prayer times for the user's location
     //

     document.getElementById("myposition").innerHTML = ` <iframe width="300px" height="250px" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&;layer=mapnik" ></iframe> `;
    

     //
   
     getPrayerTimes1();
   },
   error => {
     console.log(error);
   }
 );

//  navigator.geolocation.clearWatch(livemap);














