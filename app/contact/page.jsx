"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+46) 732 987 5774",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "book.ashour@gmail.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_samfs5s",
        "template_93nkwbd",
        {
          title: form.service,
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "SReBesXq8tBqdln65"
      );
      setStatus("success");
      setForm({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      const msg = err?.text || err?.message || JSON.stringify(err);
      console.error("EmailJS error:", msg);
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={form.firstname} onChange={handleChange} type="text" placeholder="Firstname" required />
                <Input name="lastname" value={form.lastname} onChange={handleChange} type="text" placeholder="Lastname" required />
                <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" required />
                <Input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select onValueChange={(val) => setForm({ ...form, service: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
              {status === "success" && <p className="text-green-400">Meddelandet skickades!</p>}
              {status === "error" && <p className="text-red-400">Fel: {errorMsg || "Något gick fel, försök igen."}</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
