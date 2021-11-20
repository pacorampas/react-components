import { createGlobalStyle } from 'styled-components'

import PoppinsBold from './Poppins/Poppins-Bold.ttf'
import PoppinsBoldItalic from './Poppins/Poppins-BoldItalic.ttf'
import PoppinsExtraBold from './Poppins/Poppins-ExtraBold.ttf'
import PoppinsExtraBoldItalic from './Poppins/Poppins-ExtraBoldItalic.ttf'
import PoppinsItalic from './Poppins/Poppins-Italic.ttf'
import PoppinsLight from './Poppins/Poppins-Light.ttf'
import PoppinsLightItalic from './Poppins/Poppins-LightItalic.ttf'
import PoppinsMedium from './Poppins/Poppins-Medium.ttf'
import PoppinsMediumItalic from './Poppins/Poppins-MediumItalic.ttf'
import PoppinsRegular from './Poppins/Poppins-Regular.ttf'
import PoppinsSemiBold from './Poppins/Poppins-SemiBold.ttf'
import PoppinsSemiBoldItalic from './Poppins/Poppins-SemiBoldItalic.ttf'

import OpenSansBold from './OpenSans/OpenSans-Bold.ttf'
import OpenSansBoldItalic from './OpenSans/OpenSans-BoldItalic.ttf'
import OpenSansExtraBold from './OpenSans/OpenSans-ExtraBold.ttf'
import OpenSansExtraBoldItalic from './OpenSans/OpenSans-ExtraBoldItalic.ttf'
import OpenSansItalic from './OpenSans/OpenSans-Italic.ttf'
import OpenSansLight from './OpenSans/OpenSans-Light.ttf'
import OpenSansLightItalic from './OpenSans/OpenSans-LightItalic.ttf'
import OpenSansMedium from './OpenSans/OpenSans-Medium.ttf'
import OpenSansMediumItalic from './OpenSans/OpenSans-MediumItalic.ttf'
import OpenSansRegular from './OpenSans/OpenSans-Regular.ttf'
import OpenSansSemiBold from './OpenSans/OpenSans-SemiBold.ttf'
import OpenSansSemiBoldItalic from './OpenSans/OpenSans-SemiBoldItalic.ttf'

export default createGlobalStyle`
    /** Poppins */

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      src: url(${PoppinsExtraBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 800;
      src: url(${PoppinsExtraBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      src: url(${PoppinsBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 700;
      src: url(${PoppinsBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      src: url(${PoppinsSemiBold}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 600;
      src: url(${PoppinsSemiBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url(${PoppinsMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 500;
      src: url(${PoppinsMediumItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 400;
      src: url(${PoppinsItalic}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      src: url(${PoppinsLight}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 300;
      src: url(${PoppinsLightItalic}) format('truetype');
    }

    /** Open Sans */

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 800;
      src: url(${OpenSansExtraBold}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 800;
      src: url(${OpenSansExtraBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 700;
      src: url(${OpenSansBold}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 700;
      src: url(${OpenSansBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 600;
      src: url(${OpenSansSemiBold}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 600;
      src: url(${OpenSansSemiBoldItalic}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 500;
      src: url(${OpenSansMedium}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 500;
      src: url(${OpenSansMediumItalic}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 400;
      src: url(${OpenSansRegular}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 400;
      src: url(${OpenSansItalic}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 300;
      src: url(${OpenSansLight}) format('truetype');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: italic;
      font-weight: 300;
      src: url(${OpenSansLightItalic}) format('truetype');
    }
`
