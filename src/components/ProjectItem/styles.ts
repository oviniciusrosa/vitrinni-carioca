import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
    img?: string;
    overlay?: string;
    inverted?: boolean;
}

export const Container = styled.div<Props>`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ inverted }) => inverted ? "row-reverse" : "row"};

    margin-top: 100px;

    @media (max-width: 1240px) {
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
`;

export const ImgShadow = styled(motion.div) <Props>`
    position: absolute;
    top: -20px;
    left: ${({ inverted }) => inverted ? "unset" : "20px"};
    right: ${({ inverted }) => inverted ? "20px" : "unset"};

    border: 1px solid var(--secondary-color);
    background: transparent;

    min-height: 300px;
    height: 300px;

    min-width: 300px;
    width: 300px;

    z-index: 0;
    opacity: 0.4;

    @media (max-width: 1240px) {
        left: ${({ inverted }) => inverted ? "unset" : "10px"};
        right: ${({ inverted }) => inverted ? "10px" : "unset"};
        
        top: -10px;
        min-width: 290px;
        width: 290px;
        min-height: 290px;
        height: 290px;
    }
`;

export const Title = styled(motion.h1)`
    font-family: "Cinzel", serif;
    font-size: 4rem;
    text-transform: uppercase;
    color: var(--secondary-color);

    margin-left: 50px;

    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    @media (max-width: 1240px) {
        font-size: 2rem;
    }
`;

export const Img = styled(motion.div) <Props>`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    min-height: 300px;
    height: 300px;

    min-width: 300px;
    width: 300px;

    z-index: 2;
    transition: .6s;

    &:hover{
        background-image: url(${({ overlay }) => overlay});
    }
`;
