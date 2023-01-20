import ButtonTemp from "./components/ButtonTemp";
import CardTemp from "./components/CardTemp";

const App = () => {
  return (
    <div className="w-full flex flex-wrap gap-16 lg:gap-10 font-['Roboto']">
      <div className="w-full bg-[url('./assets/img/landing.png')] bg-no-repeat min-w-[400px] bg-contain lg:bg-cover lg:bg-bottom h-[500px]">
        <section className="w-full flex justify-center">
          <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1440px] lg:flex justify-between px-4 py-12 lg:py-5">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div className="col-span-2 lg:col-span-1">
                <div className="w-full flex flex-wrap gap-10 lg:gap-8">
                  <h2 className="w-full text-4xl xl:text-5xl font-light text-center lg:text-left text-[#38454a]">
                    Surge Protection Plans
                  </h2>
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
                  <img src="https://ik.imagekit.io/deui/man-on-cpu-potatoa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673902739571" alt="person" className="w-[400px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full flex justify-center mt-[170px] lg:mt-8 pb-10 lg:pb-2">
        <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1440px] flex flex-wrap gap-8 justify-between px-4  lg:py-4 text-[#005876]">
          <h2 className="text-4xl lg:text-5xl font-light text-center w-full">
            How does a Surge Protection Plan work?
            <p className="text-[16px] text-[#38454a] mt-4">
              You'll receive up to $2,000 of annual conerage for elgible
              electronic devices and kitchen appliances in case of a damaging
              power surge.
            </p>
          </h2>
          <div className="w-full flex flex-wrap gap-8">
            <div className="w-full lg:flex justify-between">
              <div className="w-full lg:w-[480px]">
                <img src="https://ik.imagekit.io/deui/woman-at-cpu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673902737487" alt="person2"></img>
              </div>
              <div className="flex-1 flex items-center">
                <h3 className="text-4xl lg:text-3xl font-light text-center lg:text-left w-full flex flex-wrap gap-8">
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
                </h3>
              </div>
            </div>
            <div className="w-full flex flex-wrap lg:flex-nowrap lg:flex justify-between gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2 ">
                <CardTemp price="1000" currency="6.99"/>
              </div>
              <div className="w-full lg:w-1/2 ">
                <CardTemp price="2000" currency="9.99"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
