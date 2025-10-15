"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src={"/menu.png"}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/"}>Ana Sayfa</Link>
          <Link href={"/"}>Magaza</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>Hakkımızda</Link>
          <Link href={"/"}>İletişim</Link>
          <Link href={"/"}>Oturumu Kapat</Link>
          <Link href={"/"}>Sepet</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
