"use client"

import React, { useState } from "react";

import { Dialog } from "@headlessui/react";
import {Plus, X} from "lucide-react";

import { Color, Size } from "@/types";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Filter } from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  colors,
  sizes,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        as="div"
        open={open}
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 transform transition-colors" />
        <div className="flex fixed inset-0 z-40">
          <Dialog.Panel className="relative flex ml-auto w-full h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
