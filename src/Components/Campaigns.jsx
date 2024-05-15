import { Fade } from "react-awesome-reveal";

const Campaigns = () => {
  return (
    <div className="lg:mt-10 mt-5">
      <div className="lg:my-20 my-5">
        <h1 className="lg:text-5xl text-3xl text-center font-bold font-shadows">
          <Fade cascade duration={300}>
            Our latest Campings
          </Fade>
        </h1>
      </div>
      <section className=" text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border-2 rounded-lg">
            <img
              src="https://i.ibb.co/BTHc1Yf/teaching-1.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-black">
                Donating for helping Children
              </h3>
              <span className="text-xs text-black">February 19, 2021</span>
              <p className="text-black">
                We are try to help Children Who have no family. Many children
                around the world suffer from malnutrition. Your donation can
                provide meals or nutritional supplements that can significantly
                impact their health.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 rounded-lg">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/hyzSBbZ/animal-1.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  Saving tigers in the Sundarban.
                </h3>
                <span className="text-xs text-black">January 21, 2021</span>
                <p className="text-black">
                  Saving tigers in the Sundarbans is a multifaceted endeavor
                  that requires sustained commitment and cooperation at local,
                  national, and international levels. Protecting these iconic
                  animals not only preserves biodiversity.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 rounded-lg">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/1sjkh1p/img-1.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  Sharing food with other
                </h3>
                <span className="text-xs text-black">January 22, 2021</span>
                <p className="text-black">
                  Sharing food with others is a meaningful act of kindness and
                  solidarity that fosters community, connection, and compassion.
                  It involves offering food to those in need or simply sharing
                  meals with friends, family, or strangers to promote
                  inclusivity and goodwill.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 rounded-lg">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/Ssh9Lww/animal-2.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  Leopard Survey in Sundorbans
                </h3>
                <span className="text-xs text-black">January 23, 2023</span>
                <p className="text-black">
                  Researchers conduct systematic surveys using camera traps,
                  remote sensing technology, and direct observations to identify
                  leopard presence and gather information on their behavior and
                  habitat use.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 rounded-lg hidden sm:block">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/mbBHT4g/health-1.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  Campaign for ensuring the health of people in the Mountain
                </h3>
                <span className="text-xs text-black">January 24, 2021</span>
                <p className="text-black">
                  A campaign focused on ensuring the health of people living in
                  mountainous regions involves targeted efforts to address the
                  unique health challenges faced by mountain communities. These
                  campaigns aim to improve access to healthcare services,
                  promote health education.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block border-2 rounded-lg">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/XWvjPk5/clening.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  The field is clear for sports
                </h3>
                <span className="text-xs text-black">January 25, 2021</span>
                <p className="text-black">
                  The field is clear for sports is a concise phrase indicating
                  that conditions are optimal and ready for sports activities to
                  take place. It implies that any obstacles or hindrances that
                  might have interfered with sporting events have been removed
                  or resolved, allowing athletes and participants to engage
                  fully in their chosen sports.
                </p>
              </div>
            </div>
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 rounded-lg hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://i.ibb.co/VWjc3Yz/clening-2.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
                  {`Remove plastic from beach in Cox's bazar`}
                </h3>
                <span className="text-xs text-black">January 26, 2021</span>
                <p className="text-black">
                  {`Removing plastic from the beaches of Cox's Bazar involves organized cleanup efforts to address plastic pollution and restore the natural beauty of this renowned coastal area in Bangladesh.Continuously monitoring the effectiveness of cleanup activities and measuring progress levels on Cox's Bazar beaches.`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-500 "
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
