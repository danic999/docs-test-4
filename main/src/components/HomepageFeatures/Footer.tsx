type FooterItem = {
  title: string;
  items: Array<string>;
};

const FooterList: FooterItem[] = [
  {
    title: "Docs",
    items: ["BlinkId", "BlinkVerify"],
  },
  {
    title: "Account",
    items: ["Login", "Singup"],
  },
  {
    title: "More",
    items: [
      "Resources",
      "Blogs",
      "Supported Documents",
      "Help Center",
      "Talk to an expert",
    ],
  },
];

function Feature({ title, items }: FooterItem) {
  return (
    <div className="flex flex-col gap-[14px] rounded-5xl px-[34px] py-[32px]">
      <div className="text-center">
        <span className="uppercase text-beige font-medium text-base">
          {" "}
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-[12px]">
        {items.map((item, index) => (
          <span className="text-white" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer(): JSX.Element {
  return (
    <section className="w-full bg-dark-blue mx-auto flex flex-row">
      <div className="max-w-[1216px] mx-auto ">
        <div className="flex flex-row pt-[80px] pb-[40px]">
          <div className="w-[368px] flex flex-col gap-[24px]">
            <img
              src="img/microblink-logo.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h2 className="text-white text-3xl font-medium">Try it yourself</h2>
            <a href="https://microblink.com/free-plan/">
              <button className="bg-royal-blue border-none px-[8px] py-[6px] flex flex-row items-center rounded-full w-fit">
                <span className="text-white text-sm font-bold font-display">
                  Start your free plan
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.36635 17.6487C9.14138 17.4236 9.015 17.1185 9.015 16.8003C9.015 16.4821 9.14138 16.1769 9.36635 15.9519L13.3179 12.0003L9.36635 8.04865C9.25173 7.93796 9.16032 7.80554 9.09742 7.65914C9.03453 7.51274 9.00143 7.35527 9.00005 7.19594C8.99866 7.0366 9.02902 6.87859 9.08936 6.73111C9.1497 6.58363 9.2388 6.44965 9.35147 6.33698C9.46414 6.22431 9.59813 6.13521 9.7456 6.07487C9.89308 6.01453 10.0511 5.98417 10.2104 5.98555C10.3698 5.98694 10.5272 6.02004 10.6736 6.08293C10.82 6.14582 10.9524 6.23724 11.0631 6.35186L15.8631 11.1519C16.0881 11.3769 16.2145 11.6821 16.2145 12.0003C16.2145 12.3185 16.0881 12.6236 15.8631 12.8487L11.0631 17.6487C10.8381 17.8736 10.5329 18 10.2147 18C9.89655 18 9.59138 17.8736 9.36635 17.6487Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-row gap-[24px] text-center">
            {FooterList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className="w-full border-t border-gray border-solid"></div>
        <div className="pt-[40px] pb-[80px] flex flex-row text-center text-white">
            <span className="mx-auto">© 2024 Microblink. All rights reserved. Built with Docusaurus</span>


        </div>
      </div>
    </section>
  );
}
