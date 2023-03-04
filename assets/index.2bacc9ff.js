(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const ya=document.getElementById("menu-bar-icon"),A=document.getElementById("sidebar"),la=document.getElementById("sidebar-list"),L=document.getElementById("filler"),h=document.getElementById("main");document.getElementById("main-container");const D=document.getElementById("season-name"),R=document.getElementById("races"),K=document.getElementById("driver-championship"),F=document.getElementById("constructor-championship"),_=document.getElementById("races-text"),X=document.getElementById("driver-championship-text"),aa=document.getElementById("constructor-championship-text"),T=document.getElementById("footer"),ua=document.getElementById("en-language"),Aa=document.getElementById("pl-language"),G=document.getElementById("sidebar-title"),g=document.getElementById("navbar"),ha=document.getElementById("email-button"),H=document.getElementById("email-icon"),P=document.getElementById("email-popup"),w=document.getElementById("main-content"),ta=document.getElementById("footer-author"),ga=document.getElementById("theme-switch"),ba=document.getElementById("theme-slider"),Sa=200;let ea=!1,ia=window.innerHeight;function pa(){window.addEventListener("resize",()=>{clearTimeout(ea),ea=setTimeout(()=>{(window.innerHeight===ia||window.innerWidth>850)&&(A.classList.remove("sidebar-slide"),h.classList.remove("main-slide"),L.classList.remove("filler-slide"),g.classList.remove("navbar-slide"),A.classList.remove("sidebar-hide"),L.classList.remove("filler-hide"),h.classList.remove("main-hide"),g.classList.remove("navbar-hide"),H.style.visibility="visible",T.style.visibility="visible"),ia=window.innerHeight},Sa)})}function fa(){ya.addEventListener("click",()=>{H.style.visibility="hidden",T.style.visibility="hidden",A.classList.add("sidebar-slide"),L.classList.add("filler-slide"),h.classList.add("main-slide"),g.classList.add("navbar-slide"),A.classList.remove("sidebar-hide"),L.classList.remove("filler-hide"),h.classList.remove("main-hide"),g.classList.remove("navbar-hide"),P.classList.remove("show-popup"),L.addEventListener("click",()=>{H.style.visibility="visible",T.style.visibility="visible",A.classList.remove("sidebar-slide"),h.classList.remove("main-slide"),L.classList.remove("filler-slide"),g.classList.remove("navbar-slide"),A.classList.add("sidebar-hide"),L.classList.add("filler-hide"),h.classList.add("main-hide"),g.classList.add("navbar-hide")})})}function La(){const a=document.getElementById("sidebar-button-wrapper"),t=new Date().getFullYear();for(let i=t;i>1949;i--){const n=document.createElement("li"),e=document.createElement("button");e.classList.add("sidebar-button"),e.setAttribute("fetch-button",""),e.id=i,e.innerHTML=i,n.append(e),a.append(n)}}const f="#19838A",$="#136567",B="#c51b29",x="#a31621",ra="#19838A",va="#136567",O="#c51b29",Ma="#a31621";function V(a){a==="races"?(R.style.backgroundColor=B,K.style.backgroundColor=f,F.style.backgroundColor=f):a==="driverChampionship"?(R.style.backgroundColor=f,K.style.backgroundColor=B,F.style.backgroundColor=f):a==="constructorChampionship"&&(R.style.backgroundColor=f,K.style.backgroundColor=f,F.style.backgroundColor=B)}function Ba(a){document.getElementById(a).style.backgroundColor=O,document.getElementById("races").style.backgroundColor=B}function Ia(a){a?w.innerHTML='<div id="loading-screen" class="loading-screen-dark"></div>':w.innerHTML='<div id="loading-screen" class="loading-screen"></div>';const t=document.createElement("img");t.src=new URL(""+new URL("tire.72398dc4.png",import.meta.url).href,self.location),t.className="loading-image",document.getElementById("loading-screen").appendChild(t)}const z="f1",ka=(a,t)=>{let i=JSON.parse(localStorage.getItem(z));i?i[a]={data:t,updateDate:new Date().toISOString()}:i={[a]:{data:t,updateDate:new Date().toISOString()}},localStorage.setItem(z,JSON.stringify(i))},Ea=a=>{const t=JSON.parse(localStorage.getItem(z));return t?t[a]:null},na=async(a,t,i)=>{Ia(i);const e=await(await fetch("https://ergast.com/api/f1/"+t+".json")).json();return ka(a,e),e},J=async(a,t,i)=>{const n=Ea(a);if(n){const e=new Date(n.updateDate).getDate(),o=new Date(n.updateDate).getMonth()+1,d=new Date().getDate(),l=new Date().getMonth()+1;return e!=d||o!=l?na(a,t,i):n.data}else return na(a,t,i)};var Z=[{CCA2:"AD",Name:"Andorra",Nationality:"Andorran"},{CCA2:"AE",Name:"UAE",Nationality:"Emirati"},{CCA2:"AF",Name:"Afghanistan",Nationality:"Afghan"},{CCA2:"AG",Name:"Antigua and Barbuda",Nationality:"Antiguan, Barbudan"},{CCA2:"AI",Name:"Anguilla",Nationality:"Anguillian"},{CCA2:"AL",Name:"Albania",Nationality:"Albanian"},{CCA2:"AM",Name:"Armenia",Nationality:"Armenian"},{CCA2:"AO",Name:"Angola",Nationality:"Angolan"},{CCA2:"AR",Name:"Argentina",Nationality:"Argentine"},{CCA2:"AT",Name:"Austria",Nationality:"Austrian"},{CCA2:"AU",Name:"Australia",Nationality:"Australian"},{CCA2:"AW",Name:"Aruba",Nationality:"Aruban"},{CCA2:"AZ",Name:"Azerbaijan",Nationality:"Azerbaijani"},{CCA2:"BA",Name:"Bosnia and Herzegovina",Nationality:"Bosnian, Herzegovinian"},{CCA2:"BB",Name:"Barbados",Nationality:"Barbadian"},{CCA2:"BD",Name:"Bangladesh",Nationality:"Bangladeshi"},{CCA2:"BE",Name:"Belgium",Nationality:"Belgian"},{CCA2:"BF",Name:"Burkina Faso",Nationality:"Burkinabe"},{CCA2:"BG",Name:"Bulgaria",Nationality:"Bulgarian"},{CCA2:"BH",Name:"Bahrain",Nationality:"Bahraini"},{CCA2:"BI",Name:"Burundi",Nationality:"Burundian"},{CCA2:"BJ",Name:"Benin",Nationality:"Beninese"},{CCA2:"BL",Name:"Saint Barth\xE9lemy",Nationality:"Saint Barth\xE9lemy Islander"},{CCA2:"BM",Name:"Bermuda",Nationality:"Bermudian"},{CCA2:"BN",Name:"Brunei",Nationality:"Bruneian"},{CCA2:"BO",Name:"Bolivia",Nationality:"Bolivian"},{CCA2:"BR",Name:"Brazil",Nationality:"Brazilian"},{CCA2:"BS",Name:"Bahamas",Nationality:"Bahamian"},{CCA2:"BT",Name:"Bhutan",Nationality:"Bhutanese"},{CCA2:"BW",Name:"Botswana",Nationality:"Motswana"},{CCA2:"BY",Name:"Belarus",Nationality:"Belarusian"},{CCA2:"BZ",Name:"Belize",Nationality:"Belizean"},{CCA2:"CA",Name:"Canada",Nationality:"Canadian"},{CCA2:"CC",Name:"Cocos [Keeling] Islands",Nationality:"Cocos Islander"},{CCA2:"CD",Name:"Congo - Kinshasa",Nationality:"Congolese"},{CCA2:"CF",Name:"Central African Republic",Nationality:"Central African"},{CCA2:"CG",Name:"Congo - Brazzaville",Nationality:"Congolese"},{CCA2:"CH",Name:"Switzerland",Nationality:"Swiss"},{CCA2:"CI",Name:"C\xF4te d\u2019Ivoire",Nationality:"Ivorian"},{CCA2:"CK",Name:"Cook Islands",Nationality:"Cook Islander"},{CCA2:"CL",Name:"Chile",Nationality:"Chilean"},{CCA2:"CM",Name:"Cameroon",Nationality:"Cameroonian"},{CCA2:"CN",Name:"China",Nationality:"Chinese"},{CCA2:"CO",Name:"Colombia",Nationality:"Colombian"},{CCA2:"CR",Name:"Costa Rica",Nationality:"Costa Rican"},{CCA2:"CS",Name:"Serbia and Montenegro",Nationality:"Montenegrins, Serbs"},{CCA2:"CU",Name:"Cuba",Nationality:"Cuban"},{CCA2:"CV",Name:"Cape Verde",Nationality:"Cape Verdian"},{CCA2:"CX",Name:"Christmas Island",Nationality:"Christmas Island"},{CCA2:"CY",Name:"Cyprus",Nationality:"Cypriot"},{CCA2:"CZ",Name:"Czech Republic",Nationality:"Czech"},{CCA2:"DE",Name:"Germany",Nationality:"German"},{CCA2:"DJ",Name:"Djibouti",Nationality:"Djibouti"},{CCA2:"DK",Name:"Denmark",Nationality:"Danish"},{CCA2:"DM",Name:"Dominica",Nationality:"Dominican"},{CCA2:"DO",Name:"Dominican Republic",Nationality:"Dominican"},{CCA2:"DZ",Name:"Algeria",Nationality:"Algerian"},{CCA2:"EC",Name:"Ecuador",Nationality:"Ecuadorean"},{CCA2:"EE",Name:"Estonia",Nationality:"Estonian"},{CCA2:"EG",Name:"Egypt",Nationality:"Egyptian"},{CCA2:"EH",Name:"Western Sahara",Nationality:"Sahrawi"},{CCA2:"ER",Name:"Eritrea",Nationality:"Eritrean"},{CCA2:"ES",Name:"Spain",Nationality:"Spanish"},{CCA2:"ET",Name:"Ethiopia",Nationality:"Ethiopian"},{CCA2:"FI",Name:"Finland",Nationality:"Finnish"},{CCA2:"FJ",Name:"Fiji",Nationality:"Fijian"},{CCA2:"FK",Name:"Falkland Islands",Nationality:"Falkland Islander"},{CCA2:"FM",Name:"Micronesia",Nationality:"Micronesian"},{CCA2:"FO",Name:"Faroe Islands",Nationality:"Faroese"},{CCA2:"FR",Name:"France",Nationality:"French"},{CCA2:"GA",Name:"Gabon",Nationality:"Gabonese"},{CCA2:"GB",Name:"UK",Nationality:"British"},{CCA2:"GD",Name:"Grenada",Nationality:"Grenadian"},{CCA2:"GE",Name:"Georgia",Nationality:"Georgian"},{CCA2:"GG",Name:"Guernsey",Nationality:"Channel Islander"},{CCA2:"GH",Name:"Ghana",Nationality:"Ghanaian"},{CCA2:"GI",Name:"Gibraltar",Nationality:"Gibraltar"},{CCA2:"GL",Name:"Greenland",Nationality:"Greenlandic"},{CCA2:"GM",Name:"Gambia",Nationality:"Gambian"},{CCA2:"GN",Name:"Guinea",Nationality:"Guinean"},{CCA2:"GP",Name:"Guadeloupe",Nationality:"Guadeloupian"},{CCA2:"GQ",Name:"Equatorial Guinea",Nationality:"Equatorial Guinean"},{CCA2:"GR",Name:"Greece",Nationality:"Greek"},{CCA2:"GS",Name:"South Georgia and the South Sandwich Islands",Nationality:"South Georgia and the South Sandwich Islander"},{CCA2:"GT",Name:"Guatemala",Nationality:"Guatemalan"},{CCA2:"GU",Name:"Guam",Nationality:"Guamanian"},{CCA2:"GW",Name:"Guinea-Bissau",Nationality:"Guinea-Bissauan"},{CCA2:"GY",Name:"Guyana",Nationality:"Guyanese"},{CCA2:"HK",Name:"Hong Kong SAR China",Nationality:"Chinese"},{CCA2:"HM",Name:"Heard Island and McDonald Islands",Nationality:"Heard and McDonald Islander"},{CCA2:"HN",Name:"Honduras",Nationality:"Honduran"},{CCA2:"HR",Name:"Croatia",Nationality:"Croatian"},{CCA2:"HT",Name:"Haiti",Nationality:"Haitian"},{CCA2:"HU",Name:"Hungary",Nationality:"Hungarian"},{CCA2:"ID",Name:"Indonesia",Nationality:"Indonesian"},{CCA2:"IE",Name:"Ireland",Nationality:"Irish"},{CCA2:"IL",Name:"Israel",Nationality:"Israeli"},{CCA2:"IM",Name:"Isle of Man",Nationality:"Manx"},{CCA2:"IN",Name:"India",Nationality:"Indian"},{CCA2:"IQ",Name:"Iraq",Nationality:"Iraqi"},{CCA2:"IR",Name:"Iran",Nationality:"Iranian"},{CCA2:"IS",Name:"Iceland",Nationality:"Icelander"},{CCA2:"IT",Name:"Italy",Nationality:"Italian"},{CCA2:"JE",Name:"Jersey",Nationality:"Channel Islander"},{CCA2:"JM",Name:"Jamaica",Nationality:"Jamaican"},{CCA2:"JO",Name:"Jordan",Nationality:"Jordanian"},{CCA2:"JP",Name:"Japan",Nationality:"Japanese"},{CCA2:"KE",Name:"Kenya",Nationality:"Kenyan"},{CCA2:"KG",Name:"Kyrgyzstan",Nationality:"Kirghiz"},{CCA2:"KH",Name:"Cambodia",Nationality:"Cambodian"},{CCA2:"KI",Name:"Kiribati",Nationality:"I-Kiribati"},{CCA2:"KM",Name:"Comoros",Nationality:"Comoran"},{CCA2:"KN",Name:"Saint Kitts and Nevis",Nationality:"Kittian and Nevisian"},{CCA2:"KP",Name:"North Korea",Nationality:"North Korean"},{CCA2:"KR",Name:"Korea",Nationality:"South Korean"},{CCA2:"KW",Name:"Kuwait",Nationality:"Kuwaiti"},{CCA2:"KY",Name:"Cayman Islands",Nationality:"Caymanian"},{CCA2:"KZ",Name:"Kazakhstan",Nationality:"Kazakhstani"},{CCA2:"LA",Name:"Laos",Nationality:"Laotian"},{CCA2:"LB",Name:"Lebanon",Nationality:"Lebanese"},{CCA2:"LC",Name:"Saint Lucia",Nationality:"Saint Lucian"},{CCA2:"LI",Name:"Liechtenstein",Nationality:"Liechtensteiner"},{CCA2:"LK",Name:"Sri Lanka",Nationality:"Sri Lankan"},{CCA2:"LR",Name:"Liberia",Nationality:"Liberian"},{CCA2:"LS",Name:"Lesotho",Nationality:"Mosotho"},{CCA2:"LT",Name:"Lithuania",Nationality:"Lithuanian"},{CCA2:"LU",Name:"Luxembourg",Nationality:"Luxembourger"},{CCA2:"LV",Name:"Latvia",Nationality:"Latvian"},{CCA2:"LY",Name:"Libya",Nationality:"Libyan"},{CCA2:"MA",Name:"Morocco",Nationality:"Moroccan"},{CCA2:"MC",Name:"Monaco",Nationality:"Monegasque"},{CCA2:"MD",Name:"Moldova",Nationality:"Moldovan"},{CCA2:"ME",Name:"Montenegro",Nationality:"Montenegrin"},{CCA2:"MF",Name:"Saint Martin",Nationality:"Saint Martin Islander"},{CCA2:"MG",Name:"Madagascar",Nationality:"Malagasy"},{CCA2:"MH",Name:"Marshall Islands",Nationality:"Marshallese"},{CCA2:"MI",Name:"Midway Islands",Nationality:"NULL"},{CCA2:"MK",Name:"Macedonia",Nationality:"Macedonian"},{CCA2:"ML",Name:"Mali",Nationality:"Malian"},{CCA2:"MM",Name:"Myanmar [Burma]",Nationality:"Myanmar"},{CCA2:"MN",Name:"Mongolia",Nationality:"Mongolian"},{CCA2:"MO",Name:"Macau SAR China",Nationality:"Chinese"},{CCA2:"MQ",Name:"Martinique",Nationality:"French"},{CCA2:"MR",Name:"Mauritania",Nationality:"Mauritanian"},{CCA2:"MS",Name:"Montserrat",Nationality:"Montserratian"},{CCA2:"MT",Name:"Malta",Nationality:"Maltese"},{CCA2:"MU",Name:"Mauritius",Nationality:"Mauritian"},{CCA2:"MV",Name:"Maldives",Nationality:"Maldivan"},{CCA2:"MW",Name:"Malawi",Nationality:"Malawian"},{CCA2:"MX",Name:"Mexico",Nationality:"Mexican"},{CCA2:"MY",Name:"Malaysia",Nationality:"Malaysian"},{CCA2:"MZ",Name:"Mozambique",Nationality:"Mozambican"},{CCA2:"NA",Name:"Namibia",Nationality:"Namibian"},{CCA2:"NC",Name:"New Caledonia",Nationality:"New Caledonian"},{CCA2:"NE",Name:"Niger",Nationality:"Nigerian"},{CCA2:"NF",Name:"Norfolk Island",Nationality:"Norfolk Islander"},{CCA2:"NG",Name:"Nigeria",Nationality:"Nigerian"},{CCA2:"NI",Name:"Nicaragua",Nationality:"Nicaraguan"},{CCA2:"NL",Name:"Netherlands",Nationality:"Dutch"},{CCA2:"NO",Name:"Norway",Nationality:"Norwegian"},{CCA2:"NP",Name:"Nepal",Nationality:"Nepalese"},{CCA2:"NR",Name:"Nauru",Nationality:"Nauruan"},{CCA2:"NU",Name:"Niue",Nationality:"Niuean"},{CCA2:"NZ",Name:"New Zealand",Nationality:"New Zealander"},{CCA2:"OM",Name:"Oman",Nationality:"Omani"},{CCA2:"PA",Name:"Panama",Nationality:"Panamanian"},{CCA2:"PE",Name:"Peru",Nationality:"Peruvian"},{CCA2:"PF",Name:"French Polynesia",Nationality:"French Polynesian"},{CCA2:"PG",Name:"Papua New Guinea",Nationality:"Papua New Guinean"},{CCA2:"PH",Name:"Philippines",Nationality:"Filipino"},{CCA2:"PK",Name:"Pakistan",Nationality:"Pakistani"},{CCA2:"PL",Name:"Poland",Nationality:"Polish"},{CCA2:"PM",Name:"Saint Pierre and Miquelon",Nationality:"French"},{CCA2:"PN",Name:"Pitcairn Islands",Nationality:"Pitcairn Islander"},{CCA2:"PR",Name:"Puerto Rico",Nationality:"Puerto Rican"},{CCA2:"PS",Name:"Palestinian Territories",Nationality:"Palestinian"},{CCA2:"PT",Name:"Portugal",Nationality:"Portuguese"},{CCA2:"PW",Name:"Palau",Nationality:"Palauan"},{CCA2:"PY",Name:"Paraguay",Nationality:"Paraguayan"},{CCA2:"QA",Name:"Qatar",Nationality:"Qatari"},{CCA2:"RE",Name:"R\xE9union",Nationality:"French"},{CCA2:"RO",Name:"Romania",Nationality:"Romanian"},{CCA2:"RS",Name:"Serbia",Nationality:"Serbian"},{CCA2:"RU",Name:"Russia",Nationality:"Russian"},{CCA2:"RW",Name:"Rwanda",Nationality:"Rwandan"},{CCA2:"SA",Name:"Saudi Arabia",Nationality:"Saudi Arabian"},{CCA2:"SB",Name:"Solomon Islands",Nationality:"Solomon Islander"},{CCA2:"SC",Name:"Seychelles",Nationality:"Seychellois"},{CCA2:"SD",Name:"Sudan",Nationality:"Sudanese"},{CCA2:"SE",Name:"Sweden",Nationality:"Swedish"},{CCA2:"SG",Name:"Singapore",Nationality:"Singaporean"},{CCA2:"SH",Name:"Saint Helena",Nationality:"Saint Helenian"},{CCA2:"SI",Name:"Slovenia",Nationality:"Slovene"},{CCA2:"SJ",Name:"Svalbard and Jan Mayen",Nationality:"Norwegian"},{CCA2:"SK",Name:"Slovakia",Nationality:"Slovak"},{CCA2:"SL",Name:"Sierra Leone",Nationality:"Sierra Leonean"},{CCA2:"SM",Name:"San Marino",Nationality:"Sammarinese"},{CCA2:"SN",Name:"Senegal",Nationality:"Senegalese"},{CCA2:"SO",Name:"Somalia",Nationality:"Somali"},{CCA2:"SR",Name:"Suriname",Nationality:"Surinamer"},{CCA2:"ST",Name:"S\xE3o Tom\xE9 and Pr\xEDncipe",Nationality:"Sao Tomean"},{CCA2:"SV",Name:"El Salvador",Nationality:"Salvadoran"},{CCA2:"SY",Name:"Syria",Nationality:"Syrian"},{CCA2:"SZ",Name:"Swaziland",Nationality:"Swazi"},{CCA2:"TC",Name:"Turks and Caicos Islands",Nationality:"Turks and Caicos Islander"},{CCA2:"TD",Name:"Chad",Nationality:"Chadian"},{CCA2:"TF",Name:"French Southern Territories",Nationality:"French"},{CCA2:"TG",Name:"Togo",Nationality:"Togolese"},{CCA2:"TH",Name:"Thailand",Nationality:"Thai"},{CCA2:"TJ",Name:"Tajikistan",Nationality:"Tadzhik"},{CCA2:"TK",Name:"Tokelau",Nationality:"Tokelauan"},{CCA2:"TL",Name:"Timor-Leste",Nationality:"East Timorese"},{CCA2:"TM",Name:"Turkmenistan",Nationality:"Turkmen"},{CCA2:"TN",Name:"Tunisia",Nationality:"Tunisian"},{CCA2:"TO",Name:"Tonga",Nationality:"Tongan"},{CCA2:"TR",Name:"Turkey",Nationality:"Turkish"},{CCA2:"TT",Name:"Trinidad and Tobago",Nationality:"Trinidadian"},{CCA2:"TV",Name:"Tuvalu",Nationality:"Tuvaluan"},{CCA2:"TW",Name:"Taiwan",Nationality:"Taiwanese"},{CCA2:"TZ",Name:"Tanzania",Nationality:"Tanzanian"},{CCA2:"UA",Name:"Ukraine",Nationality:"Ukrainian"},{CCA2:"UG",Name:"Uganda",Nationality:"Ugandan"},{CCA2:"US",Name:"USA",Nationality:"American"},{CCA2:"US",Name:"United States",Nationality:"American"},{CCA2:"UY",Name:"Uruguay",Nationality:"Uruguayan"},{CCA2:"UZ",Name:"Uzbekistan",Nationality:"Uzbekistani"},{CCA2:"VA",Name:"Vatican City",Nationality:"Italian"},{CCA2:"VC",Name:"Saint Vincent and the Grenadines",Nationality:"Saint Vincentian"},{CCA2:"VE",Name:"Venezuela",Nationality:"Venezuelan"},{CCA2:"VI",Name:"U.S. Virgin Islands",Nationality:"Virgin Islander"},{CCA2:"VN",Name:"Vietnam",Nationality:"Vietnamese"},{CCA2:"VU",Name:"Vanuatu",Nationality:"Ni-Vanuatu"},{CCA2:"WF",Name:"Wallis and Futuna",Nationality:"Wallis and Futuna Islander"},{CCA2:"WS",Name:"Samoa",Nationality:"Samoan"},{CCA2:"YE",Name:"Yemen",Nationality:"Yemeni"},{CCA2:"YT",Name:"Mayotte",Nationality:"French"},{CCA2:"ZA",Name:"South Africa",Nationality:"South African"},{CCA2:"ZM",Name:"Zambia",Nationality:"Zambian"},{CCA2:"ZW",Name:"Zimbabwe",Nationality:"Zimbabwean"}];function sa(a){var t;return(t=Z.find(i=>i.Nationality===a))==null?void 0:t.CCA2.toLowerCase()}function Ca(a){var t;return(t=Z.find(i=>i.Nationality===a))==null?void 0:t.Name}function Ta(a){var t;return(t=Z.find(i=>i.Name===a))==null?void 0:t.CCA2.toLowerCase()}async function da(a,t,i){var d,l,b,y,S,p,u,N,k,E;const n="https://flagcdn.com/";let e="";e+=`
    <table>
      <thead>
        <tr>`,a==="en"?e+=`
          <th> Position </th>
          <th> Driver </th>
          <th> Number </th>
          <th> Country </th>
          <th> Team </th>
          <th> Points </th>`:a==="pl"&&(e+=`
          <th> Pozycja </th>
          <th> Kierowca </th>
          <th> Numer </th>
          <th> Kraj </th>
          <th> Zesp\xF3\u0142 </th>
          <th> Ilo\u015B\u0107 punkt\xF3w </th>`),e+=`
        </tr>
      </thead>
    <tbody>`;const o=await J(t+"Drivers",t+"/driverStandings",i);for(const r of o.MRData.StandingsTable.StandingsLists[0].DriverStandings)i?e+="<tr class='tr-dark'>":e+="<tr>",e+=`
        <td> ${(d=r.position)!=null?d:"-"} </td>
        <td style="min-width: 180px;" class="emphasise"> 
          <a href="${(l=r.Driver.url)!=null?l:""}" target="_blank"> 
            ${(b=r.Driver.givenName)!=null?b:"-"} ${(y=r.Driver.familyName)!=null?y:"-"} 
          </a> 
        </td>
        <td> ${(S=r.Driver.permanentNumber)!=null?S:"-"} </td>
        <td title="${Ca(r.Driver.nationality)}" style="min-width: 60px;"> 
          <img class="flag" 
            src="${n}${sa((p=r.Driver.nationality)!=null?p:"-")}.svg" 
            alt="${(u=r.Driver.nationality)!=null?u:"-"}"> 
        </td>
        <td style="min-width: 120px;"> ${(k=(N=r==null?void 0:r.Constructors[0])==null?void 0:N.name)!=null?k:"-"} </td>
        <td style="min-width: 130px;" class="emphasise"> ${(E=r.points)!=null?E:"-"} </td>
      </tr>`;e+=`
    </tbody>
  </table>`,w.innerHTML=e}async function Na(a,t,i){var d,l,b,y,S,p,u;const n="https://flagcdn.com/";let e="";e+=`
    <table>
      <thead>
        <tr>`,a==="en"?e+=`
          <th> Position </th>
          <th> Constructor </th>
          <th> Country </th>
          <th> Points </th>`:a==="pl"&&(e+=`<th> Pozycja </th>
          <th> Zesp\xF3\u0142 </th>
          <th> Kraj </th>
          <th> Ilo\u015B\u0107 punkt\xF3w </th>`),e+=`
        </tr>
      </thead>
    <tbody>`;const o=await J(t+"Constructors",t+"/constructorStandings",i);for(const N of o.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)i?e+="<tr class='tr-dark'>":e+="<tr>",e+=`
        <td> ${(d=N.position)!=null?d:"-"} </td>
        <td style="min-width: 120px" class="emphasise"> 
          <a href="${(l=N.Constructor.url)!=null?l:"-"}" target="_blank"> 
            ${(b=N.Constructor.name)!=null?b:"-"} 
          </a> 
        </td>
        <td title="${Ca((y=N.Constructor.nationality)!=null?y:"-")}">  
        <img class="flag" 
          src="${n}${sa((S=N.Constructor.nationality)!=null?S:"-")}.svg" 
          alt="${(p=N.Constructor.nationality)!=null?p:"-"}"> 
        </td>
        <td style="min-width: 120px" class="emphasise"> ${(u=N.points)!=null?u:"-"} </td>
      </tr>`;e+=`
    </tbody>
  </table>`,w.innerHTML=e}const oa=a=>{const t=a.getUTCDate().toString().padStart(2,"0"),i=(a.getMonth()+1).toString().padStart(2,"0"),n=a.getFullYear(),e=a.getHours().toString().padStart(2,"0"),o=a.getMinutes().toString().padStart(2,"0");return t+"."+i+"."+n+" "+e+":"+o+" "};async function W(a,t,i){const n="https://flagcdn.com/";let e=!1,o="";o+=`
    <table>
      <thead>
        <tr>`,a==="en"?o+=`
          <th> Round </th>
          <th> Country </th>
          <th> Grand Prix </th>
          <th> Qualifying </th>
          <th> Race </th>
          <th> Circuit </th>`:a==="pl"&&(o+=`
          <th> Runda </th>
          <th> Kraj </th>
          <th> Grand Prix </th>
          <th> Kwalifikacje </th>
          <th> Wy\u015Bcig </th>
          <th> Nazwa toru </th>`),o+=`
        </tr>
      </thead>
    <tbody>`,(await J(t+"Races",t,i)).MRData.RaceTable.Races.map(l=>{var u,N,k,E,r,Q,q;const b=l.date&&l.time?l.date+"T"+l.time:"-",y=new Date(b),S=l.Qualifying&&l.Qualifying.date&&l.Qualifying.time?l.Qualifying.date+"T"+l.Qualifying.time:"-",p=new Date(S);y>Date.now()&&!e?(o+="<tr class='tr-next-race'>",e=!0):i?o+="<tr class='tr-dark'>":o+="<tr>",o+=`
        <td style="min-width: 20px;"> ${(u=l.round)!=null?u:"-"} </td>
        <td title="${(N=l.Circuit.Location.country)!=null?N:"-"}" style="min-width: 60px;"> 
          <img class="flag" 
            src="${n}${Ta((k=l.Circuit.Location.country)!=null?k:"-")}.svg" 
            alt="${(E=l.Circuit.Location.country)!=null?E:"-"}"/> 
        </td>
        <td style="min-width: 230px;" class="race-name"> 
          <a href="${(r=l.url)!=null?r:"-"}" target="_blank"> 
            ${(Q=l.raceName)!=null?Q:"-"}
          <a/>
        </td>
        <td style="min-width: 100px;" class="qualifying-date"> ${l.Qualifying?oa(p):"-"}</td>
        <td style="min-width: 110px;" class="race-date"> ${l.time?oa(y):"-"}</td>
        <td style="min-width: 300px;"> ${(q=l.Circuit.circuitName)!=null?q:"-"} </td>
      </tr>`}),o+=`
    </tbody>
  </table>`,w.innerHTML=o}function j(a,t,i,n){a==="races"?W(i,t,n):a==="driverChampionship"?da(i,t,n):a==="constructorChampionship"&&Na(i,t,n)}function ma(a,t){t==="en"?D.innerHTML="Season "+a:t==="pl"&&(D.innerHTML="Sezon "+a)}function wa(a){a==="en"?G.innerHTML="Season":a==="pl"&&(G.innerHTML="Sezon")}function Da(a){a==="en"?(_.innerHTML="Races",aa.innerHTML="Constructor standings",X.innerHTML="Driver standings"):a==="pl"&&(_.innerHTML="Wy\u015Bcigi",aa.innerHTML="Mistrzostwa konstruktor\xF3w",X.innerHTML="Mistrzostwa kierowc\xF3w")}function Ga(a){a==="en"?P.innerHTML="Email copied to clipboard!":a==="pl"&&(P.innerHTML="Email skopiowany do schowka!")}function Ha(a){a==="en"?ta.innerHTML="Author: Karol Stawowski":a==="pl"&&(ta.innerHTML="Autor: Karol Stawowski")}function Y(a,t){ma(a,t),wa(t),Da(t),Ga(t),Ha(t)}function Pa(a,t,i){const n=new Date;n.setTime(n.getTime()+i*60*60*1e3);const e="expires="+n.toUTCString();document.cookie=a+"="+t+";"+e+";path=/"}function Ra(a){const n=document.cookie.replace(/ /g,"").split(";").find(e=>e.startsWith(a));if(!!n)return n.split("=")[1]}let m="races",s=new Date().getFullYear(),C="en",c=Ra("isF1WebsiteDarkTheme")==="true";const Ka=48;pa();fa();La();Ba(s);Y(s,C);W(C,s,c);const U=document.querySelectorAll("button[fetch-button]");ca(document.getElementById(s));c&&(h.classList.add("darktheme"),D.classList.add("darktheme"),A.classList.add("darktheme"),la.classList.add("darktheme"),G.classList.add("darktheme"),g.classList.add("darktheme"),T.classList.add("darktheme"),ba.checked=!0);ga.addEventListener("change",()=>{c=!c,Pa("isF1WebsiteDarkTheme",c,Ka),h.classList.toggle("darktheme"),D.classList.toggle("darktheme"),A.classList.toggle("darktheme"),la.classList.toggle("darktheme"),G.classList.toggle("darktheme"),g.classList.toggle("darktheme"),T.classList.toggle("darktheme");let a=document.getElementsByTagName("tr");for(let t of a)t.classList.toggle("tr-dark")});ua.addEventListener("click",()=>{C==="pl"&&(C="en",j(m,s,C,c),Y(s,C))});Aa.addEventListener("click",()=>{C==="en"&&(C="pl",j(m,s,C,c),Y(s,C))});U.forEach(a=>{a.addEventListener("click",()=>{s=parseInt(a.id),ca(document.getElementById(s)),j(m,s,C,c),ma(s,C),U.forEach(t=>{t.style.backgroundColor=ra}),a.style.backgroundColor=O})});function ca(a){U.forEach(t=>{t.addEventListener("mouseover",()=>{t.style.backgroundColor=va}),t.addEventListener("mouseout",()=>{t.style.backgroundColor=ra})}),a.addEventListener("mouseover",()=>{a.style.backgroundColor=Ma}),a.addEventListener("mouseout",()=>{a.style.backgroundColor=O})}const I=document.getElementById("races");I.addEventListener("click",function(){W(C,s,c),V(m="races")});const v=document.getElementById("driver-championship");v.addEventListener("click",function(){da(C,s,c),V(m="driverChampionship")});const M=document.getElementById("constructor-championship");M.addEventListener("click",function(){Na(C,s,c),V(m="constructorChampionship")});I.addEventListener("mouseover",()=>{m==="races"?I.style.background=x:I.style.background=$});M.addEventListener("mouseover",()=>{m==="constructorChampionship"?M.style.backgroundColor=x:M.style.backgroundColor=$,M.style.transition="background-color 0.1s ease-in"});v.addEventListener("mouseover",()=>{m==="driverChampionship"?v.style.backgroundColor=x:v.style.backgroundColor=$,v.style.transition="background-color 0.1s ease-in"});const Fa=[I,M,v];Fa.forEach(a=>a.addEventListener("mouseout",()=>{a.style.backgroundColor=f,m==="races"?I.style.backgroundColor=B:m==="driverChampionship"?v.style.backgroundColor=B:m==="constructorChampionship"&&(M.style.backgroundColor=B)}));H.addEventListener("click",()=>{navigator.clipboard.writeText("stawowski.dev@gmail.com")});ha.addEventListener("click",()=>{P.classList.toggle("show-popup")});
