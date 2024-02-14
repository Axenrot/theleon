"use client";
import { useEffect, useState } from "react";
import { maskText, maskPhone } from "@/util/masks.js";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [text, setText] = useState<string>("");

  function handleSendEmail() {
    setLoading(true);
    // setFormState("fighting_defensive");
    // debouncedIdle();
    axios
      .post("/api/contact", {
        email,
        name,
        phone,
        text,
      })
      .then(() => {
        setEmailSent(true);
        // Swal.fire({
        //   title: "Thanks!",
        //   text: "Your message has been sent",
        //   icon: "success",
        //   background: "#3b82f6",
        //   color: "#fff",
        //   confirmButtonColor: "#EAB308",
        //   confirmButtonText: "Nice!",
        // });

        // playSound("/assets/sounds/success.wav");
        setName("");
        setEmail("");
        setPhone("");
        setText("");
      })
      .catch(() => {
        // Swal.fire({
        //   title: "Ops...",
        //   text: "Some issue has occurred",
        //   icon: "error",
        //   background: "#3b82f6",
        //   color: "#fff",
        //   confirmButtonColor: "#EAB308",
        //   confirmButtonText: "Try again :(",
        // });
        // setFormState("ko");
        // debouncedIdle();
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      data-loading={loading}
      className="select-none flex justify-between h-full flex-col transition-all duration-500 w-full md:w-1/2  lg:w-2/3 data-[loading=false]:h-fit gap-12"
    >
      <span>
        <h1 className="flex text-4xl sm:text-6xl tracking-wide md:text-4xl lg:text-6xl whitespace-nowrap">
          Get in touch<p className="text-zinc-600">.</p>
        </h1>
        <h2 className="flex text-2xl font-light md:text-2xl lg:text-3xl text-zinc-600">
          Let&apos;s work together<p className="font-medium text-zinc-900">?</p>
        </h2>
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSendEmail();
        }}
        action=""
        className="flex flex-col gap-6 text-xl rounded-md lg:text-2xl"
      >
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="font-absolut-pro font-medium text-xl peer w-full h-full placeholder:text-transparent focus:placeholder:font-light focus:placeholder:text-zinc-600 text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border bg-black/5 focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            id="name"
            required
            value={name}
            placeholder="Your Name"
            onChange={(e) => {
              setName(maskText(e.target.value));
              // walk();
            }}
            // onBlur={() => setFormState("idling")}
            // onFocus={() => walk()}
            disabled={loading}
            type="text"
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Name
          </label>
        </div>

        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="font-absolut-pro font-medium text-xl peer w-full h-full placeholder:text-transparent focus:placeholder:font-light focus:placeholder:text-zinc-600 bg-black/5 text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            id="email"
            required
            value={email}
            placeholder="your@email.here"
            onChange={(e) => {
              setEmail(e.target.value.replaceAll(" ", ""));
              // walk();
            }}
            // onBlur={() => setFormState("idling")}
            // onFocus={() => walk()}
            disabled={loading}
            type="email"
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            E-mail
          </label>
        </div>

        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="font-absolut-pro font-medium text-lg peer w-full h-full placeholder:text-transparent focus:placeholder:font-light focus:placeholder:text-zinc-600 bg-black/5 text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            id="phone"
            value={phone}
            placeholder="+5584999999999"
            disabled={loading}
            type="text"
            minLength={10}
            onChange={(e) => {
              setPhone(maskPhone(e.target.value));
              // walk();
            }}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Phone
          </label>
        </div>

        <div className="relative w-full min-w-[200px]">
          <textarea
            className="font-absolut-pro font-medium text-xl tracking-wide peer h-full min-h-[100px] placeholder:text-transparent focus:placeholder:font-light focus:placeholder:text-zinc-600 w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-black/5 px-3 py-2.5 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            id="message"
            value={text}
            placeholder="Your message here"
            minLength={3}
            onChange={(e) => {
              setText(e.target.value);
              // walk();
            }}
            // onBlur={() => setFormState("idling")}
            // onFocus={() => walk()}
            disabled={loading}
          ></textarea>
          <label
            htmlFor="message"
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight text-gray-500 peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          // onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
          className="align-middle text-lg select-none tracking-widest text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-zinc-800 text-white shadow-md shadow-zinc-900/10 hover:shadow-lg  hover:bg-zinc-900 hover:shadow-zinc-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
          {loading ? "Loading..." : emailSent ? "Thanks" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
