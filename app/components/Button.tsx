'use client'

import Button from '@mui/material/Button';
import React, { useState } from 'react';

import styles from '@/app/ui/home.module.css'


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface ButtonProps {
  sliderValue: number;
  selectedModal: string;
  isVisisbleP2P: number;
  isVisiblePubSub: number;
  selectedProcess: string;
  messageAc: boolean;
  handleMessageAc: (value: boolean) => void;
}



export default function ButtonPackage({
  sliderValue,
  selectedModal,
  isVisisbleP2P,
  isVisiblePubSub,
  selectedProcess,
  messageAc,
  handleMessageAc
}: ButtonProps) {

  async function buttonPressed() {



    var sleept: number = 30;

    switch (sliderValue) {
      case sliderValue = 10: {
        sleept = 30;
        break;
      }
      case sliderValue = 20: {
        sleept = 20;
        break;
      }
      case sliderValue = 30: {
        sleept = 10;
        break;
      }
      case sliderValue = 40: {
        sleept = 1;
        break;
      }
    }



    async function P2PBauLv1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      butt.style.left = '250px';
      butt.style.top = '180px';
      /* butt.style.top = '373px'; */
      butt.style.visibility = 'visible';
      butt.style.background = 'red';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 58; i++) {
        currentleft += 2;
        currenttop -= 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 520; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 105; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        currenttop += 1.18;
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 110; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }
      butt.style.visibility = 'hidden';
      handleMessageAc(true);
    }

    async function P2PBauKp1() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID2");

      butt.style.left = '250px';
      butt.style.top = '200px';
      /* butt.style.top = '393px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 58; i++) {
        currentleft += 2;
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }


      for (i = 1; i <= 520; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 105; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        currenttop -= 1.18;
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 110; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.visibility = 'hidden';



    }


    async function P2PBauPp1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID3");
      butt.style.background = 'red';

      butt.style.left = '250px';
      butt.style.top = '190px';
      /* butt.style.top = '383px' */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;


      for (i = 1; i <= 790; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.visibility = 'hidden';

    }

    async function P2PVerLv1() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      var butt2: any = document.getElementById("DataPackageID2");
      var butt3: any = document.getElementById("DataPackageID3");

      butt.style.background = 'red';
      butt2.style.background = 'red';
      butt3.style.background = 'red';

      butt.style.left = '235px';
      butt.style.top = '575px';
      /* butt.style.top = '768px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 62; i++) {
        currentleft += 2.2;
        currenttop -= 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 161; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }


      for (i = 1; i <= 192; i++) {
        currenttop -= 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 605; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 162; i++) {
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 152; i++) {
        currentleft -= 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 72; i++) {
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      butt.style.visibility = 'hidden';
      butt3.style.visibility = 'hidden';

      var currentleft = parseInt(butt2.style.left, 10) || 0;
      var currenttop = parseInt(butt2.style.top, 10) || 0;
      for (i = 1; i <= 133; i++) {
        currentleft += 2;
        butt2.style.left = currentleft + 'px';
        butt2.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      butt2.style.visibility = 'hidden';
      handleMessageAc(true);

    }


    async function P2PVerPp1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID2");


      butt.style.left = '235px';
      butt.style.top = '580px';
      /* butt.style.top = '773px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;


      for (i = 1; i <= 258; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 130; i++) {
        currenttop -= 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 348; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 128; i++) {
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 52; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      /* butt.style.visibility = 'hidden'; */

    }


    async function P2PVerTb1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID3");


      butt.style.left = '235px';
      butt.style.top = '580px';
      /* butt.style.top = '773px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;


      for (i = 1; i <= 62; i++) {
        currentleft += 2.2;
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 514; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      for (i = 1; i <= 68; i++) {
        currentleft += 2.2;
        currenttop -= 1.7;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }



      /* butt.style.visibility = 'hidden'; */

    }


    async function PubSub_LvInit() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      butt.style.background = 'red';


      butt.style.left = '250px';
      /* butt.style.top = '122px'; */
      butt.style.top = '295px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;


      for (i = 1; i <= 90; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 63; i++) {
        currentleft += 2.2;
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }
      /* for (i = 1; i <= 27; i++) {
        currentleft += 2;       
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      } */

      await sleep(500);

      PubSub_Lv_Pp_2();

      /* butt.style.visibility = 'hidden'; */

    }




    async function PubSubBauLv() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      butt.style.background = 'red';


      butt.style.left = '622.6px';
      butt.style.top = '421px';
      /* butt.style.top = '248px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 85; i++) {
        currentleft += 1.8;
        currenttop -= 2.2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'green';

      for (i = 1; i <= 177; i++) {
        currentleft += 2.2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 73; i++) {
        currentleft += 2.3;
        currenttop += 2.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 35; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 130; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      /* butt.style.visibility = 'hidden'; */

    }




    async function PubSubBauPp(isVisiblePubSub: number) {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID2");
      butt.style.background = 'red';


      butt.style.left = '662.6px';
      butt.style.top = '421px';
      /* butt.style.top = '248px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 65; i++) {
        currentleft += 2.2;
        currenttop -= 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'blue';

      for (i = 1; i <= 225; i++) {
        currentleft += 1.5;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 75; i++) {
        currentleft += 2.2;
        currenttop += 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 40; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 130; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      if (isVisiblePubSub === 0) {
        butt.style.background = 'red';
      }


      if (isVisiblePubSub === 0) {
        var butt1: any = document.getElementById("DataPackageID1");
        butt1.style.visibility = 'hidden';

        for (i = 1; i <= 130; i++) {
          currentleft += 2;
          butt.style.left = currentleft + 'px';
          await sleep(sleept);
        }
      }

      butt.style.visibility = 'hidden';

      if (isVisiblePubSub === 0) {
        handleMessageAc(true);
      }




    }


    async function PubSubBauKp() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID3");
      butt.style.background = 'red';


      butt.style.left = '662.6px';
      butt.style.top = '425px';
      /* butt.style.top = '252px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 70; i++) {
        currentleft += 1.5;
        currenttop += 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'orange';

      for (i = 1; i <= 266; i++) {
        currentleft += 1.5;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 82; i++) {
        currentleft += 2;
        currenttop -= 0.8;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }





      for (i = 1; i <= 40; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 125; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      var butt1: any = document.getElementById("DataPackageID1");
      butt1.style.visibility = 'hidden';
      var butt2: any = document.getElementById("DataPackageID2");
      butt2.style.visibility = 'hidden';

      butt.style.background = 'red';

      for (i = 1; i <= 130; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.visibility = 'hidden';

      handleMessageAc(true);

    }

    async function PubSub_Bau_1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");


      butt.style.left = '250px';
      butt.style.top = '295px';
      /* butt.style.top = '122px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;
      butt.style.background = 'red';


      for (i = 1; i <= 90; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 63; i++) {
        currentleft += 2.2;
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      await sleep(500);

      PubSub_Bau_2();

    }





    async function PubSub_Lv_Pp_2() {
      await Promise.all([
        PubSubBauLv(),
        PubSubBauPp(isVisiblePubSub)
      ]);
    }

    async function PubSub_Bau_2() {
      await Promise.all([
        PubSubBauLv(),
        PubSubBauPp(isVisiblePubSub),
        PubSubBauKp()
      ]);
    }

    async function PubSub_Bau6_2() {
      await Promise.all([
        PubSubBau6Lv(),
        PubSubBau6Pp(isVisiblePubSub),
        PubSubBau6Kp()
      ]);
    }




    async function P2P_Lv_Pp() {
      await Promise.all([
        P2PBauLv1(),
        P2PBauPp1()
      ]);
    }

    async function P2P_Bau() {
      await Promise.all([
        P2PBauLv1(),
        P2PBauKp1(),
        P2PBauPp1()
      ]);
    }

    async function P2P_Ver() {
      await Promise.all([
        P2PVerLv1(),
        P2PVerPp1(),
        P2PVerTb1()
      ]);
    }

    async function PubSub_Lv_Pp_init() {
      await Promise.all([
        PubSub_LvInit(),
      ])
    }

    async function PubSub_Bau_init() {
      await Promise.all([
        PubSub_Bau_1(),
      ])
    }

    async function PubSub_Bau_6() {
      await Promise.all([
        PubSub_Bau6_1(),
      ])
    }

    /* Pub Sub Ver */

    async function PubSub_Ver() {
      await Promise.all([
        PubSub_Ver_init(),
      ])
    }



    async function PubSub_Ver_init() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      butt.style.background = 'red';


      butt.style.left = '250px';
      butt.style.top = '545px';
      /* butt.style.top = '252px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 110; i++) {
        currentleft += 1.5;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 87; i++) {
        currentleft += 1.65;
        currenttop -= 1.45;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 40; i++) {
        currentleft += 1.65;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      /* console.log(butt.style.top);
      console.log(butt.style.left); */
      PubSub_Ver_Init();

    }

    async function PubSub_Ver_Init() {
      await Promise.all([
        PubSub_Ver_LV1(),
        PubSub_Ver_KP1(),
        PubSub_Ver_TB1(),
      ])
    }

    async function PubSub_Ver_LV1() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      /* butt.style.background = 'green'; */


      butt.style.left = '624.55px';
      butt.style.top = '418.85px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 113; i++) {
        currentleft += 1.35;
        currenttop -= 1.65;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 100; i++) {
        currentleft += 1.35;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'green';

      for (i = 1; i <= 187; i++) {
        currentleft += 1.35;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 118; i++) {
        currentleft += 1.50;
        currenttop += 1.60;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 45; i++) {
        currentleft += 1.50;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      PubSub_Ver_LV2_Call();
      /*  console.log(butt.style.top);
       console.log(butt.style.left); */


      for (i = 1; i <= 110; i++) {
        currentleft += 1.35;
        currenttop -= 1.70;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      /* butt.style.background = 'red'; */

      var butt2: any = document.getElementById("DataPackageID2");

      await sleep(3500);

      butt2.style.visibility = 'hidden';

      /* for (i = 1; i <= 195; i++) {
        currentleft += 1.35;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      } */

      butt.style.visibility = 'hidden';

      
      handleMessageAc(true);




    }

    async function PubSub_Ver_KP1() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID2");
      butt.style.background = 'red';


      butt.style.left = '624.55px';
      butt.style.top = '418.85px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 83; i++) {
        currentleft += 2;
        currenttop += 0.8;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 62; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'orange';

      for (i = 1; i <= 125; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 83; i++) {
        currentleft += 2;
        currenttop -= 0.8;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 35; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      PubSub_Ver_Kp2_Call();
      /*  console.log(butt.style.top);
      console.log(butt.style.left); */

      for (i = 1; i <= 100; i++) {
        currentleft += 1.45;
        currenttop -= 1.8;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }



    }

    async function PubSub_Ver_TB1() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID3");
      /* butt.style.background = 'blue'; */
      butt.style.background = 'red';


      butt.style.left = '624.55px';
      butt.style.top = '418.85px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 115; i++) {
        currentleft += 1.35;
        currenttop += 1.65;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 100; i++) {
        currentleft += 1.8;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

       butt.style.background = 'blue';

      for (i = 1; i <= 120; i++) {
        currentleft += 1.8;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 108; i++) {
        currentleft += 1.55;
        currenttop -= 1.75;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 35; i++) {
        currentleft += 1.8;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 108; i++) {
        currentleft += 1.45;
        currenttop += 1.75;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }




    }


    async function PubSub_Ver_LV2_Call() {
      await Promise.all([
        PubSub_Ver_LV_2(),
      ])
    }


    async function PubSub_Ver_LV_2() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID4");
      butt.style.background = 'green';


      butt.style.left = '1408.5px';
      butt.style.top = '420.35px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 115; i++) {
        currentleft += 1.35;
        currenttop += 1.75;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'red';

      var butt5: any = document.getElementById("DataPackageID5");
      var butt3: any = document.getElementById("DataPackageID3");
      butt5.style.visibility = 'hidden';
      butt3.style.visibility = 'hidden';

      for (i = 1; i <= 195; i++) {
        currentleft += 1.35;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      /* await sleep(5000); */

      butt.style.visibility = 'hidden';



    }


    async function PubSub_Ver_Kp2_Call() {
      await Promise.all([
        PubSub_Ver_Kp_2(),
      ])
    }


    async function PubSub_Ver_Kp_2() {

      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID5");
      butt.style.background = 'orange';


      butt.style.left = '1400px';
      butt.style.top = '418px';
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 115; i++) {
        currentleft += 1.35;
        currenttop += 1.75;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

     /*  await sleep(4500);

      butt.style.visibility = 'hidden';
 */
    }






    /* PubSub Bau 6 */

    async function PubSub_Bau6_1() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");


      butt.style.left = '250px';
      butt.style.top = '295px';
      /* butt.style.top = '122px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;
      butt.style.background = 'red';


      for (i = 1; i <= 90; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 63; i++) {
        currentleft += 2.2;
        currenttop += 2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      await sleep(500);

      PubSub_Bau6_2();

    }

    async function PubSubBau6Lv() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID1");
      butt.style.background = 'red';


      butt.style.left = '622.6px';
      butt.style.top = '421px';
      /* butt.style.top = '248px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 85; i++) {
        currentleft += 1.8;
        currenttop -= 2.2;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'green';

      for (i = 1; i <= 177; i++) {
        currentleft += 2.2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 73; i++) {
        currentleft += 2.3;
        currenttop += 2.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 35; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      PubSub_Bau_6_LV_Call();
      /*  console.log(butt.style.top);
       console.log(butt.style.left); */


      for (i = 1; i <= 130; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      /* butt.style.visibility = 'hidden'; */

    }

    async function PubSubBau6Pp(isVisiblePubSub: number) {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID2");
      butt.style.background = 'red';


      butt.style.left = '662.6px';
      butt.style.top = '421px';
      /* butt.style.top = '248px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 65; i++) {
        currentleft += 2.2;
        currenttop -= 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'blue';

      for (i = 1; i <= 225; i++) {
        currentleft += 1.5;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 75; i++) {
        currentleft += 2.2;
        currenttop += 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 40; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 130; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      if (isVisiblePubSub === 0) {
        butt.style.background = 'red';
      }


      if (isVisiblePubSub === 0) {
        var butt1: any = document.getElementById("DataPackageID1");
        butt1.style.visibility = 'hidden';

        for (i = 1; i <= 130; i++) {
          currentleft += 2;
          butt.style.left = currentleft + 'px';
          await sleep(sleept);
        }
      }



    }

    async function PubSubBau6Kp() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID3");
      butt.style.background = 'red';


      butt.style.left = '662.6px';
      butt.style.top = '425px';
      /* butt.style.top = '252px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 70; i++) {
        currentleft += 1.5;
        currenttop += 0.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      butt.style.background = 'orange';

      for (i = 1; i <= 266; i++) {
        currentleft += 1.5;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      for (i = 1; i <= 82; i++) {
        currentleft += 2;
        currenttop -= 0.8;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }





      for (i = 1; i <= 40; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      PubSub_Bau_6_Kp_Call();
      /* console.log(butt.style.left);
      console.log(butt.style.top);
 */
      for (i = 1; i <= 125; i++) {
        currentleft += 1.2;
        currenttop -= 1.5;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      var butt1: any = document.getElementById("DataPackageID1");
      butt1.style.visibility = 'hidden';
      var butt2: any = document.getElementById("DataPackageID2");
      butt2.style.visibility = 'hidden';

      butt.style.background = 'red';

      for (i = 1; i <= 130; i++) {
        currentleft += 2;
        butt.style.left = currentleft + 'px';
        await sleep(sleept);
      }

      butt.style.visibility = 'hidden';

      await sleep (3500);
      handleMessageAc(true);

    }


    async function PubSub_Bau_6_LV_Call() {
      await Promise.all([
        PubSub_Bau_6_LV(),
      ])
    }

    async function PubSub_Bau_6_Kp_Call() {
      await Promise.all([
        PubSub_Bau_6_Kp(),
      ])
    }

    async function PubSub_Bau_6_LV() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID4");
      butt.style.background = 'green';


      butt.style.left = '1402.3px';
      butt.style.top = '416.5px';
      /* butt.style.top = '252px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 100; i++) {
        currentleft += 1.5;
        currenttop += 1.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      await sleep(7000);
      butt.style.visibility = 'hidden';

    }


    async function PubSub_Bau_6_Kp() {
      var i: number = 1;
      var butt: any = document.getElementById("DataPackageID5");
      butt.style.background = 'orange';


      butt.style.left = '1410px';
      butt.style.top = '422.4px';
      /* butt.style.top = '252px'; */
      butt.style.visibility = 'visible';
      var currentleft = parseInt(butt.style.left, 10) || 0;
      var currenttop = parseInt(butt.style.top, 10) || 0;

      for (i = 1; i <= 100; i++) {
        currentleft += 1.5;
        currenttop += 1.9;
        butt.style.left = currentleft + 'px';
        butt.style.top = currenttop + 'px';
        await sleep(sleept);
      }

      await sleep(7000);
      butt.style.visibility = 'hidden';

    }









    if (selectedModal === 'Point-to-Point') {
      if (selectedProcess === 'Baubarkeitsberechnung') {
        if (isVisisbleP2P < 3) {
          P2P_Lv_Pp();
        } else {
          P2P_Bau();
        }
      } else {
        if (isVisisbleP2P == 8) {
          P2P_Ver();
        }

      }

    } else {

      if (selectedProcess === 'Baubarkeitsberechnung') {
        if (isVisiblePubSub === 0) {
          PubSub_Lv_Pp_init();
        } else if (isVisiblePubSub === 1) {
          PubSub_Bau_init();
        } else if (isVisiblePubSub === 6) {
          PubSub_Bau_6();
        }
      } else if (isVisiblePubSub === 6) {
        PubSub_Ver();
      }
    }
    /* handleMessageAc(true); */
  }






  return (
    <Button className={styles.button} variant="contained" onClick={buttonPressed}
      sx={{
        backgroundColor: '#e99f4c',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#de5499'
        }
      }} >
      Nachricht versenden
    </Button>
  );
}