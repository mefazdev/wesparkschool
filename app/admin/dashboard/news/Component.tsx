"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LiaSpinnerSolid } from "react-icons/lia";
import { poppins } from "@/app/ui/fonts";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import moment from "moment";
import AddNews from "../../components/AddNews";
import { RawDraftContentState } from "draft-js";

type Img = {
  url: string;
  publicId: string;
}

type News = {
  _id:string
  title: string;
  content: RawDraftContentState;
  image: Img;
  date: string;
}

interface CustomComponentProps {
  data:News[];
}
 
const Component: React.FC<CustomComponentProps> = ({ data }) => {
  const [add, setAdd] = useState(false);

  const [deleting, setDeleting] = useState("");
  const [deleteWarn, setDeleteWarn] = useState("");

  const openAdd = () => setAdd(true);
  const closeAdd = () => setAdd(false);

  const router = useRouter();

  const deleteNews = async (_id: string) => {
    setDeleting(_id);

    try {
     await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/${_id}/delete`, {
        method: "DELETE",
      });

      setDeleting("");
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="pb-32 bg-white p-6 shadow">
      {" "}
      <div className="flex justify-between items-center">
        <h3 className="text-xl   text-gray-800">News & Updates</h3>

        <button
          className="bg-blue-500 text-white  p-2 px-4 rounded-lg shadow"
          onClick={openAdd}
        >
          Upload
        </button>
      </div>
      <div className="rounded-sm mt-10   bg-white ">
        <div className="max-w-full overflow-x-auto">
          {/* <Suspense fallback={<PackagesTableSkeletone/>}> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((d: News, i) => (
              <div className="relative " key={d.title + i}>
                <div className="relative h-[220px]">
                  {d.image?.url && (
                    <Image
                      src={d.image?.url}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  )}
                  <div className="absolute  bottom-3  flex justify-center gap-1 w-full">
                    <Link href={`/admin/dashboard/news/${d._id}/view`}>
                      <button className="w-9 h-9 bg-primary/80 rounded-full text-white flex justify-center items-center hover:scale-105 transition-all duration-150 ease-linear cursor-pointer">
                        <FaEye className="text-lg" />
                      </button>
                    </Link>
                    {/* <button className="w-9 h-9 bg-primary/80 rounded-full text-white flex justify-center items-center hover:scale-105 transition-all duration-150 ease-linear cursor-pointer">
                      <FaEdit className="text-lg" />
                    </button> */}
                    <button
                      onClick={() => setDeleteWarn(d._id)}
                      className="w-9  h-9 bg-primary/80 rounded-full text-white flex justify-center items-center hover:scale-105 transition-all duration-150 ease-linear cursor-pointer"
                    >
                      {deleting === d._id ? (
                        <LiaSpinnerSolid className="text-lg  animate-spin " />
                      ) : (
                        <MdDelete className="text-lg" />
                      )}
                    </button>
                    {deleteWarn == d._id && (
                      <div className="absolute   p-3 bg-red-100   w-fit    z-50 top-0  rounded-xl">
                        <p className="text-sm">Delete Item?</p>
                        <div className="mt-3 flex gap-3">
                          <button
                            className="bg-red-500 text-white rounded-xl p-1 px-3 text-sm"
                            onClick={() => {
                              deleteNews(d._id);
                              setDeleteWarn("");
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-blue-500 text-white rounded-xl p-1 px-3 text-sm"
                            onClick={() => setDeleteWarn("")}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-3 bg-white border">
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {moment(d?.date).format("DD MMM  YY")}
                  </p>
                  <div>
                    <h2 className={`${poppins.className} mt-1  leading-5`}>
                      {d.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </Suspense> */}
        </div>
      </div>
      <Transition show={add}>
        <Dialog className="relative z-[1000]" onClose={setAdd}>
          <div className="fixed inset-0  bg-gray-800 bg-opacity-50    overflow-y-auto">
            <div className="flex items-end justify-center p-4 sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden      transition-a  mt-16 lg:mt-0   py-6   rounded-[24px] w-full">
                  <AddNews closeAdd={closeAdd} />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Component;
