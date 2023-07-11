import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-[60vh] bg-amber-300 py-10">
        <div className="grid grid-cols-3">
          <p className="capitalize col-span-2 text-[30px] font-bold px-10 my-auto">
          Success is not final; failure is not fatal: It is the courage to continue that counts.
          </p>
          
          <p className="capitalize px-20">
            Fusce ornare felis aliquet, pharetra ante sit amet, ullamcorper
            libero. Sed quis nisi quis arcu aliquam feugiat. Aenean molestie
            massa ac mauris rhoncus scelerisque. Integer dictum sem et tortor
            tempor convallis. Nam ullamcorper arcu quis felis eleifend, in
            rutrum ipsum eleifend. Morbi sed erat ut sapien mattis ornare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
