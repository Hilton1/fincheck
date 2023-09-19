import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl h-full w-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$: 1000,00
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open/>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <strong className="text-white tracking-[-1px] text-lg">
            Minhas contas
          </strong>

          <div>
            <button
             className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
             disabled
            >
              <ChevronLeftIcon className="text-white h-6 w-6" />
            </button>

            <button
             className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
            >
              <ChevronRightIcon className="text-white h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
          >
            <SwiperSlide>
              <AccountCard
                color="#7950F2"
                name="Nubank"
                balance={1000}
                type="CHECKING"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#333"
                name="XP"
                balance={1000}
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#0F0"
                name="Carteira"
                balance={1000}
                type="CASH"
              />
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </div>
  );
}
