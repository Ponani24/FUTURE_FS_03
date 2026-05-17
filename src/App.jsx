import { useState } from 'react'
import image1 from './assets/mainheadshotnowords.png'
import image2 from './assets/plants.png'
import image3 from './assets/singular_plant.png'
import image4 from './assets/product.png'
import image5 from './assets/product2.png'
import emailjs from "@emailjs/browser";
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_5dsj6lg",
        "template_lievq2f",
        formData,
        "M88-B18e3CSKld9uW"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Message failed to send");
      });
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#fffaf7] text-[#3b2f2f]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#fffaf7]/80 border-b border-[#eaded7]">
        <div className="flex justify-center gap-14 text-lg py-5 font-medium"
             style={{ fontFamily: "Inter, sans-serif" }}>

          <a href="#products" className="hover:text-[#a67c7c] transition">
            Products
          </a>

          <a href="#about" className="hover:text-[#a67c7c] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#a67c7c] transition">
            Contact
          </a>

        </div>
      </nav>

      {/* BRAND */}
      <div className="flex items-center gap-5 px-16 py-10 pt-28">

        <img
          src={image1}
          alt="Profile"
          className="w-20 h-20 object-cover rounded-2xl shadow-md"
        />

        <div>
          <h1 className="text-4xl font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Rooted
          </h1>

          <p className="text-[#7a6a6a] text-lg">
            By Hope
          </p>
        </div>

      </div>

      {/* HERO */}
      <section className="px-16 py-10">

        <div className="grid grid-cols-2 gap-14 items-center">

          <div className="space-y-6">

            <h1 className="text-6xl font-bold leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}>
              Rooted in Nature
            </h1>

            <h2 className="text-2xl text-[#a67c7c] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}>
              Made With Love
            </h2>

            <p className="text-lg text-[#6f5f5f] leading-relaxed max-w-md">
              Organic hair care designed to nourish your roots, restore strength,
              and celebrate your natural beauty from within.
            </p>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#eaded7]">
            <img
              src={image2}
              alt="Nature"
              className="w-full h-[460px] object-cover"
            />
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-16 py-24">

        <div className="grid grid-cols-2 gap-16 items-center">

          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#eaded7]">
            <img
              src={image3}
              alt="Inspiration"
              className="w-full h-[460px] object-cover"
            />
          </div>

          <div className="space-y-5">

            <h2 className="text-4xl font-bold"
                style={{ fontFamily: "Playfair Display, serif" }}>
              My Story
            </h2>

            <h3 className="text-xl text-[#a67c7c]">
              The Inspiration Behind Rooted
            </h3>

            <p className="text-[#6f5f5f] leading-relaxed text-lg">
              Rooted was inspired by a personal journey of reconnecting with natural beauty,
              self-care, and simplicity. I noticed how something as small as a single plant
              could thrive when given the right care, patience, and nourishment.

              <br /><br />

              This journey taught me that beauty is not about excess, but about intention
              and returning to what is pure and natural.

              <br /><br />

              Every formula is designed to nourish, restore, and celebrate natural beauty
              from the roots upward.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-16 py-24 bg-[#fffaf7]">

        <h2 className="text-4xl font-bold text-center mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}>
          Products
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-6 flex gap-6 items-center shadow-sm border border-[#eaded7]">

            <img src={image4}
                 className="w-40 h-40 object-cover rounded-2xl"
                 alt="Products" />

            <div>
              <h3 className="text-2xl font-bold mb-3">Products Available</h3>
              <ul className="text-[#6f5f5f] text-lg space-y-1">
                <li>Body Butter 300ml - R350</li>
                <li>Hair Growth Oil 100ml - R120</li>
                <li>Conditioners 250ml - R135</li>
              </ul>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 flex gap-6 items-center shadow-sm border border-[#eaded7]">

            <img src={image5}
                 className="w-40 h-40 object-cover rounded-2xl"
                 alt="Ingredients" />

            <div>
              <h3 className="text-2xl font-bold mb-3">Common Ingredients In Products</h3>
              <ul className="text-[#6f5f5f] text-lg space-y-1">
                <li>Shea Butter</li>
                <li>Turmeric</li>
                <li>Coconut Oil</li>
                <li>Rooibos</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* DELIVERY & PAYMENT */}
<section className="px-16 py-20 bg-[#fffaf7]">

  <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-sm border border-[#eaded7]">

    <h2
      className="text-4xl font-bold text-center mb-10"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Delivery & Payment
    </h2>

    <div className="grid md:grid-cols-2 gap-12 text-[#6f5f5f]">

      {/* DELIVERY */}
      <div>

        <h3 className="text-2xl font-semibold mb-4 text-[#a67c7c]">
          Delivery Areas
        </h3>

        <ul className="space-y-3 text-lg">
          <li>• Eldorado Park</li>
          <li>• Freedom Park</li>
          <li>• Naturena</li>
        </ul>

      </div>

      {/* PAYMENTS */}
      <div>

        <h3 className="text-2xl font-semibold mb-4 text-[#a67c7c]">
          Payment Process
        </h3>

        <p className="text-lg leading-relaxed">
          Payments are conducted through cash payments on delivery
          or via banking details shared after order confirmation
          and delivery address confirmation through communication
          initiated on the website.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="px-16 py-24">

        <h2 className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}>
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-[#eaded7]">

          <form onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#eaded7] rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#eaded7] rounded-xl px-4 py-3"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#eaded7] rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-[#a67c7c] text-white py-3 rounded-xl hover:bg-[#8f6666] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-center text-green-600">
                Message sent successfully!
              </p>
            )}

          </form>

        </div>

      </section>

    </div>
  )
}

export default App