import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {DEFAULT_HEIGHT, DEFAULT_WIDTH} from "./const";

export default class Diners extends Component {

    static propTypes = {
        type: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
    }

    static defaultProps = {
        type: "flat",
        height: DEFAULT_HEIGHT,
        width: DEFAULT_WIDTH,
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
            <svg width={w} height={h} viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="diners" fill-rule="nonzero">
                        <rect id="rectangle" fill="#0079BE" x="0" y="0" width="750" height="471" rx="40"></rect>
                        <path d="M584.933911,237.947339 C584.933911,138.53154 501.952976,69.8140806 411.038924,69.8471464 L332.79674,69.8471464 C240.793699,69.8140806 165.066089,138.552041 165.066089,237.947339 C165.066089,328.877778 240.793699,403.587432 332.79674,403.150963 L411.038924,403.150963 C501.952976,403.586771 584.933911,328.857939 584.933911,237.947339 Z" id="Shape-path" fill="#FFFFFF"></path>
                        <path d="M333.280302,83.9308394 C249.210378,83.9572921 181.085889,152.238282 181.066089,236.510581 C181.085889,320.768331 249.209719,389.042708 333.280302,389.069161 C417.370025,389.042708 485.508375,320.768331 485.520254,236.510581 C485.507715,152.238282 417.370025,83.9572921 333.280302,83.9308394 Z" id="Shape-path" fill="#0079BE"></path>
                        <path d="M237.066089,236.09774 C237.145288,194.917524 262.812421,159.801587 299.006443,145.847134 L299.006443,326.327183 C262.812421,312.380667 237.144628,277.283907 237.066089,236.09774 Z M368.066089,326.372814 L368.066089,145.847134 C404.273312,159.767859 429.980043,194.903637 430.046043,236.103692 C429.980043,277.316312 404.273312,312.425636 368.066089,326.372814 Z" id="Path" fill="#FFFFFF"></path>
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
            <svg width={w} height={h} viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="diners" fill="#393939" fill-rule="nonzero">
                        <path d="M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M584.933911,236.947339 C584.933911,137.53154 501.952976,68.8140806 411.038924,68.8471464 L332.79674,68.8471464 C240.793699,68.8140806 165.066089,137.552041 165.066089,236.947339 C165.066089,327.877778 240.793699,402.587432 332.79674,402.150963 L411.038924,402.150963 C501.952976,402.586771 584.933911,327.857939 584.933911,236.947339 Z M333.166996,82.6223815 C249.097073,82.6488342 180.972583,150.929824 180.952783,235.202123 C180.972583,319.459873 249.096413,387.73425 333.166996,387.760703 C417.256719,387.73425 485.395069,319.459873 485.406949,235.202123 C485.394409,150.929824 417.256719,82.6488342 333.166996,82.6223815 Z M236.682602,235.202123 C236.761801,194.021908 262.428934,158.90597 298.622956,144.951518 L298.622956,325.431566 C262.428934,311.48505 236.761141,276.388291 236.682602,235.202123 Z M367.697836,325.471245 L367.697836,144.945566 C403.905059,158.866291 429.611791,194.002068 429.67779,235.202123 C429.611791,276.414743 403.905059,311.524068 367.697836,325.471245 Z" id="Rectangle-1"></path>
                    </g>
                </g>
            </svg>

        );
    }
}