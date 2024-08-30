'use client'

import React from 'react';
import Image from 'next/image';
import ArrowEdge6 from '../../public/images/ArrowEdge6.svg';
import BasicArrowSVG from '../../public/images/BasicArrow.svg';
import BasicArrowShortSVG from '../../public/images/BasicArrow_short.svg';
import ArrowEdge4 from '../../public/images/ArrowEdge4.svg';
import ChannelAdapterSVG from '../../public/images/ChannelAdapter.svg';
import P2PSVG from '../../public/images/P2P.svg';

interface KapaProps {
  isVisible: number;
}

function Kapa({ isVisible }: KapaProps) {
  /* switch (isVisible) {
    case 0:
      return null;
    case 1:
      return (
        <div className="pKapazitaetsplanung">
          <div className="Kapazitaetsplanung">
            <p>Kapazitätsplanung</p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="pKapazitaetsplanung">
          <div className="Kapazitaetsplanung">
            <p>Kapazitätsplanung</p>
          </div>
          <div className="P2P" id="P2PAnfrageKp">
              <Image src={P2PSVG} id="P2PAnfrageKpSVGid" alt="P2PAnfrageKpSVGalt" />
          </div>

          <div className="P2P" id="P2PAntwortKp">
              <Image src={P2PSVG} id="P2PAntwortKpSVGid" alt="P2PSVGAntwortKpalt" />
            </div>

            <div className="Beschriftung" id="KpP2PAnfrageBeO">
             <p>Point-to-Point-Channel</p>
           </div>

           <div className="Beschriftung" id="KpP2PAnfrageBeU">
             <p>Anfrage_Mitarbeiter</p>
           </div>

           <div className="Beschriftung" id="KpP2PAntwortBeO">
            <p>Point-to-Point-Channel</p>
           </div>

           <div className="Beschriftung" id="KpP2PAntwortBeU">
             <p>Antwort_Mitarbeiter</p>
           </div>

        </div>
      );
    case 3:
      return (
        <div className="pKapazitaetsplanung">
          <div className="Kapazitaetsplanung">
            <p>Kapazitätsplanung</p>
          </div>
          <div className="ChannelAdapter" id="caAnfrageKp">
                <Image src={ChannelAdapterSVG}id="svgcaAnfrageKp" alt="svgcaAnfrageKp" />                   
            </div>

            <div className="P2P" id="P2PAnfrageKp">
              <Image src={P2PSVG} id="P2PAnfrageKpSVGid" alt="P2PAnfrageKpSVGalt" />
            </div>

            <div className="ChannelAdapter" id="caAntwortKp">
                <Image src={ChannelAdapterSVG}id="svgcaAntwortKp" alt="svgcaAntwortKp" />  
              </div>

              <div className="P2P" id="P2PAntwortKp">
                <Image src={P2PSVG} id="P2PAntwortKpSVGid" alt="P2PSVGAntwortKpalt" />
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeU">
                <p>Anfrage_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeU">
                <p>Antwort_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpCaAnfrageBe">
                <p>Channel Adapter</p>
              </div>

                <div className="Beschriftung" id="KpCaAntwortBe">
                <p>Channel Adapter</p>
              </div>

        </div>
      );
    case 4:
      return (
        <div className="pKapazitaetsplanung">
            <div className="Kapazitaetsplanung">
                <p>Kapazitätsplanung</p>
            </div>

            <Image src={ArrowEdge6} id="KpArrowEdge6id" alt="KpArrowEdge6alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow1id" alt="KpBasicArrow1alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow2id" alt="KpBasicArrow2alt" />
            <Image src={BasicArrowShortSVG} id="KpBasicArrow3id" alt="KpBasicArrow3alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow4id" alt="KpBasicArrow4alt" />
            <Image src={ArrowEdge4} id="KpArrowEdge4id" alt="KpArrowEdge4alt" />

            <div className="ChannelAdapter" id="caAnfrageKp">
                <Image src={ChannelAdapterSVG}id="svgcaAnfrageKp" alt="svgcaAnfrageKp" />                   
            </div>

            <div className="P2P" id="P2PAnfrageKp">
              <Image src={P2PSVG} id="P2PAnfrageKpSVGid" alt="P2PAnfrageKpSVGalt" />
            </div>

            <div className="ChannelAdapter" id="caAntwortKp">
                <Image src={ChannelAdapterSVG}id="svgcaAntwortKp" alt="svgcaAntwortKp" />  
              </div>

              <div className="P2P" id="P2PAntwortKp">
                <Image src={P2PSVG} id="P2PAntwortKpSVGid" alt="P2PSVGAntwortKpalt" />
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeU">
                <p>Anfrage_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeU">
                <p>Antwort_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpCaAnfrageBe">
                <p>Channel Adapter</p>
              </div>

                <div className="Beschriftung" id="KpCaAntwortBe">
                <p>Channel Adapter</p>
              </div>

        </div>
      );
    default:
      return null;
  } */
      //temp test
      return (
        <div className="pKapazitaetsplanung">
            <div className="Kapazitaetsplanung">
                <p>Kapazitätsplanung</p>
            </div>

            <Image src={ArrowEdge6} id="KpArrowEdge6id" alt="KpArrowEdge6alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow1id" alt="KpBasicArrow1alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow2id" alt="KpBasicArrow2alt" />
            <Image src={BasicArrowShortSVG} id="KpBasicArrow3id" alt="KpBasicArrow3alt" />
            <Image src={BasicArrowSVG} id="KpBasicArrow4id" alt="KpBasicArrow4alt" />
            <Image src={ArrowEdge4} id="KpArrowEdge4id" alt="KpArrowEdge4alt" />

            <div className="ChannelAdapter" id="caAnfrageKp">
                <Image src={ChannelAdapterSVG}id="svgcaAnfrageKp" alt="svgcaAnfrageKp" />                   
            </div>

            <div className="P2P" id="P2PAnfrageKp">
              <Image src={P2PSVG} id="P2PAnfrageKpSVGid" alt="P2PAnfrageKpSVGalt" />
            </div>

            <div className="ChannelAdapter" id="caAntwortKp">
                <Image src={ChannelAdapterSVG}id="svgcaAntwortKp" alt="svgcaAntwortKp" />  
              </div>

              <div className="P2P" id="P2PAntwortKp">
                <Image src={P2PSVG} id="P2PAntwortKpSVGid" alt="P2PSVGAntwortKpalt" />
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAnfrageBeU">
                <p>Anfrage_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeO">
                <p>Point-to-Point-Channel</p>
              </div>

              <div className="Beschriftung" id="KpP2PAntwortBeU">
                <p>Antwort_Mitarbeiter</p>
              </div>

              <div className="Beschriftung" id="KpCaAnfrageBe">
                <p>Channel Adapter</p>
              </div>

                <div className="Beschriftung" id="KpCaAntwortBe">
                <p>Channel Adapter</p>
              </div>

        </div>
      );
}

export default Kapa;