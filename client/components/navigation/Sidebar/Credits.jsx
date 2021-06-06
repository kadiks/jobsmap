import Link from "next/link";

const Credits = () => {
  return (
    <div className="flex-none py-2 flex justify-center items-center">
      <Link href="/about">
        <a className="border text-center border-indigo-100 rounded-md p-2 text-white hover:text-indigo-600 hover:bg-indigo-100">
          A propos
        </a>
      </Link>
    </div>
  );
};

export default Credits;
