import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(2).refine(s => !s.includes(' '), 'No Spaces!'),
  email: z.string().email(),
  message: z.string(),
});

type MyForm = z.infer<typeof schema>;

function Contact_me() {
  const form = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MyForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    setLoading(true);
    emailjs
      .sendForm("service_rj7xzr9", "template_cugi17x", form.current, {
        publicKey: "ZXeiXnE-UtEFnmCVz",
      })
      .then(
        () => {
          setSubmitted(true);
          reset();
          setLoading(false);
          // Add any animation-related logic here
        },
        (error) => {
          setSubmissionError(true);
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-4/5 flex justify-center items-center p-5 pb-20 sm:p-0 sm:flex-col sm:pb-0">
      <div className="flex w-5/6 h-1/2 justify-center items-center sm:h-60">
        <div className="pl-10 sm:pl-0 dark:text-white">
          <h1 className="text-4xl flex bold sm:text-2xl">Do you have any questions ?</h1>
          <br />
          <p>
            Write me your message. I answer your questions
            <br />
            (within 24 hours).
          </p>
          <p>Additional methods to contact me: </p>
          <br />
          <a
            className="text-blue-600 hover:underline"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />{" "}
          <a
            className="text-blue-600 hover:underline"
            href="mailto:1385463@mail.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
      <div className=" w-5/6 h-1/2 flex justify-center items-center pr-28 sm:pr-0">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <section className="gap-4 flex flex-col">
            <div className="flex gap-3 mt-10">
              <div className="flex flex-col">
                <p className="text-l sm:text-sm dark:text-white">Name:</p>
                <input
                  id="name"
                  type="text"
                  className="p-1 flex w-80 border border-gray-500 rounded sm:w-40"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name")}
                  placeholder="name"
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex-col">
                <p className="text-l sm:text-sm dark:text-white">Email:</p>
                <input
                  id="email"
                  type="email"
                  className="flex w-80 p-1  border border-gray-500 rounded sm:w-40"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email")}
                  placeholder="email"
                />
                {errors.email && (
                  <span className="text-red-600" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-l sm:text-sm dark:text-white">Message:</p>
              <textarea
                className="w-full p-1 pb-14 border border-gray-500 rounded"
                rows={3}
                id="message"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message")}
                placeholder="message"
              />
              {errors.message && (
                <p className="text-red-600" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={loading}
                className="flex px-12 py-3 text-sm font-medium shadow bg-gray-50 active:bg-gray-500 active:text-slate-50  focus:ring cursor-pointer hover:bg-gray-100 rounded"
                // Define animation properties
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ opacity: loading ? 0.5 : 1 }} // Fade out button when loading
              >
                {loading ? "Sending..." : "Send"} <IoIosSend size="20px" />
              </motion.button>
              {submitted && (
                <p className="text-green-600">Your message has been sent!</p>
              )}
              {submissionError && (
                <p className="text-red-600">Something went wrong!</p>
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Contact_me;
