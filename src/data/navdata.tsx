import Logo from "@/components/common/logo";

export const navItems = [
  {
    name: "Home",
    href: "/",
    items: false,
  },
  {
    name: "Our Story",
    href: "/aboutus",
    items: false,
  },
  {
    name: "Events",
    href: "/events",
    items: false,
  },
  {
    name: "Shop",
    href: "/shop",
    items: [
      {
        name: "SpeedShop Originals",
        description: "Born out of passion for automotive lifestyle",
        href: "https://www.speedshoporiginals.com/",
        icon: (
          <Logo
            variant="speedshopblack"
            className="rounded-md"
            width={130}
            height={130}
          />
        ),
      },
      {
        name: "PowerTech Parts",
        description: "Coming Soon!",
        href: "#",
        icon: <Logo variant="powerpartblack" width={130} height={130} />,
      },
    ],
  },
  {
    name: "Academies",
    href: "/signup",
    items: [
      {
        name: "ProDirt Pune",
        description: "",
        href: "/locations/prodirtadventure",
        icon: <Logo variant="prodirtblack" width={130} height={130} />,
      },
      {
        name: "Drift-R School Pune",
        description: "",
        href: "/locations/driftr-pune",
        icon: <Logo variant="driftrblack" width={130} height={130} />,
      },
      {
        name: "MotoTrip Goa",
        description: "Coming soon!",
        href: "/locations/mototrip-goa",
        icon: <Logo variant="mototripblack" width={130} height={130} />,
      },
    ],
  },
];
