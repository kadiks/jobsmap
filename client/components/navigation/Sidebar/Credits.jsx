const Credits = () => {
  return (
    <div className="flex justify-center">
      <p
        className="mt-4 text-xs text-center text-yellow-100 font-sans"
        style={{
          width: "17vw",
        }}
      >
        Made with 💝 by{" "}
        <a
          href="https://www.linkedin.com/in/adeline-sire-1a005112b/"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Adeline Sire
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/yousra-hammami/"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Yousra Hammami
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/julie-desvaux/"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Julie Desvaux
        </a>
        ,{" "}
        <a href="#" className="hover:text-yellow-500">
          Gregory Houldsworth
        </a>
        ,{" "}
        <a
          href="https://github.com/GuillaumeDORE"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Guillaume Dore
        </a>{" "}
        and{" "}
        <a
          href="https://codiscovery.co/"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Jénaïc Cambré
        </a>
      </p>
    </div>
  );
};

export default Credits;
