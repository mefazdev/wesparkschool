"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Component() {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div className="pb-32">
      <div className="relative h-[60vh] lg:h-[80vh] ">
        <Image
          src={"/images/camp-1.jpg"}
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute  inset-0 bg-gradient-to-r from-black/70 via-primary/10 to-transparent z-10">
          <div className="flex h-full  items-end pb-20  px-4 lg:px-0 lg:pl-20 ">
            <div>
              <h6 className="lg:text-xl text-secondary">Get in tocuh</h6>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 lg:w-10/12 m-auto mt-20 ">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
          className="bg-gray-100 px-4 py-10 lg:px-8 lg:py-14 rounded-md drop-shadow-md"
        >
          <div className="grid lg:grid-cols-2 gap-10  ">
            <div className=" flex flex-col items-center justify-center   text-center">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
                className="bg-white p-10  sm:max-w-fit  sm:p-14 rounded-full md:rounded-full drop-shadow-sm"
              >
                <dl>
                  <dt className="font-semibold text-lg ">
                    We Spark <br />
                    International School
                  </dt>
                  <dl>
                    <address className="not-italic">
                      Spark Valley, Narokkavu, <br />
                      Kunnummalpotty P.O, <br />
                      Edakkara, Malappuram-679331
                    </address>
                  </dl>
                  <dl> +91 6238 400 700 | +91 6282 400 700</dl>
                  <dl>info@wesparkschool.in</dl>
                </dl>
                <div className="flex gap-3  mt-3 m-auto w-fit ">
                  <a
                    href="whatsapp://send?phone=+916238400700"
                    data-action="share/whatsapp/share"
                  >
                    <div className="min-h-10 min-w-10 drop-shadow bg-white   rounded-full flex justify-center items-center transition-all duration-300 ease-linear hover:translate-x-1   cursor-pointer">
                      <FaWhatsapp className="text-gray-600 text-lg " />
                    </div>
                  </a>
                  <a href="#">
                    {" "}
                    <div className="min-h-10 min-w-10 drop-shadow bg-white rounded-full flex justify-center items-center transition-all duration-300 ease-linear hover:translate-x-1   cursor-pointer">
                      <FaInstagram className="text-gray-600 text-lg" />
                    </div>{" "}
                  </a>
                  <div className="min-h-10 min-w-10 drop-shadow bg-white rounded-full flex justify-center items-center transition-all duration-300 ease-linear hover:translate-x-1   cursor-pointer">
                    <FaFacebook className="text-gray-600  text-lg" />
                  </div>
                  <div className="min-h-10 min-w-10 drop-shadow bg-white rounded-full flex justify-center items-center transition-all duration-300 ease-linear hover:translate-x-1   cursor-pointer">
                    <FaYoutube className="text-gray-600  text-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              className="flex flex-col items-center justify-center"
            >
              <h6 className="text-xl font-semibold text-gray-500">
                Need Help or Have Something to Share?
              </h6>
              <p className="text-gray-500 mt-1">
                We&apos;re here to help! Whether you have a question, need
                assistance, or simply want to share your thoughts, we&apos;d
                love to hear from you. Feel free to reach out—our team is ready
                to connect and assist you in any way we can.
              </p>{" "}
              <div className=" w-full grid gap-3 mt-6 ">
                <a
                  className="w-full md:w-8/12  m-auto shadow bg-[#25D366     p-2.5 rounded-lg flex items-center justify-center gap-3 bg-white"
                  href="whatsapp://send?phone=+916238400700"
                  data-action="share/whatsapp/share"
                >
                  <BsWhatsapp className="text-[#25D366] text-3xl " />
                  <p> Chat with us</p>
                </a>
                <a
                  className="w-full md:w-8/12  m-auto shadow bg-[#25D366    p-2.5 rounded-lg flex items-center justify-center gap-3 bg-white"
                  href="tel:+971566435998"
                  data-action="share/whatsapp/share"
                >
                  <p> Call us: +91 6238 400 700</p>
                </a>
                <a
                  className="w-full md:w-8/12  m-auto shadow bg-[#25D366    p-2.5 rounded-lg flex items-center justify-center gap-3 bg-white"
                  href="whatsapp://send?phone=+971566435998"
                  data-action="share/whatsapp/share"
                >
                  <p> Mail us: info@wesparkschool.in</p>
                </a>
              </div>
            </div>
          </div>

          <iframe
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className=" drop-shadow-sm rounded-xl p-3   bg-white mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.0994933207257!2d76.3158611170493!3d11.4003195321812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba623de30d9671b%3A0x5776e0ecba340951!2sWe%20Spark%20International%20School!5e0!3m2!1sen!2sin!4v1736832537655!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* <FeatureLine /> */}
    </div>
  );
}
