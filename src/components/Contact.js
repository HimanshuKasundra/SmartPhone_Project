export default function Contact()
{
    return(
        <>
             <div class="container contact-section-3 paddingy border border-dark p-3 mt-2 ">
                <div class="row g-4 ">
                    <div class="col-xxl-5 col-xl-4 col-lg-5 col-md-3 col-sm-12">

                        <img src="https://github.com/Nevilpala/live/blob/main/website/html/parallo/img/call-to-action-3.jpg?raw=true" class="img-fluid h-100" />

                    </div>
                    <div class="col-xxl col-xl col-lg col-md col-sm-12">
                        <div class="contact-content h-100">
                            <section class="mb-4">

                                <h1 class="h1-responsive font-weight-bold text-center my-4">Contact us</h1>

                                <p class="text-center w-responsive mx-auto mb-5">
                                    <h4 className="text-secondary">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                    a matter of hours to help you.</h4>
                                    </p>

                                <div class="row ms-5">


                                    <div class="col-md-9 mb-md-0 mb-5">
                                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                                            <div class="row p-3">


                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                    <label for="name" class="">Your Name:-</label>
                                                        <input type="text" id="name" name="name" class="form-control" placeholder="Enter Your Name" />
                                                       
                                                    </div>
                                                </div>



                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                    <label for="email" class="">Your email:-</label>
                                                        <input type="text" id="email" name="email" placeholder="Enter your Email" class="form-control" />
                                                        
                                                    </div>
                                                </div>


                                            </div>



                                            <div class="row p-3">
                                                <div class="col-md-12">
                                                    <div class="md-form mb-0">
                                                    <label for="subject" class="">Subject:-</label>
                                                        <input type="text" id="subject" placeholder="Enter Your Subject   " name="subject" class="form-control" />
                                                      
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="row p-3">


                                                <div class="col-md-12">

                                                    <div class="md-form">
                                                    <label for="message">Your message:-</label>
                                                        <textarea type="text" id="message" name="Enter Your message" rows="2" class="form-control md-textarea"></textarea>
                                                       
                                                    </div>

                                                </div>
                                            </div>


                                        </form>

                                        <div class="text-center text-md-left">
                                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                        </div>
                                        <div class="status"></div>
                                    </div>



                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}