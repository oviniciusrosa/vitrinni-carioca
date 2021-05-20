import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;

  width: 600px;

  z-index: 1;
`;

export const ShadowCarousel = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: -50px;

  height: calc(80vh - 100px);
  width: 600px;

  background-color: transparent;
  border: 2px solid var(--default-grey);
`;

export const Img = styled.img`
  height: 90vh;
`;

export const CarouselWrapper = styled(motion.div)``;
