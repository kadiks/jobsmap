// import { useState } from "react";
import { Switch } from "@headlessui/react";

const Toggle = ({ enabled, onChange }) => {
  //   const [enabled, setEnabled] = useState(false);

  const size = 20;

  return (
    <div className="py-2 flex items-center">
      <Switch
        checked={enabled}
        onChange={onChange}
        style={{
          height: size,
          width: size * 2.5,
        }}
        className={`${enabled ? "bg-indigo-900" : "bg-indigo-700"}
          relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Grouper par départements</span>
        <span
          aria-hidden="true"
          style={{
            width: size - 2,
            height: size - 2,
          }}
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
