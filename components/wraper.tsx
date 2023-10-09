import Footer from "./footer";
import Navbar from "./navbar";

const Wraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" mx-10 my-10 md:flex">
        <Navbar />
        <div className="md:ml-[210px] w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wraper;
