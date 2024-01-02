import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex items-center gap-24">
      <div className="relative hidden flex-1 md:block">
        <Image
          src="/contact.png"
          alt="contact image"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1">
        <form action="">
          <input
            type="text"
            required
            name="name"
            placeholder="Name and Surname"
            className="input mb-3 w-full"
          />
          <input
            type="text"
            required
            name="email"
            placeholder="Email address"
            className="input mb-3 w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Phone Number (Optional)"
            className="input  mb-3 w-full"
          />
          <textarea
            required
            placeholder="Message"
            name="message"
            className="textarea  mb-3 w-full"
            rows={10}
          ></textarea>

          <button className="btn btn-primary btn-block">Send</button>
        </form>
      </div>
    </div>
  );
}
