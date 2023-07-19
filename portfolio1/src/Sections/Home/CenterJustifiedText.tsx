import { AnimatePresence, motion } from 'framer-motion';
import JustifiedTextDesktop from '../../assets/JustifiedTextDesktop.png';

const CenterJustifiedText = ({ firstTransition, secondTransition }: { firstTransition: boolean, secondTransition: boolean }) => {

  return (
      <AnimatePresence>
        {!secondTransition && (
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}>

            <img src={JustifiedTextDesktop} className={`transition-all duration-[600ms] ${firstTransition ? 'invert' : null}`} alt='Justified Text'/>
          
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export default CenterJustifiedText;