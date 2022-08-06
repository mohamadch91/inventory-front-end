
import './css/login.css'
import React from 'react';
function Login() {


  return (
    <section class="background-radial-gradient overflow-hidden">

    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style={ {Zindex: "10"}} >
          <h1 class="my-5 display-5 fw-bold ls-tight" style={{color:"hsl(218, 81%, 95%)"}}>
            Inventory  <br />
            <span style=
            {{color: "hsl(218, 81%, 75%)"}}>and Gap analyses system</span>
          </h1>
          <p class="mb-5 opacity-70 mt-5" style={{color: "hsl(218, 81%, 85%)"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
  
        <div class="offset-1 col-lg-4 mb-5 mb-lg-0 position-relative mt-5">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
          <div class="card bg-glass  mb-5 mt-5">
            <div class="card-body px-5 py-5 px-md-5 col-md-12">
              <form>
    

  
                <div class="form-outline mb-4 mt-2">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>
  
                
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
  
              
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
  
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
  
           
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Login;
