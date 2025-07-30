// app/cosmetic/page.tsx 
import Head from 'next/head';
import { ContactForm } from '@/components/ContactForm';

const CosmeticPage = () => {
  return (
    <>
      <Head>
        <title>Premium Skin Treatments | Top Medical & Cosmetics Hub</title>
        <meta name="description" content="Based in Melbourne, TMCH provides premium skin treatments, specialising in acne, tattoo & pigment removal, & anti-aging solutions. Reach out to us today!" />
        <meta name="keywords" content="premium skin treatments in melbourne, aesthetic skin treatments, acne treatment, tattoo removal, pigmel removal, anti-aging treatments" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>

      <div id="wrapper">
        <header className="backgroundable">
          <div className="banner_cover"></div>
          <div className="container">
            <div className="row flex_center">
              {/* Header content */}
            </div>
            <div id="banner" className="row">
              <div id="banner1" className="col-lg-8 col-md-10 col-sm-12">
                <h1>State-Of-The-Art Cosmetic<br />&amp; Aesthetic Skin Treatments</h1>
                <p>Targeted Treatments for Acne, Pigmentation, Tattoos, Anti-aging, &amp; More</p>
                <p><a className="btn" href="#contact">Contact us!</a></p>
              </div>
            </div>
          </div>
        </header>

        <div id="content" className="backgroundable">
          {/* All your content sections */}
        </div>

        <div id="services" className="backgroundable">
          {/* Services section */}
        </div>

        <div id="contact" className="backgroundable">
          <div className="container">
            <div className="row">
              <div id="contact1" className="col-sm-8">
                <div id="contact1a">
                  <h3><strong>Fill In The Form Below Or Give Us Call To Make &amp; Appointment&nbsp;</strong></h3>
                </div>
                <ContactForm />
                <div id="contact1b">
                  <p><img alt="" src="/uploads/images/logo-w%4072x.png" style={{width:'200px',height:'120px'}} className="img-responsive" /></p>
                </div>
              </div>
              <div id="contact2" className="col-sm-4">
                {/* Contact info */}
              </div>
            </div>
          </div>
        </div>

        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </>
  );
};

export default CosmeticPage;
