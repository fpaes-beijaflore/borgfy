import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding-top: 20px;

  .slick-list {
    overflow: ${(props) => (props.overflow ? 'visible' : 'hidden')};
  }
  .slick-slider {
    margin-bottom: 4px;
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: auto;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .arrow-wrapper {
    position: absolute;
    height: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .arrow-wrapper-prev {
    top: 50%;
    left: 200px;
    z-index: 3;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 26px 17px;
  }

  .arrow-wrapper-next {
    top: 50%;
    right: 200px;
    z-index: 3;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 26px 17px;
  }

  .arrow-prev {
    width: 18px;
    height: 3px;
    background: #fff;
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 0;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
  }

  .arrow-next {
    width: 18px;
    height: 3px;
    background: #fff;
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 0;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
  }

  .arrow-prev:before {
    content: url('/left-arrow.png');
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: -8px;
    transition: 0.3s border;
    padding: 18px;
  }

  .arrow-next:before {
    content: url('/right-arrow.png');
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 5px;
    transition: 0.3s border;
    padding: 18px;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    width: 100%;
    height: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 12px;
    height: 12px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    outline: none;
    background: #676767;
    border-radius: 100%;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }

  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  .custom_paging_wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    width: 417px;
    margin-left: 80px;
  }

  .custom_paging_wrapper p {
    margin-left: 20px;
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.27;
    letter-spacing: normal;
    color: #191919;
  }

  .custom_paging_wrapper p span {
    margin-right: 20px;
  }

  .ft-slick__dots--custom {
    height: 4px;
    width: 40px;
    background-color: #e5e7e9;
    border-radius: 4px;
    position: relative;
    display: flex;
  }

  .slick-dots li {
    width: 16px;
    margin: 0 2px 20px 2px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active button {
    background: #fff;
  }

  .slick-dots li button::before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    width: 40px;
    top: 0px;
    overflow: hidden;

    .loading {
      height: 4px;
      animation: loading 10s ease-in;
      background-image: linear-gradient(270deg, #191919, #191919);
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
    }
  }
  .slick-dots .slick-active {
    p {
      font-weight: 700;
    }
  }
`;

export default SliderWrapper;
