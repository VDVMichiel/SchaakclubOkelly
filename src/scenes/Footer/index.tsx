import Logo from "@/assets/Logo1.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-500 py-8 text-black">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-2/3 md:mt-0">
          <img alt="logo" src={Logo}
              className="h-full max-h-[35px] w-auto object-contain align-middle" />
        </div>
        <div className="mt-16 basis-1/2 md:mt-0 hover:text-primay">
          <h4 className="font-bold ">Links</h4>
          
          <p className="my-5 hover:text-primary-300"><a href="https://limliga.be/">Schaakliga Limburg</a> </p>
          <p className="my-5  hover:text-primary-300"><a href="https://www.frbe-kbsb-ksb.be/nl">De Koninklijke Belgische Schaakbond</a> </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
