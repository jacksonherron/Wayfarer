import React from 'react';
import '../layout/Footer.css';



const Footer = () => {
    return (
    <>
<div>

<footer className="page-footer font-small black bg-footer">

  
  <div className="container">

    
    <div className="row text-center  empty-div d-flex justify-content-center pt-5 mb-3">

      
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!">About us</a>
        </h6>
      </div>
      
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!">Products</a>
        </h6>
      </div>
     
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!">Awards</a>
        </h6>
      </div>

   
     
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!">Contact</a>
        </h6>
      </div>
      

    </div>
    
    <hr className="rgba-white-light" style={{margin: '0 15%;'}} />

   
    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

     
      <div className="col-md-8 col-12 mt-5 paragraph" >
        <p style={{"line-height": '1.7rem'}}>The app world is a constantly changing place, and there are many travel apps out there already that take the pain out of travel. They help you travel better, cheaper, and longer, but none of those travel apps are compared to Wayfarer. The best of the best in 2018-19 and is worth downloading to your phone before your next trip.</p>
      </div>
     

    </div>
    
    <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}} />

    
    <div className="row pb-3">

      
      <div className="col-md-12">

        <div className="mb-5 flex-center links">

          
          <a className="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="pin-ic">
            <i className="fab fa-pinterest fa-lg white-text"> </i>
          </a>

        </div>

      </div>
      

    </div>
    

  
    </div>
    


  <div class="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/" > Wayfarer.com</a>
  </div>
  

</footer>
</div>



</>

    )
}

export default Footer;




