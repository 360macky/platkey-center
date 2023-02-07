import React from 'react';
import { t } from 'i18next';

const Footer = () => {
  return (
    <footer className="bg-black p-4">
      <div className="flex flex-row justify-center gap-x-[2rem]">
        <a
          className="text-green hover:underline"
          href="https://github.com/360macky/platkey"
        >
          {t('footer.githubrepository')}
        </a>
        <a
          className="text-green hover:underline"
          href="https://github.com/360macky/platkey/issues"
        >
          {t('footer.issues')}
        </a>
        <a
          className="text-green hover:underline"
          href="https://github.com/360macky/platkey#-contributing"
        >
          {t('footer.contributions')}
        </a>
        <a className="text-green hover:underline" href="./privacy">
          {t('footer.privacy')}
        </a>
      </div>
      <div className="flex flex-row p-4 justify-center">
        <p className="text-white text-center max-w-[42rem]">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
