
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

function countWord() {

  let text = document.getElementById("text").value;
  text =text.trim();
  
   let words = text.split(" ").length ;
 
   
  
     
  document.getElementById("best4").innerHTML=words;


  
    
  
    
  
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

  
  
  
  // document.getElementById("alif").innerHTML=Counter1;
  // document.getElementById("alif1").innerHTML=Counter1;
  
  // document.getElementById("baa").innerHTML=Counter2;
  // document.getElementById("baa2").innerHTML=Counter2*2;
  
  // document.getElementById("jim").innerHTML=Counter3;
  // document.getElementById("jim3").innerHTML=Counter3*3;
  
  // document.getElementById("dal").innerHTML=Counter4;
  // document.getElementById("dal4").innerHTML=Counter4*4;
  
  // document.getElementById("haae").innerHTML=Counter5;
  // document.getElementById("haae5").innerHTML=Counter5*5;
  
  // document.getElementById("ouaou").innerHTML=Counter6;
  // document.getElementById("ouaou6").innerHTML=Counter6*6;
  
  // document.getElementById("zay").innerHTML=Counter7;
  // document.getElementById("zay7").innerHTML=Counter7*7;
  
  // document.getElementById("haa").innerHTML=Counter8;
  // document.getElementById("haa8").innerHTML=Counter8*8;
  
  // document.getElementById("ttae").innerHTML=Counter9;
  // document.getElementById("ttae9").innerHTML=Counter9*9;
  
  // document.getElementById("yaa").innerHTML=Counter10;
  // document.getElementById("yaa10").innerHTML=Counter10*10;
  
  // document.getElementById("kaf").innerHTML=Counter11;
  // document.getElementById("kaf11").innerHTML=Counter11*20;
  
  // document.getElementById("laa").innerHTML=Counter12;
  // document.getElementById("laa12").innerHTML=Counter12*30;
  
  
  // document.getElementById("mim").innerHTML=Counter13;
  // document.getElementById("mim13").innerHTML=Counter13*40;
  
  
  // document.getElementById("noon").innerHTML=Counter14;
  // document.getElementById("noon14").innerHTML=Counter14*50;
  
  // document.getElementById("sin").innerHTML=Counter15;
  // document.getElementById("sin15").innerHTML=Counter15*60;
  
  // document.getElementById("ine").innerHTML=Counter16;
  // document.getElementById("ine16").innerHTML=Counter16*70;
  
  // document.getElementById("faa").innerHTML=Counter17;
  // document.getElementById("faa17").innerHTML=Counter17*80;
  
  // document.getElementById("saad").innerHTML=Counter18;
  // document.getElementById("saad18").innerHTML=Counter18*90;
  
  
  // document.getElementById("ppaf").innerHTML=Counter19;
  // document.getElementById("ppaf19").innerHTML=Counter19*100;
  
  // document.getElementById("raa").innerHTML=Counter20;
  // document.getElementById("raa20").innerHTML=Counter20*200;
  
  // document.getElementById("chine").innerHTML=Counter21;
  // document.getElementById("chine21").innerHTML=Counter21*300;
  
  // document.getElementById("taa").innerHTML=Counter22;
  // document.getElementById("taa22").innerHTML=Counter22*400;
  
  // document.getElementById("ttta").innerHTML=Counter23;
  // document.getElementById("ttta23").innerHTML=Counter23*500;
  
  // document.getElementById("kha").innerHTML=Counter24;
  // document.getElementById("kha24").innerHTML=Counter24*600;
  
  // document.getElementById("ddal").innerHTML=Counter25;
  // document.getElementById("ddal25").innerHTML=Counter25*700;
  
  // document.getElementById("daa").innerHTML=Counter26;
  // document.getElementById("daa26").innerHTML=Counter26*800;
  
  // document.getElementById("ddda").innerHTML=Counter27;
  // document.getElementById("ddda27").innerHTML=Counter27*900;
  
  // document.getElementById("gaa").innerHTML=Counter28;
  // document.getElementById("gaa28").innerHTML=Counter28*1000;
  


  
  document.getElementById("text").addEventListener("keyup",countWord);
//   document.getElementById("mano").innerHTML = text;
  
  
  document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000  ;
  
  document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
  
 
 
  //document.getElementById("best7").innerHTML=words + Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 + Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;
  matlob =parseInt (Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 ) ;
 console.log(matlob);
//  azer1 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%12;
//  azer2 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%4;
//  azer3 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%7;
 a = Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 ;

 
//    b_k12 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%12 ;
//   b_k4 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%4 ;
//   b_k7 = (Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%7 ;





}





  
//end nice script

   //

  

