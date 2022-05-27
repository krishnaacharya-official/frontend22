// core
import React, { useRef, useState } from 'react';

// third party
import { Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import lottie from 'lottie-web/build/player/lottie_light';
import Slider from 'rc-slider';

// app specific
import { IconToggle, CategoryCheckbox } from '../../atoms';

//import TooltipSlider from "../../molecules/tooltip-slider/index.tsx";

import sliderAnimationData from '../../../../../assets/lottie/slider.json';

// component style
import './style.scss';

const FilterDropdown = () => {
  const [hidden, setHidden] = useState(false);
  const sliderAnim = useRef(null);

  const onDropdownToggle = (state) => {
    const direction = state ? 1 : -1;
    sliderAnim.current.setDirection(direction);
    sliderAnim.current.play();
    // TODO: for transition we need to uncomment this line but it breaks filter lottie animation
    // need to fix that
    //setHidden(state);
  };

  React.useEffect(() => {
    sliderAnim.current = lottie.loadAnimation({
      container: document.querySelector('#filter__icon'),
      animationData: sliderAnimationData,
      loop: false,
      autoplay: false,
      renderer: 'svg'
    });
    sliderAnim.current.setSpeed(4);
  }, []);

  const categories = [
    {
      name: 'Family',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b68ae50b802debdff4ccd_family.svg',
      categoryColor: 'rgb(132, 200, 232)',
      checked: false
    },
    {
      name: 'Science',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b86975d011e33713edb0c_pp-science.svg',
      categoryColor: 'rgb(44, 101, 160)',
      checked: false
    },
    {
      name: 'Micro-Farm',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5bb2f969a87bf5b53418d5ef_pp-farm.svg',
      categoryColor: 'rgb(175, 111, 69)',
      checked: false
    },
    {
      name: 'Lifestyle',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5bb3ce2c76430074f4d7b8dc_pp-lifestyle.svg',
      categoryColor: 'rgb(137, 190, 211)',
      checked: false
    },
    {
      name: 'Sports',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c9131888de2c9e9a25fc894_pp-sport.svg',
      categoryColor: 'rgb(42, 131, 212)',
      checked: false
    },
    {
      name: 'Environment',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/59f2497a14619400018fe410_pp-environ.svg',
      categoryColor: 'rgb(152, 212, 156)',
      checked: false
    },
    {
      name: 'Education',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ca19e60f4c36e178a8122df_pp-school.svg',
      categoryColor: 'rgb(69, 129, 149)',
      checked: false
    },
    {
      name: 'Animals',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5edf11f3c35437a331c6f5f3_pp-animal.svg',
      categoryColor: 'rgb(77, 197, 158)',
      checked: false
    },
    {
      name: 'Supplies',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/59f2490b188b770001727b5b_pp-supplies.svg',
      categoryColor: 'rgb(253, 127, 42)',
      checked: false
    },
    {
      name: 'Relief',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/59f247c4f42fff0001597616_pp-health.svg',
      categoryColor: 'rgb(193, 62, 64)',
      checked: false
    },
    {
      name: 'Home',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b69535d8c1e5c675bc6f0_house.svg',
      categoryColor: 'rgb(34, 144, 143)',
      checked: false
    },
    {
      name: 'Food',
      imgUrl:
        'https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/59f8c2c978cc2d0001fd4a7d_pp-food.svg',
      categoryColor: 'rgb(131, 118, 206)',
      checked: false
    }
  ];

  const marks = {
    140: 140,
    280: 280,
    560: 560,
    840: 840,
    1120: 1120,
    1400: 1400,
    1680: 1680,
    1960: 1960,
    2240: 2240,
    2560: 2560,
    2800: 2800
  };

  return (
    <>
      {/* this enables back drop on mobile kind of buggy need to fix */}
      <div
        className={`selected__overlay ${!hidden ? 'hidden' : ''}`}
        onClick={() => setHidden(true)}
      ></div>

      <Dropdown className="d-flex w-100" onToggle={onDropdownToggle}>
        <Dropdown.Toggle variant="primary"
        size="lg"
        className="no-caret rounded-pill w-100">
          <div className="d-flex align-items-center justify-content-center">
            <span className="fw-bold">Filters</span>
            <span
              id="filter__icon"
              className="lottie__icon ms-1 d-flex align-items-center fs-4"
              ref={sliderAnim}
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu renderOnMount className="filter__dropdown">
          <div className="filter__dropdown-hd border-bottom">
            <div className="filter__checkboxes d-flex align-items-center">
              <div className="filter__item text-center text-light flex__1">
                <div className="filter__label fw-bolder">Tax Eligible</div>
                <div className="filter__toggle fs-4">
                  <IconToggle
                    iconSize={24}
                    activeColor="#3a94d4"
                    icon={
                      <FontAwesomeIcon icon={regular('calculator-simple')} className="tax__icon" />
                    }
                    checkedIcon={<FontAwesomeIcon icon={solid('calculator-simple')} />}
                  />
                </div>
              </div>

              <div className="filter__item text-center text-light border-start flex__1">
                <div className="filter__label fw-bolder">Tab</div>
                <div className="filter__toggle fs-4">
                  <IconToggle
                    iconSize={24}
                    activeColor="#947ada"
                    icon={<FontAwesomeIcon icon={regular('tag')} />}
                    checkedIcon={<FontAwesomeIcon icon={solid('tag')} />}
                  />
                </div>
              </div>

              <div className="filter__item text-center text-light border-start flex__1">
                <div className="filter__label fw-bolder">Ongoing</div>
                <div className="filter__toggle fs-4">
                  <IconToggle
                    iconSize={24}
                    activeColor="#947ada"
                    icon={<FontAwesomeIcon icon={regular('infinity')} />}
                    checkedIcon={<FontAwesomeIcon icon={solid('infinity')} />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="filter__slider bg-white">
            <Slider range min={0} max={2800} defaultValue={[0, 2800]} marks={marks} />
          </div>
          <div className="filter__dropdown-bd">
            <div className="category__list flex-wrap d-flex align-items-center">
              {categories.map((item, idx) => (
                <CategoryCheckbox key={`category_${idx}`} {...item} />
              ))}
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterDropdown;
