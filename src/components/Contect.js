import ContactForm from "../comman_component/ContectForm";

const Contact = () => {
  return (
    <div>
      <div className="mainContainer" style={style.mainContainer}>
        <div className="contact-bg" style={style.contactBg}>
          <div className="contact-content" style={{ marginTop: "100px" }}>
            <h2 style={{ fontWeight: "700", fontSize: "30px" }}>Contact Us</h2>
            <p style={{ fontWeight: "700", fontSize: "20px" }}>
              Have a question, idea, or project in mind?
              <br />
              We're here to help — get in touch with us today.
            </p>
          </div>
        </div>
      </div>
      <div style={style.bottomContainer}>
        <div style={{ padding: "20px" }}>
          <h3 style={{ color: "#fff" }}>
            Need support or want to collaborate?
          </h3>
          <p style={{ color: "#fff" }}>
            Fill out the form and our team will get back to you shortly
          </p>
        </div>
        <ContactForm />
      </div>
      <div className="mapContainer" style={style.mapContainer}>
        <h2 className="text-white">Address</h2>

        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div>
            <img src="/assets/map.png" style={style.mapImage} alt="map-icon" />
          </div>
          <p className="text-white">
            Based in Bangalore | contact@websort.com +91-XXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const style = {
  mainContainer: {
    height: "100%",
  },
  contactBg: {
    backgroundImage: `url("/assets/mainLargeImage.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "100vw",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "50px",
  },
  bottomContainer: {
    backgroundImage: `url("/assets/contect_bottom.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    position: "relative",
  },
  mapContainer: {
    backgroundColor: "#0B0014",
    textAlign: "center",
    padding: "20px",
    alignItem: "center",
  },
  mapImage: {
    width: "80%",
  },
};
