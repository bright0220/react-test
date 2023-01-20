import ButtonTemp from "./components/ButtonTemp";

import person from "./assets/img/man-on-cpu-potatoa.webp";
import person2 from "./assets/img/woman-at-cpu.webp";
import CardTemp from "./components/CardTemp";

const App = () => {
  return (
    <div className="w-full flex flex-wrap gap-10 font-['Roboto']">
      <div className="w-full lg:bg-[url('./assets/img/landing.png')] bg-no-repeat max-w-full bg-cover bg-bottom h-[500px]">
        <section className="w-full flex justify-center">
          <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1440px] lg:flex justify-between px-4 py-5">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div className="col-span-2 lg:col-span-1">
                <div className="w-full flex flex-wrap gap-4 lg:gap-8">
                  <p className="w-full text-4xl xl:text-5xl font-bold lg:font-light text-center lg:text-left text-[#38454a]">
                    Surge Protection Plans
                  </p>
                  <p className="w-full text-[18px] text-start text-[#38454a]">
                    When bad weather threatens your electronics and appliances.
                    <br />
                    Direct Energy Surge protect provided by Allied Warranty will
                    make sure you are protected with our surge protection plans.
                  </p>
                  <div className="w-full flex justify-start">
                    <ButtonTemp type="outline">LEARN MORE</ButtonTemp>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="flex justify-center lg:justify-end">
                  <img src={person} alt="person" className="w-[400px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full flex justify-center mt-8">
        <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1440px] flex flex-wrap gap-8 justify-between px-4 py-4 text-[#005876]">
          <div className="text-4xl lg:text-5xl font-light text-center w-full">
            How does a Surge Protection Plan work?
            <p className="text-[16px] text-[#38454a] mt-4">
              You'll receive up to $2,000 of annual conerage for elgible
              electronic devices and kitchen appliances in case of a damaging
              power surge.
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-8">
            <div className="w-full lg:flex justify-between">
              <div className="w-full lg:w-[480px]">
                <img src={person2} alt="person2"></img>
              </div>
              <div className="flex-1 flex items-center">
                <div className="text-4xl lg:text-3xl font-light lg:text-left w-full flex flex-wrap gap-8">
                  What is a Surge protection Plan?
                  <p className="text-[16px] text-[#38454a]">
                    Direct Energy's Surge Protect plans provides up to a total
                    of $2,000 in annual conerage for eligible items with no
                    long-term contract and no service call fee.
                  </p>
                  <p className="text-[16px] text-[#38454a]">
                    Plus, any needed service will be provided by licensed,
                    insured and background-checked Master electricians.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex justify-between lg:gap-16">
              <div className="w-full lg:w-1/2 ">
                <CardTemp price="1000" />
              </div>
              <div className="w-full lg:w-1/2 ">
                <CardTemp price="2000" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
