import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import nike from "../utils/nike.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { useRef } from "react";

SwiperCore.use([Autoplay, Navigation]);

const Home = () => {
  const prevRef = useRef();
  const nextRef = useRef();

  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Nike. Just Do It. Nike SL</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="">
        <section className="relative mx-10">
          <img
            className="rounded-lg w-full object-cover"
            src="/assets/5.png"
            alt="hero"
          />
          <div className="absolute bottom-10 left-10 w-full space-y-5 z-10">
            <h1 className="text-white text-7xl w-[40rem] font-nike">
              PEACE THROUGH ANY POSE
            </h1>
            <p className="text-white font-bold">
              Nike Yoga Soul Festival Collection
            </p>
            <button className="mt-5 font-medium bg-white rounded-full px-6 py-2 hover:bg-gray-200 transitionClass">
              Shop
            </button>
          </div>
        </section>

        <section className="text-center p-5 font-medium my-10 mx-10">
          <h6 className="text-base">Nike Alate Sports Bras</h6>
          <h1 className="text-7xl font-nike w-2/3 m-auto">
            ALL DAY, ALL NEW, ALL YOU
          </h1>
          <p className="mt-3">
            The new Nike Alate was made to move with you. All. Day. Long.
          </p>
          <button className="mt-8 bg-black rounded-full text-white px-6 py-2 hover:bg-gray-700 transitionClass">
            Shop
          </button>
        </section>

        <section className="my-16 mx-10">
          <h3 className="font-medium text-2xl mb-8">Featured</h3>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5">
            <Banner img="/assets/4.png" title="Restocked The AF1 '07" />
            <Banner
              img="/assets/6.png"
              title="AJ XXXVI Low: 'NEW INFRARED'"
              isBlack
            />
          </div>
        </section>

        <section className="my-16">
          <div className="flex items-center justify-between mx-10">
            <h3 className="font-medium text-2xl mb-8">Shop New Releases</h3>
            <div className="flex items-center gap-x-3">
              <ChevronLeftIcon className="carousalBtn" ref={prevRef} />
              <ChevronRightIcon className="carousalBtn" ref={nextRef} />
            </div>
          </div>
          <Swiper
            onBeforeInit={onBeforeInit}
            autoplay={{ delay: 5000 }}
            speed={1000}
            loop={true}
            slidesPerView={4}
            className="mySwiper"
          >
            {nike.map(({ image, name, discription, price }, i) => (
              <SwiperSlide className="p-10">
                <ProductCard
                  key={i}
                  img={image}
                  title={name}
                  description={discription}
                  price={price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="my-16 mx-10">
          <h3 className="font-medium text-2xl mb-8">Trending</h3>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5">
            <Banner img="/assets/3.png" title="Tees to Rule Summer" />
            <Banner img="/assets/2.png" title="Shorts to Beat the Heat" />
          </div>
        </section>

        <section className="relative my-16 mx-10">
          <img
            className="rounded-lg w-full object-cover"
            src="/assets/7.png"
            alt="hero"
          />
          <div className="absolute bottom-10 left-10 w-full space-y-5 z-10">
            <h1 className="text-white text-7xl w-[40rem] font-nike">
              SUMMER TOPS
            </h1>
            <p className="text-white font-bold">Fun tops for her</p>
            <button className="mt-5 font-medium bg-white rounded-full px-6 py-2 hover:bg-gray-200 transitionClass">
              Shop
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
