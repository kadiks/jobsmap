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
        <a href="#" className="hover:text-yellow-500">
          Adeline Sire
        </a>
        ,{" "}
        <a href="#" className="hover:text-yellow-500">
          Yousra Hamami
        </a>
        ,{" "}
        <a href="#" className="hover:text-yellow-500">
          Julie Desvaux
        </a>
        ,{" "}
        <a href="#" className="hover:text-yellow-500">
          Gregory Houldsworth
        </a>
        ,{" "}
        <a href="#" className="hover:text-yellow-500">
          Guillaume Dore
        </a>{" "}
        and{" "}
        <a href="#" className="hover:text-yellow-500">
          Jénaïc Cambré
        </a>
      </p>
    </div>
  );
};

export default Credits;
