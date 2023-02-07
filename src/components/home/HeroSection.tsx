import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classnames from 'classnames';
import logo from '../../assets/platkey-logo.svg';
import chrome from '../../assets/chrome.png';
import edge from '../../assets/edge.png';
import brave from '../../assets/brave.png';
import safari from '../../assets/safari.png';
import platkeyinstalled from '../../assets/platkey-installed.png';

const APP_STORE_LINK = 'https://apps.apple.com/app/platkey/id1659587636 ';
const CHROME_STORE_LINK =
  'https://chrome.google.com/webstore/detail/platkey/bdjedpeffgjikndcihipemgdinpcmpcf';

function HeroSection() {
  const { t } = useTranslation('translation');

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleInstallModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <div
        id="popup-modal"
        role="dialog"
        tabIndex={-1}
        className={classnames(
          'fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center',
          {
            hidden: !isModalVisible,
          }
        )}
      >
        <div className="relative w-full h-full max-w-3xl md:h-auto">
          <div className="relative bg-black rounded-xl border-darkblue border-2">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent active:text-skyblue hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="popup-modal"
              onClick={handleInstallModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center flex justify-center flex-col items-center">
              <h3 className="mt-2 text-xl font-normal text-white">
                {t('hero.install.instruction')}:
              </h3>
              <img src={platkeyinstalled} className="h-72" aria-hidden="true" />
              <div className="flex flex-col md:flex-row gap-x-4 w-full gap-y-4">
                <a
                  target="_blank"
                  className="bg-darkblue text-white cursor-pointer hover:bg-skyblue/30 focus:ring-4 focus:outline-none focus:ring-skyblue/50 rounded-lg border border-skyblue px-5 py-2.5 focus:z-10 md:w-[50%] w-full transition"
                  href={CHROME_STORE_LINK}
                >
                  <h2 className="text-xl font-bold">
                    <span className="sr-only">
                      {t('hero.message.install.on')}
                    </span>
                    Chrome{' '}
                    <span className="font-light">({t('or')} Brave, Edge)</span>
                  </h2>
                </a>
                <a
                  target="_blank"
                  className="bg-darkblue text-white cursor-pointer hover:bg-skyblue/30 focus:ring-4 focus:outline-none focus:ring-skyblue/50 rounded-lg border border-skyblue px-5 py-2.5 focus:z-10 md:w-[50%] w-full transition"
                  href={APP_STORE_LINK}
                >
                  <h2 className="text-xl font-bold">
                    <span className="sr-only">
                      {t('hero.message.install.on')}
                    </span>
                    Apple Safari
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen w-full bg-gradient-to-b from-black to-darkblue flex flex-col items-center gap-y-5 justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:gap-x-8">
          <div>
            <img
              src={logo}
              alt="Platkey logo"
              className="w-auto transition active:translate-y-1 cursor-pointer platkey-logo"
            />
          </div>
          <div className="flex flex-col px-4">
            <h1 className="text-white text-4xl text-center font-bold lg:text-left lg:w-[32rem] lg:text-5xl">
              {t('hero.message.normal')}
              <span className="underline decoration-green decoration-3 underline-offset-4">
                {t('hero.message.underline')}
              </span>
            </h1>
            <h3 className="text-green text-4xl font-semibold lg:pt-3 text-center lg:text-left pt-4">
              PlatKey <span className="font-light hidden sm:inline">3.0</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-full px-4 gap-y-4 lg:flex-row-reverse lg:gap-x-4 lg:justify-center lg:pt-8">
          <button
            onClick={handleInstallModal}
            role="button"
            className="bg-skyblue text-blue text-3xl text-center justify-center rounded-lg py-2 font-bold focus:ring-4 lg:px-12 flex cursor-pointer focus:outline-none"
          >
            {t('hero.message.install')}
          </button>
          <a
            href="#getting-started"
            className="border border-skyblue bg-darkblue text-skyblue text-2xl text-center rounded-lg py-2 lg:px-8 focus:ring-4 focus:outline-none hover:bg-skyblue/10 transition"
          >
            {t('hero.message.howitworks')}
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-col items-center pt-6 gap-y-5">
          <p className="text-white text-xl">{t('hero.message.available')}</p>
          <div className="flex gap-x-8">
            <img
              src={chrome}
              alt="Google Chrome"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={edge}
              alt="Microsoft Edge"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={brave}
              alt="Brave"
              className="w-12 transition hover:scale-110"
            />
            <img
              src={safari}
              alt="Apple Safari"
              className="w-12 transition hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
