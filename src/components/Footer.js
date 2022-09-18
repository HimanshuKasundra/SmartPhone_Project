import { Link } from "react-router-dom";

function Footer()
{
    return(
        <>
        <div class="card text-center ">
         
         <div class="card-body">
           <h3 class="card-title">UMIYA MOBILES</h3>
           <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          
         </div>
         <div class="news_content">
           <div class="news_date">OCT 27, 2024</div>
           <div class="header_04"><a href="#">Donec faucibus tortor</a></div>
           <p>Aliquam porttitor nibh in erat porttitor in accumsan dui pulvinar.</p>
         </div>
 
         <ul class="nav flex-column">
           <li class="nav-item">
            <Link className="nav-link active" to="./contact">Contact Us</Link>
           </li>
           {/* <li class="nav-item">
             <a class="nav-link" href="#">LOG In</a>
           </li> */}
           <li class="nav-item">
             <a class="nav-link disabled">Company rules and reglulations</a>
           </li>
         </ul>
        
         <div class="card-header">
          Copyright © 2022 ,Umiya Mobiles Limited  
         </div>
        
       </div>
     </>
    )
}
export default Footer;