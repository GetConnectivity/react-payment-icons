import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Amex extends Component {

    static propTypes = {
        type: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
    }

    static defaultProps = {
        type: "flat",
        height: 37,
        width: 45,
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let p = this.props;

        switch (p.type) {
            case "mono": return this.renderMono();
            default: return this.renderFlat();
        }
    }

    renderFlat = () => {
        let p = this.props;
        let h = `${p.height}px`;
        let w = `${p.width}px`;

        return (
            <svg width={w} height={h} viewBox="0 0 752 471" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="amex">
                        <rect id="Rectangle-1" fill="#2557D6" x="1" y="0" width="750" height="471" rx="40"/>
                        <path d="M1.002688,221.18508 L37.026849,221.18508 L45.149579,201.67506 L63.334596,201.67506 L71.436042,221.18508 L142.31637,221.18508 L142.31637,206.26909 L148.64322,221.24866 L185.43894,221.24866 L191.76579,206.04654 L191.76579,221.18508 L367.91701,221.18508 L367.83451,189.15941 L371.2427,189.15941 C373.62924,189.24161 374.3263,189.46144 374.3263,193.38516 L374.3263,221.18508 L465.43232,221.18508 L465.43232,213.72973 C472.78082,217.6508 484.21064,221.18508 499.25086,221.18508 L537.57908,221.18508 L545.78163,201.67506 L563.96664,201.67506 L571.98828,221.18508 L645.84844,221.18508 L645.84844,202.65269 L657.0335,221.18508 L716.22061,221.18508 L716.22061,98.67789 L657.64543,98.67789 L657.64543,113.14614 L649.44288,98.67789 L589.33787,98.67789 L589.33787,113.14614 L581.80579,98.67789 L500.61839,98.67789 C487.02818,98.67789 475.08221,100.5669 465.43232,105.83121 L465.43232,98.67789 L409.40596,98.67789 L409.40596,105.83121 C403.26536,100.40529 394.89786,98.67789 385.59383,98.67789 L180.90796,98.67789 L167.17407,130.3194 L153.07037,98.67789 L88.59937,98.67789 L88.59937,113.14614 L81.516924,98.67789 L26.533518,98.67789 L0.999997,156.92445 L0.999997,221.18508 L1.002597,221.18508 L1.002688,221.18508 Z M228.39922,203.51436 L206.78472,203.51436 L206.70492,134.72064 L176.13228,203.51436 L157.62,203.51436 L126.96754,134.6597 L126.96754,203.51436 L84.084427,203.51436 L75.982981,183.92222 L32.083524,183.92222 L23.8996,203.51436 L1.000047,203.51436 L38.756241,115.67692 L70.08183,115.67692 L105.94103,198.84086 L105.94103,115.67692 L140.35289,115.67692 L167.94569,175.26406 L193.29297,115.67692 L228.39657,115.67692 L228.39657,203.51436 L228.39957,203.51436 L228.39922,203.51436 Z M68.777214,165.69287 L54.346265,130.67606 L39.997794,165.69287 L68.777214,165.69287 L68.777214,165.69287 Z M314.41947,203.51436 L243.98611,203.51436 L243.98611,115.67692 L314.41947,115.67692 L314.41947,133.96821 L265.07116,133.96821 L265.07116,149.8009 L313.23551,149.8009 L313.23551,167.80606 L265.07116,167.80606 L265.07116,185.34759 L314.41947,185.34759 L314.41947,203.51436 L314.41947,203.51436 Z M413.67528,139.33321 C413.67528,153.33782 404.28877,160.57326 398.81863,162.74575 C403.43206,164.49434 407.37237,167.58351 409.24808,170.14281 C412.22525,174.51164 412.73875,178.41416 412.73875,186.25897 L412.73875,203.51436 L391.47278,203.51436 L391.39298,192.43732 C391.39298,187.1518 391.90115,179.55074 388.0646,175.32499 C384.98366,172.23581 380.28774,171.56552 372.69714,171.56552 L350.06363,171.56552 L350.06363,203.51436 L328.98125,203.51436 L328.98125,115.67692 L377.47552,115.67692 C388.25084,115.67692 396.18999,115.9604 403.00639,119.88413 C409.67644,123.80786 413.67529,129.53581 413.67529,139.33321 L413.67528,139.33321 Z M387.02277,152.37632 C384.1254,154.12756 380.69859,154.18584 376.59333,154.18584 L350.97998,154.18584 L350.97998,134.67583 L376.94186,134.67583 C380.61611,134.67583 384.44999,134.8401 386.94029,136.26016 C389.67536,137.53981 391.36749,140.26337 391.36749,144.02548 C391.36749,147.86443 389.75784,150.95361 387.02277,152.37632 L387.02277,152.37632 Z M447.48908,203.51436 L425.97569,203.51436 L425.97569,115.67692 L447.48908,115.67692 L447.48908,203.51436 L447.48908,203.51436 Z M697.22856,203.51436 L667.35032,203.51436 L627.38585,137.58727 L627.38585,203.51436 L584.44687,203.51436 L576.24166,183.92222 L532.44331,183.92222 L524.48287,203.51436 L499.81137,203.51436 C489.56284,203.51436 476.58722,201.25709 469.23872,193.79909 C461.82903,186.3411 457.97386,176.23903 457.97386,160.26593 C457.97386,147.23895 460.27791,135.33 469.33983,125.91941 C476.15621,118.90916 486.83044,115.67692 501.35982,115.67692 L521.77174,115.67692 L521.77174,134.49809 L501.78818,134.49809 C494.0938,134.49809 489.74909,135.63733 485.564,139.70147 C481.96957,143.4 479.50322,150.39171 479.50322,159.59829 C479.50322,169.00887 481.38158,175.79393 485.30061,180.22633 C488.5465,183.70232 494.445,184.75677 499.99495,184.75677 L509.46393,184.75677 L539.17987,115.67957 L570.77152,115.67957 L606.46843,198.76138 L606.46843,115.67957 L638.5709,115.67957 L675.6327,176.85368 L675.6327,115.67957 L697.22856,115.67957 L697.22856,203.51436 L697.22856,203.51436 Z M569.07051,165.69287 L554.47993,130.67606 L539.96916,165.69287 L569.07051,165.69287 L569.07051,165.69287 Z" id="Path" fill="#FFFFFF"/>
                        <path d="M750.95644,343.76716 C745.83485,351.22516 735.85504,355.00582 722.34464,355.00582 L681.62723,355.00582 L681.62723,336.1661 L722.17969,336.1661 C726.20248,336.1661 729.01736,335.63887 730.71215,333.99096 C732.18079,332.63183 733.2051,330.65804 733.2051,328.26036 C733.2051,325.70107 732.18079,323.66899 730.62967,322.45028 C729.09984,321.10969 726.87294,320.50033 723.20135,320.50033 C703.40402,319.83005 678.70592,321.10969 678.70592,293.30714 C678.70592,280.56363 686.83131,267.14983 708.95664,267.14983 L750.95379,267.14983 L750.95379,249.66925 L711.93382,249.66925 C700.15812,249.66925 691.60438,252.47759 685.54626,256.84375 L685.54626,249.66925 L627.83044,249.66925 C618.60091,249.66925 607.76706,251.94771 602.64279,256.84375 L602.64279,249.66925 L499.57751,249.66925 L499.57751,256.84375 C491.37496,250.95154 477.53466,249.66925 471.14663,249.66925 L403.16366,249.66925 L403.16366,256.84375 C396.67452,250.58593 382.24357,249.66925 373.44772,249.66925 L297.3633,249.66925 L279.95252,268.43213 L263.64586,249.66925 L149.99149,249.66925 L149.99149,372.26121 L261.50676,372.26121 L279.447,353.20159 L296.34697,372.26121 L365.08554,372.32211 L365.08554,343.48364 L371.84339,343.48364 C380.96384,343.62405 391.72054,343.25845 401.21079,339.17311 L401.21079,372.25852 L457.90762,372.25852 L457.90762,340.30704 L460.64268,340.30704 C464.13336,340.30704 464.47657,340.45011 464.47657,343.92344 L464.47657,372.25587 L636.71144,372.25587 C647.64639,372.25587 659.07621,369.46873 665.40571,364.41107 L665.40571,372.25587 L720.03792,372.25587 C731.40656,372.25587 742.50913,370.66889 750.95644,366.60475 L750.95644,343.76712 L750.95644,343.76716 Z M409.45301,296.61266 C409.45301,321.01872 391.16689,326.05784 372.7371,326.05784 L346.42935,326.05784 L346.42935,355.52685 L305.44855,355.52685 L279.48667,326.44199 L252.5058,355.52685 L168.9904,355.52685 L168.9904,267.66822 L253.79086,267.66822 L279.73144,296.46694 L306.55002,267.66822 L373.92106,267.66822 C390.6534,267.66822 409.45301,272.28078 409.45301,296.61266 L409.45301,296.61266 Z M241.82781,337.04655 L189.9892,337.04655 L189.9892,319.56596 L236.27785,319.56596 L236.27785,301.64028 L189.9892,301.64028 L189.9892,285.66718 L242.84947,285.66718 L265.91132,311.27077 L241.82781,337.04655 L241.82781,337.04655 Z M325.3545,347.10668 L292.9833,311.3189 L325.3545,276.6677 L325.3545,347.10668 L325.3545,347.10668 Z M373.2272,308.04117 L345.98027,308.04117 L345.98027,285.66718 L373.47197,285.66718 C381.08388,285.66718 386.36777,288.75636 386.36777,296.43956 C386.36777,304.03796 381.32865,308.04117 373.2272,308.04117 L373.2272,308.04117 Z M515.97053,267.66822 L586.34004,267.66822 L586.34004,285.83764 L536.96778,285.83764 L536.96778,301.81074 L585.1348,301.81074 L585.1348,319.73642 L536.96778,319.73642 L536.96778,337.21701 L586.34004,337.29641 L586.34004,355.52678 L515.97053,355.52678 L515.97053,267.66815 L515.97053,267.66822 Z M488.91724,314.6973 C493.61049,316.42205 497.44703,319.51387 499.24559,322.07317 C502.22276,326.36251 502.65378,330.36571 502.73891,338.10985 L502.73891,355.52685 L481.5714,355.52685 L481.5714,344.53458 C481.5714,339.24908 482.08223,331.42282 478.1632,327.33748 C475.08226,324.19002 470.38635,323.4376 462.69463,323.4376 L440.16223,323.4376 L440.16223,355.52685 L418.97609,355.52685 L418.97609,267.66822 L467.65393,267.66822 C478.32816,267.66822 486.10236,268.13716 493.02251,271.81449 C499.6766,275.8177 503.86168,281.30191 503.86168,291.3245 C503.85868,305.34765 494.46719,312.50362 488.91724,314.6973 L488.91724,314.6973 Z M476.99899,303.59022 C474.17879,305.25668 470.69077,305.39975 466.58817,305.39975 L440.97483,305.39975 L440.97483,285.66718 L466.9367,285.66718 C470.69077,285.66718 474.4475,285.74658 476.99899,287.25416 C479.7314,288.67687 481.36499,291.39779 481.36499,295.15725 C481.36499,298.91672 479.7314,301.94496 476.99899,303.59022 L476.99899,303.59022 Z M667.33539,309.1866 C671.44067,313.41766 673.64095,318.7588 673.64095,327.80112 C673.64095,346.70178 661.78278,355.5242 640.51948,355.5242 L599.45353,355.5242 L599.45353,336.68449 L640.35453,336.68449 C644.35337,336.68449 647.18954,336.15726 648.9668,334.50934 C650.41681,333.15021 651.45709,331.17643 651.45709,328.77875 C651.45709,326.21944 650.33167,324.18738 648.88433,322.96866 C647.27201,321.62807 645.04778,321.01872 641.37619,321.01872 C621.65868,320.34843 596.9659,321.62807 596.9659,293.82551 C596.9659,281.08201 605.00615,267.66822 627.11019,267.66822 L669.37872,267.66822 L669.37872,286.36752 L630.70196,286.36752 C626.86809,286.36752 624.37512,286.51059 622.25464,287.9545 C619.94527,289.37721 619.08856,291.48876 619.08856,294.2759 C619.08856,297.59028 621.04941,299.8449 623.702,300.81987 C625.92624,301.59084 628.31543,301.81603 631.9072,301.81603 L643.25722,302.12071 C654.703,302.39889 662.55967,304.37003 667.33539,309.1866 L667.33539,309.1866 Z M751,285.66718 L712.57335,285.66718 C708.7368,285.66718 706.18797,285.81025 704.04088,287.25416 C701.81665,288.67687 700.95995,290.78843 700.95995,293.57558 C700.95995,296.88994 702.83831,299.14456 705.57071,300.11953 C707.79495,300.8905 710.18415,301.1157 713.6961,301.1157 L725.12327,301.42038 C736.65419,301.70387 744.35123,303.67765 749.04448,308.49157 C749.89852,309.16186 750.41202,309.91428 751,310.6667 L751,285.66718 L751,285.66718 Z" id="path13" fill="#FFFFFF"/>
                    </g>
                </g>
            </svg>
        );
    }

    renderMono = () => {
        let p = this.props;
        let h = `${p.height}px`;
        let w = `${p.width}px`;

        return (
            <svg width={w} height={h} viewBox="0 0 750 472" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Amex" fill="#393939">
                        <path d="M0,41.0047706 C0,18.9107459 17.9143492,1 39.9919369,1 L710.008063,1 C732.095,1 750,18.9064659 750,41.0047706 L750,431.995229 C750,454.089254 732.085651,472 710.008063,472 L39.9919369,472 C17.905,472 0,454.093534 0,431.995229 L0,41.0047706 Z M0.00266072556,221.9061 L36.0288848,221.9061 L44.15208,202.394972 L62.3381392,202.394972 L70.4400485,221.9061 L141.324438,221.9061 L141.324438,206.989254 L147.651644,221.969689 L184.449478,221.969689 L190.776684,206.766694 L190.776684,221.9061 L366.938002,221.9061 L366.855519,189.878599 L370.263908,189.878599 C372.650579,189.960734 373.347689,190.180645 373.347689,194.104597 L373.347689,221.9061 L464.458915,221.9061 L464.458915,214.450327 C471.807839,218.371629 483.238316,221.9061 498.279397,221.9061 L536.60981,221.9061 L544.812827,202.394972 L562.998886,202.394972 L571.020974,221.9061 L644.885376,221.9061 L644.885376,203.372648 L656.071066,221.9061 L715.261567,221.9061 L715.261567,99.3918994 L656.683033,99.3918994 L656.683033,113.860975 L648.480016,99.3918994 L588.371565,99.3918994 L588.371565,113.860975 L580.839051,99.3918994 L499.64701,99.3918994 C486.056024,99.3918994 474.109366,101.281013 464.458915,106.545627 L464.458915,99.3918994 L408.429356,99.3918994 L408.429356,106.545627 C402.288401,101.119392 393.920419,99.3918994 384.615862,99.3918994 L179.918263,99.3918994 L166.183597,131.035219 L152.079091,99.3918994 L87.6043891,99.3918994 L87.6043891,113.860975 L80.5215377,99.3918994 L25.5349832,99.3918994 L0,157.641785 L0,221.9061 L0.00266072556,221.9061 L0.00266072556,221.9061 Z M227.659661,204.65237 L206.043927,204.65237 L205.964105,135.854711 L175.389708,204.65237 L156.876379,204.65237 L126.22216,135.793772 L126.22216,204.65237 L83.3365853,204.65237 L75.234676,185.059106 L31.3327042,185.059106 L23.1483124,204.65237 L0.247447477,204.65237 L38.0058039,116.8099 L69.3331867,116.8099 L105.194446,199.978602 L105.194446,116.8099 L139.60827,116.8099 L167.202655,176.400447 L192.551387,116.8099 L227.657001,116.8099 L227.657001,204.65237 L227.659661,204.65237 L227.659661,204.65237 Z M67.6223402,166.748214 L53.1905647,131.729395 L38.8412718,166.748214 L67.6223402,166.748214 L67.6223402,166.748214 Z M313.811294,204.65237 L243.373906,204.65237 L243.373906,116.8099 L313.811294,116.8099 L313.811294,135.102245 L264.460157,135.102245 L264.460157,150.935828 L312.627271,150.935828 L312.627271,168.942024 L264.460157,168.942024 L264.460157,186.484553 L313.811294,186.484553 L313.811294,204.65237 L313.811294,204.65237 L313.811294,204.65237 Z M413.125537,140.467541 C413.125537,154.472949 403.738497,161.708811 398.268045,163.881425 C402.881743,165.630113 406.822278,168.719464 408.698089,171.278908 C411.675441,175.647981 412.188961,179.550736 412.188961,187.395991 L412.188961,204.65237 L390.921782,204.65237 L390.84196,193.574691 C390.84196,188.288882 391.350159,180.687384 387.513392,176.461386 C384.432272,173.372036 379.736092,172.701705 372.145041,172.701705 L349.510249,172.701705 L349.510249,204.65237 L328.42666,204.65237 L328.42666,116.8099 L376.923705,116.8099 C387.699643,116.8099 395.639248,117.0934 402.456027,121.017352 C409.126466,124.941303 413.125537,130.669584 413.125537,140.467541 L413.125537,140.467541 Z M385.552438,152.803746 C382.654907,154.555084 379.227893,154.613374 375.122393,154.613374 L349.507588,154.613374 L349.507588,135.102245 L375.470948,135.102245 C379.14541,135.102245 382.979516,135.266516 385.469955,136.686663 C388.205181,137.966386 389.897402,140.690101 389.897402,144.452432 C389.897402,148.291599 388.287663,151.380949 385.552438,152.803746 L385.552438,152.803746 Z M446.868858,204.65237 L425.354231,204.65237 L425.354231,116.8099 L446.868858,116.8099 L446.868858,204.65237 L446.868858,204.65237 Z M696.466202,204.65237 L666.586254,204.65237 L626.619495,138.721501 L626.619495,204.65237 L583.678045,204.65237 L575.472367,185.059106 L531.671503,185.059106 L523.710612,204.65237 L499.037704,204.65237 C488.788589,204.65237 475.812231,202.394972 468.463307,194.936549 C461.053186,187.478126 457.197795,177.375474 457.197795,161.401466 C457.197795,148.373734 459.501983,136.464103 468.564414,127.052978 C475.381193,120.042325 486.056024,116.8099 500.586247,116.8099 L520.999333,116.8099 L520.999333,135.632151 L501.014623,135.632151 C493.319805,135.632151 488.97484,136.771448 484.789519,140.835825 C481.194879,144.534567 478.728386,151.526673 478.728386,160.733785 C478.728386,170.14491 480.606858,176.930353 484.526107,181.363014 C487.772192,184.839195 493.671021,185.893708 499.221294,185.893708 L508.690817,185.893708 L538.40846,116.81255 L570.001916,116.81255 L605.700871,199.899116 L605.700871,116.81255 L637.805185,116.81255 L674.869092,177.990164 L674.869092,116.81255 L696.466202,116.81255 L696.466202,204.65237 L696.466202,204.65237 Z M568.285748,166.748214 L553.694329,131.729395 L539.182732,166.748214 L568.285748,166.748214 Z M750,344.518333 C744.878103,351.976756 734.897722,355.757633 721.386557,355.757633 L680.666813,355.757633 L680.666813,336.916836 L721.221592,336.916836 C725.244609,336.916836 728.059657,336.38958 729.754539,334.741573 C731.22326,333.382365 732.247639,331.408466 732.247639,329.010643 C732.247639,326.451198 731.22326,324.41901 729.672057,323.200226 C728.14214,321.859565 725.915112,321.250173 722.243311,321.250173 C702.444852,320.579843 677.745337,321.859565 677.745337,294.055412 C677.745337,281.31118 685.871193,267.896617 707.997786,267.896617 L749.997339,267.896617 L749.997339,250.415027 L710.975138,250.415027 C699.198767,250.415027 690.644534,253.223528 684.586062,257.589951 L684.586062,250.415027 L626.866942,250.415027 C617.636885,250.415027 606.802411,252.693622 601.677854,257.589951 L601.677854,250.415027 L498.606667,250.415027 L498.606667,257.589951 C490.40365,251.697399 476.562555,250.415027 470.174153,250.415027 L402.187294,250.415027 L402.187294,257.589951 C395.697784,251.331764 381.266009,250.415027 372.46965,250.415027 L296.380881,250.415027 L278.969093,269.178989 L262.661506,250.415027 L149.000631,250.415027 L149.000631,373.014013 L260.522283,373.014013 L278.463555,353.953304 L295.364484,373.014013 L364.10699,373.074952 L364.10699,344.234834 L370.865232,344.234834 C379.9862,344.375259 390.743513,344.009624 400.234321,339.924051 L400.234321,373.011363 L456.934383,373.011363 L456.934383,341.058049 L459.669609,341.058049 C463.160481,341.058049 463.503714,341.201123 463.503714,344.674655 L463.503714,373.008714 L635.748444,373.008714 C646.684026,373.008714 658.114503,370.22141 664.44437,365.16346 L664.44437,373.008714 L719.079708,373.008714 C730.448989,373.008714 741.552196,371.421646 750,367.357269 L750,344.518333 Z M408.51716,296.840067 C408.51716,321.247524 390.229993,326.286927 371.799147,326.286927 L345.489893,326.286927 L345.489893,355.757633 L304.506737,355.757633 L278.543377,326.671109 L251.560959,355.757633 L168.040784,355.757633 L168.040784,267.893967 L252.846089,267.893967 L278.788164,296.694343 L305.608277,267.893967 L372.98317,267.893967 C389.716473,267.893967 408.51716,272.506796 408.51716,296.840067 Z M240.886128,337.446742 L189.044551,337.446742 L189.044551,319.965152 L235.335855,319.965152 L235.335855,302.038442 L189.044551,302.038442 L189.044551,286.064434 L241.907847,286.064434 L264.971016,311.669478 L240.886128,337.446742 Z M324.488786,347.766655 L292.115738,311.976823 L324.488786,277.323639 L324.488786,347.766655 Z M372.738383,308.442352 L345.489893,308.442352 L345.489893,286.067084 L372.98317,286.067084 C380.595506,286.067084 385.879707,289.156434 385.879707,296.840067 C385.879707,304.438915 380.840293,308.442352 372.738383,308.442352 Z M514.999397,267.893967 L585.372927,267.893967 L585.372927,286.064434 L535.997843,286.064434 L535.997843,302.038442 L584.167619,302.038442 L584.167619,319.965152 L535.997843,319.965152 L535.997843,337.446742 L585.372927,337.526227 L585.372927,355.757633 L514.999397,355.757633 L514.999397,267.893967 L514.999397,267.893967 Z M488.362873,314.925749 C493.056393,316.650592 496.893159,319.742592 498.69181,322.302036 C501.669162,326.591623 502.100199,330.595061 502.185343,338.339633 L502.185343,355.757633 L481.01661,355.757633 L481.01661,344.764739 C481.01661,339.47893 481.527469,331.652223 477.608221,327.56665 C474.5271,324.41901 469.83092,323.666543 462.138762,323.666543 L439.605077,323.666543 L439.605077,355.757633 L418.41772,355.757633 L418.41772,267.893967 L467.098355,267.893967 C477.773186,267.893967 485.547826,268.362934 492.468373,272.040479 C499.122847,276.043917 503.308169,281.528441 503.308169,291.551608 C503.305508,305.575562 493.913147,312.731939 488.362873,314.925749 Z M475.628641,303.991144 C472.808272,305.657698 469.32006,305.800772 465.217222,305.800772 L439.602417,305.800772 L439.602417,286.067084 L465.565777,286.067084 C469.32006,286.067084 473.077005,286.14657 475.628641,287.654151 C478.361206,289.076948 479.994891,291.798014 479.994891,295.557695 C479.994891,299.317376 478.361206,302.345787 475.628641,303.991144 Z M665.891804,309.417379 C669.997304,313.648676 672.197724,318.990126 672.197724,328.032967 C672.197724,346.934703 660.33887,355.757633 639.074351,355.757633 L598.006052,355.757633 L598.006052,336.916836 L638.909386,336.916836 C642.908457,336.916836 645.74479,336.38958 647.522155,334.741573 C648.97225,333.382365 650.012594,331.408466 650.012594,329.010643 C650.012594,326.451198 648.887107,324.41901 647.439672,323.200226 C645.827273,321.859565 643.602906,321.250173 639.931105,321.250173 C620.212468,320.579843 595.518274,321.859565 595.518274,294.055412 C595.518274,281.31118 603.558987,267.896617 625.664294,267.896617 L667.935241,267.896617 L667.935241,286.596989 L629.256274,286.596989 C625.422168,286.596989 622.929069,286.740064 620.80847,288.184057 C618.498961,289.606854 617.642207,291.718528 617.642207,294.505832 C617.642207,297.820392 619.603162,300.075141 622.255905,301.050168 C624.480272,301.82118 626.869603,302.04639 630.461583,302.04639 L641.812238,302.351086 C653.258679,302.629287 661.115802,304.600536 665.891804,309.417379 Z M750,286.59169 L711.571141,286.59169 C707.734374,286.59169 705.185399,286.734765 703.038194,288.178758 C700.813827,289.601555 699.957074,291.713229 699.957074,294.500533 C699.957074,297.815093 701.835546,300.069842 704.568111,301.044869 C706.792478,301.815881 709.181809,302.041091 712.693967,302.041091 L724.121783,302.345787 C735.653368,302.629287 743.350847,304.603185 748.044367,309.417379 C748.89846,310.08771 749.41198,310.840176 750,311.592642 L750,286.59169 Z" id="American"/>
                    </g>
                </g>
            </svg>
        );
    }
}