import Logo from "@/assets/Logo1.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-500 py-16 text-black">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo}
              className="h-full max-h-[35px] w-auto object-contain align-middle" />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivams</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">Massa orci senectus</p>
          <p>013 99 99 99</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
