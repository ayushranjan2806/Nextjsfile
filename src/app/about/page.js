import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href="/contact">
        <button>Contact Us</button>
      </Link>
    </div>
  );
};

export default Contact;
