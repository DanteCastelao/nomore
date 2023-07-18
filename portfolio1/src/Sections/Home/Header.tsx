const Header = ({ transition }: { transition: boolean }) => {
  return (
    <p className="text-center mb-12 object-fill">
        <span
        className={`font-IBM-Plex-Sans uppercase text-white delay-1000 ${
          transition ? 'transition-all duration-[600ms] visible opacity-100' : 'invisible translate-x-[-50px] absolute opacity-0'
        }`}
        >
        UX/UI
        </span>
        <span
          className={`font-IBM-Plex-Sans uppercase text-white delay-1000 ${
            transition ? 'transition-all duration-[600ms] translate-x-[50px] invisible absolute opacity-0' : 'visible opacity-100'
          }`}
        >
          Creative Director
        </span>
    </p>
  );
};

export default Header;