//nice script

        
// function getPrayerTimes(latitude, longitude) {
//    // ADHAN PRAYER TIMES API endpoint
//    const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=4`;

//    fetch(url)
//      .then((response) => response.json())
//      .then((data) => {
       
//    const timings = data.data.timings;
   
//    const prayerTimes = data.data.timings;
//    const readable = data.data.date.readable ;
//    const forday  = data.data.date.hijri.weekday.ar;
   
//    const hijriday = data.data.date.hijri.day;
//    const hijrmonth = data.data.date.hijri.month.ar;
//     const hijryear = data.data.date.hijri.year;
//    const hijriDate = forday +' '+ hijriday +' '+ hijrmonth +' '+ hijryear;

   
   
//    const gregorianDate = data.data.date.gregorian.date;
//    const gregorianDate1= data.data.date;
//    const timezone = data.data.meta.timezone;
 
//    const sunrise = timings.Sunrise;
//    const sunset = timings.Sunset;
//    const fajr = timings.Fajr;
//    const dhuhr = timings.Dhuhr;
//    const asr = timings.Asr;
//    const maghrib = timings.Maghrib;
//    const isha = timings.Isha;
//    const Imsak = timings.Imsak;
//    const Midnight = timings.Midnight;

//        // Display prayer times on the web page
//        document.getElementById("fajr").innerHTML = fajr;
//        document.getElementById("dhuhr").innerHTML = dhuhr;
//        document.getElementById("asr").innerHTML = asr;
//        document.getElementById("maghrib").innerHTML = maghrib;
//        document.getElementById("isha").innerHTML = isha;
//        document.getElementById("hijriDate").innerHTML = hijriDate;
//        document.getElementById("gregorianDate").innerHTML = gregorianDate;
//        document.getElementById("Imsak").innerHTML = Imsak;
//        document.getElementById("Midnight").innerHTML = Midnight;
//        document.getElementById("timezone").innerHTML = timezone;
//        document.getElementById("sunrise").innerHTML = sunrise;
//        document.getElementById("sunset").innerHTML = sunset;
//        document.getElementById("todayprayer").innerHTML = gregorianDate;

//        console.log(data);





