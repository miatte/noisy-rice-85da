import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Head>
        <title>Viva Voyage Maldives</title>
        <meta name="description" content="Viva Voyage Maldives Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Logo */}
      <img
        src="https://ychef.files.bbci.co.uk/1280x640/p07mw81t.jpeg"
        alt="Viva Voyage Maldives Logo"
        className="h-24 w-auto mb-6 rounded-md"
      />

      {/* Company Name */}
      <h1 className="text-3xl font-semibold text-blue-700 mb-4 text-center">
        Viva Voyage Maldives
      </h1>

      {/* Main Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 mt-4 text-center">
        🚀 Coming Soon
      </h2>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mt-4 max-w-md text-center">
        We are launching something awesome. Stay tuned!
      </p>

      {/* Email Icon with Email */}
      <div className="mt-8 flex items-center space-x-2">
        <a
          href="mailto:info@vivavoyagemaldives.com"
          className="text-gray-500 hover:text-blue-600 transition"
        >
          {/* React Icons Email Icon */}
          <MdMailOutline className="h-8 w-8 text-blue-600" />
        </a>
        <span className="text-lg text-gray-700">
          info@vivavoyagemaldives.com
        </span>
      </div>
    </div>
  );
}
