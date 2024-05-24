"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Price {
  price: number;
  duration: string;
  minRiders: number;
  maxRiders: number;
}

interface PriceList {
  title: string;
  prices: Price[];
}

const findMinPrice = (pricelist: PriceList[]) => {
  let leastPrice = 0;

  for (const price of pricelist) {
    const minPrice = Math.min(...price.prices.map((p) => p.price));

    if (leastPrice === 0) {
      leastPrice = minPrice;
    } else {
      leastPrice = Math.min(leastPrice, minPrice);
    }
  }

  return leastPrice;
};

const BookNow = ({
  course,
  locationData,
}: {
  course: any;
  locationData: any;
}) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [soloGroup, setSoloGroup] = useState("Private");

  const leastprice = findMinPrice(course.pricelist);

  const handleSubmit = async () => {
    const body = {
      name,
      location: locationData?.title,
      course: course?.title,
      phone,
      date,
      soloGroup,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setIsOpen((prev) => !prev);
        toast({
          title: "Equiry: Success",
          description: `We have received your enquiry. Our team will get back to you soon.`,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again after sometime.",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:gap-6 gap-1">
        <div className="text-2xl">
          Starts from <strong className="text-3xl">₹ {leastprice}</strong>
        </div>
        <Button onClick={() => setIsOpen((prev) => !prev)}>Book Now</Button>
      </div>
      <Dialog open={isOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Send Enquiry</DialogTitle>
            <DialogDescription>
              Sit tight! Provide some details and our team will get back to you.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="col-span-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                type="tel"
                placeholder="+91 1234567890"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                className="col-span-3"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="soloGroup" className="text-right">
                Private/Group
              </Label>
              <select
                className="p-2 rounded bg-white border"
                onChange={(e) => setSoloGroup(e.target.value)}
              >
                <option value="Private">Private</option>
                <option value="group">Group</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit}>Send Enquiry</Button>
            <Button
              className="bg-rose-500 hover:bg-rose-600"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookNow;