//      });
//  }





 //api calendar
 

 function getPrayerTimes1(meth) {
   // ADHAN PRAYER TIMES API endpoint
   const url = `http://api.aladhan.com/v1/hijriCalendar/1945/9?latitude=${latitude}&longitude=${longitude}&method=${meth}`;

   fetch(url)
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


// const timezone1 = document.querySelector("timezone");
// timezone1.innerHTML=`${data.data[0].meta.timezone}`,

       //
       console.log(`Lengths of data: ${lenghts}`);



       var forday1 = data.data[0].date.hijri.weekday.ar;
       const hijriday1 = data.data[0].date.hijri.day;
       const hijrmonth1 = data.data[0].date.hijri.month.ar;
       const hijryear1 = data.data[0].date.hijri.year;
       const hijriDate1 = forday1 + " " + hijriday1 + " " + hijrmonth1 + " " + hijryear1;
       const hijriDate2 = forday1 + " " + hijriday1 + " " + hijrmonth1;

       document.getElementById("firstholidays").innerHTML = hijriDate1;

       console.log(`التاريخ الهجري ${hijriDate2}`);

      //  Display prayer times to the user
      //  console.log(`Prayer times for ${data.data[0].date.readable}:`);
      //  console.log(`Fajr: ${fajrTime}`);
      //  console.log(`Dhuhr: ${dhuhrTime}`);
      //  console.log(`Asr: ${asrTime}`);
      //  console.log(`Maghrib: ${maghribTime}`);
      //  console.log(`Isha: ${ishaTime}`);
      //  console.log(`Sunrise: ${sunriseTime}`);
      //  console.log(`Sunset: ${sunsetTime}`);

      //  console.log(`Lengths of data: ${lenghts}`);

       //
      //  if( hijriday7 ==='الاثنين'){
        
      
      //  const pirates = 21;
      //   const cinqua = 702;
      //   const tasnimsaid = 20;
      //   const safe = pirates + cinqua +  tasnimsaid + hijryear7;  
      //     console.log(safe);
      //   const  vista = safe % 2 + safe % 3 + safe % 7 ;
      //    document.getElementById("total_mano").innerHTML = safe;
      //    document.getElementById("baki_mano").innerHTML = vista;
        
  
      //    document.getElementById("leilate_mano").innerHTML = 27;
       
         
      //  //   document.getElementById("unita_mano").innerHTML = unites;
      //    // document.getElementById("hour_mano").textContent = <p>${horse1}&nbsp; &nbsp; إلى&nbsp; &nbsp; ${sunset} </p>;
         
          
      //     }else

      // document.addEventListener("keyup",getPrayerTimes1);

        







  
      if( hijriday7 ==='السبت' && lenghts===30 && hijryear7 % 2 ===0){
        document.getElementById("leilate_mano").innerHTML = 21;

        pirates = 21;
        cinqua = 118;
     

        safe = pirates + cinqua + hijryear7+matlob;                            
        vista = safe % 2 + safe % 3 + safe % 7 ;
        document.getElementById("total_mano").innerHTML = safe;
        document.getElementById("baki_mano").innerHTML = vista;
     fajrTime = data.data[21].timings.Fajr;
     sunsetTime = data.data[21].timings.Sunset;

         }else if( hijriday7 ==='الاحد' && lenghts===30 && hijryear7 % 2 ===0){
           document.getElementById("leilate_mano").innerHTML = 27;

           pirates = 27;
           cinqua = 118;
        
   
           safe = pirates + cinqua + hijryear7+matlob;                            
           vista = safe % 2 + safe % 3 + safe % 7 ;
           document.getElementById("total_mano").innerHTML = safe;
           document.getElementById("baki_mano").innerHTML = vista;
        fajrTime = data.data[27].timings.Fajr;
        sunsetTime = data.data[27].timings.Sunset;
  
            }else if( hijriday7 ==='الاثنين' && lenghts===30 && hijryear7 % 2 ===0){
              document.getElementById("leilate_mano").innerHTML = 19;
              pirates = 19;
              cinqua = 118;
           
      
              safe = pirates + cinqua + hijryear7+matlob;                            
              vista = safe % 2 + safe % 3 + safe % 7 ;
              document.getElementById("total_mano").innerHTML = safe;
              document.getElementById("baki_mano").innerHTML = vista;
           fajrTime = data.data[19].timings.Fajr;
           sunsetTime = data.data[19].timings.Sunset;
     
     
               }else if( hijriday7 ==='الثلاثاء' && lenghts===30 && hijryear7 % 2 ===0){
                 document.getElementById("leilate_mano").innerHTML = 25;
                 pirates = 25;
                 cinqua = 118;
              
         
                 safe = pirates + cinqua + hijryear7+matlob;                            
                 vista = safe % 2 + safe % 3 + safe % 7 ;
                 document.getElementById("total_mano").innerHTML = safe;
                 document.getElementById("baki_mano").innerHTML = vista;
              fajrTime = data.data[25].timings.Fajr;
              sunsetTime = data.data[25].timings.Sunset;
        
                  }else if( hijriday7 ==='الاربعاء' && lenghts===30 && hijryear7 % 2 ===0){
                    document.getElementById("leilate_mano").innerHTML = 17;
                    pirates = 17;
                    cinqua = 118;
                 
            
                    safe = pirates + cinqua + hijryear7+matlob;                            
                    vista = safe % 2 + safe % 3 + safe % 7 ;
                    document.getElementById("total_mano").innerHTML = safe;
                    document.getElementById("baki_mano").innerHTML = vista;
                 fajrTime = data.data[17].timings.Fajr;
                 sunsetTime = data.data[17].timings.Sunset;
                     }else if( hijriday7 ==='الخميس' && lenghts===30 && hijryear7 % 2 ===0){
                       document.getElementById("leilate_mano").innerHTML = 23;
                       pirates = 23;
                       cinqua = 118;
                    
               
                       safe = pirates + cinqua + hijryear7+matlob;                            
                       vista = safe % 2 + safe % 3 + safe % 7 ;
                       document.getElementById("total_mano").innerHTML = safe;
                       document.getElementById("baki_mano").innerHTML = vista;
                    fajrTime = data.data[23].timings.Fajr;
                    sunsetTime = data.data[23].timings.Sunset;
                        }else if( hijriday7 ==='الجمعة' && lenghts===30 && hijryear7 % 2 ===0){
                          document.getElementById("leilate_mano").innerHTML = 29;
                          pirates = 29;
                          cinqua = 118;
                       
                  
                          safe = pirates + cinqua + hijryear7+matlob;                            
                          vista = safe % 2 + safe % 3 + safe % 7 ;
                          document.getElementById("total_mano").innerHTML = safe;
                          document.getElementById("baki_mano").innerHTML = vista;
                       fajrTime = data.data[29].timings.Fajr;
                       sunsetTime = data.data[29].timings.Sunset;
                           }else   if( hijriday7 ==='السبت' && lenghts===30 && hijryear7 % 2 ===1){
                             document.getElementById("leilate_mano").innerHTML = 23;
                             pirates = 23;
                             cinqua = 13;
                          
                     
                             safe = pirates + cinqua + hijryear7+matlob;                            
                             vista = safe % 2 + safe % 3 + safe % 7 ;
                             document.getElementById("total_mano").innerHTML = safe;
                             document.getElementById("baki_mano").innerHTML = vista;
                          fajrTime = data.data[23].timings.Fajr;
                          sunsetTime = data.data[23].timings.Sunset;
                    
                              }else if( hijriday7 ==='الاحد' && lenghts===30 && hijryear7 % 2 ===1){
                                document.getElementById("leilate_mano").innerHTML = 29;

                                pirates = 29;
                                cinqua = 13;
                             
                        
                                safe = pirates + cinqua + hijryear7+matlob;                            
                                vista = safe % 2 + safe % 3 + safe % 7 ;
                                document.getElementById("total_mano").innerHTML = safe;
                                document.getElementById("baki_mano").innerHTML = vista;
                             fajrTime = data.data[29].timings.Fajr;
                             sunsetTime = data.data[29].timings.Sunset;
                       
                                 }else if( hijriday7 ==='الاثنين' && lenghts===30 && hijryear7 % 2 ===1){
                                   document.getElementById("leilate_mano").innerHTML = 21;
                              
                                   pirates = 21;
                                   cinqua = 13;
                                
                           
                                   safe = pirates + cinqua + hijryear7+matlob;                            
                                   vista = safe % 2 + safe % 3 + safe % 7 ;
                                   document.getElementById("total_mano").innerHTML = safe;
                                   document.getElementById("baki_mano").innerHTML = vista;
                                fajrTime = data.data[21].timings.Fajr;
                                sunsetTime = data.data[21].timings.Sunset;
                          
                              




                          
                                    }else if( hijriday7 ==='الثلاثاء' && lenghts===30 && hijryear7 % 2 ===1){
                                      document.getElementById("leilate_mano").innerHTML = 27;
                                      pirates = 27;
                                      cinqua = 13;
                                   
                              
                                      safe = pirates + cinqua + hijryear7+matlob;                            
                                      vista = safe % 2 + safe % 3 + safe % 7 ;
                                      document.getElementById("total_mano").innerHTML = safe;
                                      document.getElementById("baki_mano").innerHTML = vista;
                                   fajrTime = data.data[27].timings.Fajr;
                                   sunsetTime = data.data[27].timings.Sunset;
                                       }else if( hijriday7 ==='الاربعاء' && lenghts===30 && hijryear7 % 2 ===1){
                                         document.getElementById("leilate_mano").innerHTML = 19;
                                         pirates = 19;
                                         cinqua = 13;
                                      
                                 
                                         safe = pirates + cinqua + hijryear7+matlob;                            
                                         vista = safe % 2 + safe % 3 + safe % 7 ;
                                         document.getElementById("total_mano").innerHTML = safe;
                                         document.getElementById("baki_mano").innerHTML = vista;
                                      fajrTime = data.data[19].timings.Fajr;
                                      sunsetTime = data.data[19].timings.Sunset;
                                          }else if( hijriday7 ==='الخميس' && lenghts===30 && hijryear7 % 2 ===1){
                                            document.getElementById("leilate_mano").innerHTML = 25;
                                            pirates = 25;
                                            cinqua = 13;
                                         
                                    
                                            safe = pirates + cinqua + hijryear7+matlob;                            
                                            vista = safe % 2 + safe % 3 + safe % 7 ;
                                            document.getElementById("total_mano").innerHTML = safe;
                                            document.getElementById("baki_mano").innerHTML = vista;
                                         fajrTime = data.data[25].timings.Fajr;
                                         sunsetTime = data.data[25].timings.Sunset;
                                             }else if( hijriday7 ==='الجمعة' && lenghts===30 && hijryear7 % 2 ===1){
                                               document.getElementById("leilate_mano").innerHTML = 17;
                                               pirates = 17;
                                               cinqua = 13;
                                            
                                       
                                               safe = pirates + cinqua + hijryear7+matlob;                            
                                               vista = safe % 2 + safe % 3 + safe % 7 ;
                                               document.getElementById("total_mano").innerHTML = safe;
                                               document.getElementById("baki_mano").innerHTML = vista;
                                            fajrTime = data.data[17].timings.Fajr;
                                            sunsetTime = data.data[13].timings.Sunset;
                                                }else if( hijriday7 ==='السبت' && lenghts===29 && hijryear7 % 2 ===0){
                                                  document.getElementById("leilate_mano").innerHTML = 28;

                                                  pirates = 28;
                                                  cinqua = 118;
                                               
                                          
                                                  safe = pirates + cinqua + hijryear7+matlob;                            
                                                  vista = safe % 2 + safe % 3 + safe % 7 ;
                                                  document.getElementById("total_mano").innerHTML = safe;
                                                  document.getElementById("baki_mano").innerHTML = vista;
                                               fajrTime = data.data[28].timings.Fajr;
                                               sunsetTime = data.data[28].timings.Sunset;
                                         
                                                   }else if( hijriday7 ==='الاحد' && lenghts===29 && hijryear7 % 2 ===0){
                                                     document.getElementById("leilate_mano").innerHTML = 20;
                                                     pirates = 20;
                                                     cinqua = 118;
                                                  
                                             
                                                     safe = pirates + cinqua + hijryear7+matlob;                            
                                                     vista = safe % 2 + safe % 3 + safe % 7 ;
                                                     document.getElementById("total_mano").innerHTML = safe;
                                                     document.getElementById("baki_mano").innerHTML = vista;
                                                  fajrTime = data.data[20].timings.Fajr;
                                                  sunsetTime = data.data[20].timings.Sunset;
                                            
                                                      }else if( hijriday7 ==='الاثنين' && lenghts===29 && hijryear7 % 2 ===0){
                                                        document.getElementById("leilate_mano").innerHTML = 26;
                                                        pirates = 26;
                                                        cinqua = 118;
                                                     
                                                
                                                        safe = pirates + cinqua + hijryear7+matlob;                            
                                                        vista = safe % 2 + safe % 3 + safe % 7 ;
                                                        document.getElementById("total_mano").innerHTML = safe;
                                                        document.getElementById("baki_mano").innerHTML = vista;
                                                     fajrTime = data.data[26].timings.Fajr;
                                                     sunsetTime = data.data[26].timings.Sunset;
                                               
                                                         }else if( hijriday7 ==='الثلاثاء' && lenghts===29 && hijryear7 % 2 ===0){
                                                           document.getElementById("leilate_mano").innerHTML = 18;
                                                           pirates = 18;
                                                           cinqua = 118;
                                                        
                                                   
                                                           safe = pirates + cinqua + hijryear7+matlob;                            
                                                           vista = safe % 2 + safe % 3 + safe % 7 ;
                                                           document.getElementById("total_mano").innerHTML = safe;
                                                           document.getElementById("baki_mano").innerHTML = vista;
                                                        fajrTime = data.data[18].timings.Fajr;
                                                        sunsetTime = data.data[18].timings.Sunset;
                                                            }else if( hijriday7 ==='الاربعاء' && lenghts===29 && hijryear7 % 2 ===0){
                                                              document.getElementById("leilate_mano").innerHTML = 24;
                                                              pirates = 24;
                                                              cinqua = 118;
                                                           
                                                      
                                                              safe = pirates + cinqua + hijryear7+matlob;                            
                                                              vista = safe % 2 + safe % 3 + safe % 7 ;
                                                              document.getElementById("total_mano").innerHTML = safe;
                                                              document.getElementById("baki_mano").innerHTML = vista;
                                                           fajrTime = data.data[24].timings.Fajr;
                                                           sunsetTime = data.data[24].timings.Sunset;
                                                               }else if( hijriday7 ==='الخميس' && lenghts===29 && hijryear7 % 2 ===0){
                                                                 document.getElementById("leilate_mano").innerHTML = 16;
                                                                 pirates = 16;
                                                                 cinqua = 118;
                                                              
                                                         
                                                                 safe = pirates + cinqua + hijryear7+matlob;                            
                                                                 vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                 document.getElementById("total_mano").innerHTML = safe;
                                                                 document.getElementById("baki_mano").innerHTML = vista;
                                                              fajrTime = data.data[16].timings.Fajr;
                                                              sunsetTime = data.data[16].timings.Sunset;
                                                                  }else if( hijriday7 ==='الجمعة' && lenghts===29 && hijryear7 % 2 ===0){
                                                                    document.getElementById("leilate_mano").innerHTML = 22;
                                                                    pirates = 22;
                                                                    cinqua = 118;
                                                                 
                                                            
                                                                    safe = pirates + cinqua + hijryear7+matlob;                            
                                                                    vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                    document.getElementById("total_mano").innerHTML = safe;
                                                                    document.getElementById("baki_mano").innerHTML = vista;
                                                                 fajrTime = data.data[22].timings.Fajr;
                                                                 sunsetTime = data.data[22].timings.Sunset;
                                                                     }else   if( hijriday7 ==='السبت' && lenghts===29 && hijryear7 % 2 ===1){
                                                                       document.getElementById("leilate_mano").innerHTML = 16;
                                                                       pirates = 16;
                                                                       cinqua = 13;
                                                                    
                                                               
                                                                       safe = pirates + cinqua + hijryear7+matlob;                            
                                                                       vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                       document.getElementById("total_mano").innerHTML = safe;
                                                                       document.getElementById("baki_mano").innerHTML = vista;
                                                                    fajrTime = data.data[16].timings.Fajr;
                                                                    sunsetTime = data.data[16].timings.Sunset;
                                                              
                                                                        }else if( hijriday7 ==='الاحد' && lenghts===29 && hijryear7 % 2 ===1){
                                                                          document.getElementById("leilate_mano").innerHTML = 22;
                                                                          pirates = 22;
                                                                          cinqua = 13;
                                                                       
                                                                  
                                                                          safe = pirates + cinqua + hijryear7+matlob;                            
                                                                          vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                          document.getElementById("total_mano").innerHTML = safe;
                                                                          document.getElementById("baki_mano").innerHTML = vista;
                                                                       fajrTime = data.data[22].timings.Fajr;
                                                                       sunsetTime = data.data[22].timings.Sunset;
                                                                           }else if( hijriday7 ==='الاثنين' && lenghts===29 && hijryear7 % 2 ===1){
                                                                             document.getElementById("leilate_mano").innerHTML = 27;
                                                                             pirates = 27;
                                                                             cinqua = 462;
                                                                          
                                                                     
                                                                             safe = pirates + cinqua + hijryear7+matlob;                            
                                                                             vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                             document.getElementById("total_mano").innerHTML = safe;
                                                                             document.getElementById("baki_mano").innerHTML = vista;
                                                                          fajrTime = data.data[24].timings.Fajr;
                                                                          sunsetTime = data.data[24].timings.Sunset;
                                                                    
                                                                              }else if( hijriday7 ==='الثلاثاء' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                document.getElementById("leilate_mano").innerHTML = 20;
                                                                                pirates = 20;
                                                                                cinqua = 13;
                                                                             
                                                                        
                                                                                safe = pirates + cinqua + hijryear7+matlob;                            
                                                                                vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                document.getElementById("total_mano").innerHTML = safe;
                                                                                document.getElementById("baki_mano").innerHTML = vista;
                                                                             fajrTime = data.data[20].timings.Fajr;
                                                                             sunsetTime = data.data[20].timings.Sunset;
                                                                                 }else if( hijriday7 ==='الاربعاء' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                   document.getElementById("leilate_mano").innerHTML = 26;
                                                                                   pirates = 26;
                                                                                   cinqua = 13;
                                                                                
                                                                           
                                                                                   safe = pirates + cinqua + hijryear7+matlob;                            
                                                                                   vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                   document.getElementById("total_mano").innerHTML = safe;
                                                                                   document.getElementById("baki_mano").innerHTML = vista;
                                                                                fajrTime = data.data[26].timings.Fajr;
                                                                                sunsetTime = data.data[26].timings.Sunset;
                                                                                    }else if( hijriday7 ==='الخميس' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                      document.getElementById("leilate_mano").innerHTML = 18;
                                                                                      pirates = 18;
                                                                                      cinqua = 13;
                                                                                   
                                                                              
                                                                                      safe = pirates + cinqua + hijryear7+matlob;                            
                                                                                      vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                      document.getElementById("total_mano").innerHTML = safe;
                                                                                      document.getElementById("baki_mano").innerHTML = vista;
                                                                                   fajrTime = data.data[18].timings.Fajr;
                                                                                   sunsetTime = data.data[18].timings.Sunset;
                                                                                       }else if( hijriday7 ==='الجمعة' && lenghts===29 && hijryear7 % 2 ===1){
                                                                                         document.getElementById("leilate_mano").innerHTML = 24;
                                                                                         pirates = 24;
                                                                                         cinqua = 13;
                                                                                      
                                                                                 
                                                                                         safe = pirates + cinqua + hijryear7+matlob;                            
                                                                                         vista = safe % 2 + safe % 3 + safe % 7 ;
                                                                                         document.getElementById("total_mano").innerHTML = safe;
                                                                                         document.getElementById("baki_mano").innerHTML = vista;
                                                                                      fajrTime = data.data[24].timings.Fajr;
                                                                                      sunsetTime = data.data[24].timings.Sunset;
                                                                                          }else {
                          console.log("what");
                        }
                       















                       
      


       document.getElementById("year_mano").innerHTML = hijryear1;
       document.getElementById("first_mano").innerHTML = hijriday7;
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
      console.log("tasnimsaid my children i love you forever");
     }


   


   


    





// END test 1 for timing






     }).catch((error) => {
       console.error("Error:", error);
     });


    }


 //End api calendar

 // Get user's current location using Geolocation API
 navigator.geolocation.watchPosition(
   (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

     // Display latitude and longitude on the web page
     document.getElementById("latitude").innerHTML = latitude;
     document.getElementById("longitude").innerHTML = longitude;
   // document.getElementById("timezone").innerHTML = timezone;
     // Call getPrayerTimes function to get prayer times for the user's location
   
     getPrayerTimes1();
   },
   (error) => {
     console.error(error);
   }
 );



















