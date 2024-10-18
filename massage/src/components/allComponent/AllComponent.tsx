import MassageTypes from '../massageTypes/MassageTypes';
import { Questions } from '../frequentQuestions/Questions';
import { Certificate } from '../Certificate/Certificate';
import { PriceList } from '../priceList/PriceList';
import { Feedback } from '../feedback/feedback';

export const AllComponent = () => {
  return (
    <>
      <MassageTypes />
      <Certificate />
      <Feedback />
      <PriceList />
      <Questions />
    </>
  );
};
