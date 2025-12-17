"use client";

import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";
import { useState } from "react";


export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        

        <Button
        
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
}
