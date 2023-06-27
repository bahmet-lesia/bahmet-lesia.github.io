import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { ReactComponent as IconWechat } from "../../icons/wechat.svg";
import { ReactComponent as IconSkype } from "../../icons/Skype.svg";
import { ReactComponent as IconFb } from "../../icons/fb.svg";
import { ReactComponent as IconSnapchat } from "../../icons/snapchat.svg";
import { ReactComponent as IconViber } from "../../icons/viber.svg";
import { ReactComponent as IconYoutube } from "../../icons/youtube.svg";
import { ReactComponent as IconTinder } from "../../icons/tinder.svg";
import { ReactComponent as IconTg } from "../../icons/tg.svg";
import { ReactComponent as IconTiktok } from "../../icons/tiktok.svg";
import { ReactComponent as IconZoom } from "../../icons/zoom.svg";
import { ReactComponent as IconLine } from "../../icons/line.svg";
import { ReactComponent as IconSignal } from "../../icons/signal.svg";
import { ReactComponent as IconKik } from "../../icons/Kik.svg";
import { ReactComponent as IconHangouts } from "../../icons/hangouts.svg";
import { ReactComponent as IconInstagram } from "../../icons/inst.svg";
import { ReactComponent as IconReddit } from "../../icons/reddit.svg";
import { ReactComponent as IconWhatsapp } from "../../icons/whatsapp.svg";
import { ReactComponent as IconFbMess } from "../../icons/fb_mess.svg";

const socialIconsListConfig = [
  {
    id: 0,
    Icon: IconWechat,
    link: "https://www.wechat.com/",
  },
  {
    id: 1,
    Icon: IconSkype,
    link: "https://www.skype.com/",
  },
  {
    id: 2,
    Icon: IconSnapchat,
    link: "https://www.snapchat.com/",
  },
  {
    id: 3,
    Icon: IconViber,
    link: "https://www.viber.com/",
  },
  {
    id: 4,
    Icon: IconYoutube,
    link: "https://www.viber.com/",
  },
  {
    id: 5,
    Icon: IconFb,
    link: "http://facebook.com",
  },
  {
    id: 6,
    Icon: IconTinder,
    link: "http://tinder.com",
  },
  {
    id: 7,
    Icon: IconTg,
    link: "http://telegram.com",
  },
  {
    id: 8,
    Icon: IconTiktok,
    link: "http://tiktok.com",
  },
  {
    id: 9,
    Icon: IconZoom,
    link: "http://zoom.com",
  },
  {
    id: 10,
    Icon: IconLine,
    link: "http://line.com",
  },
  {
    id: 11,
    Icon: IconSignal,
    link: "http://signal.com",
  },
  {
    id: 12,
    Icon: IconKik,
    link: "http://kik.com",
  },
  {
    id: 13,
    Icon: IconHangouts,
    link: "http://hangouts.com",
  },
  {
    id: 14,
    Icon: IconInstagram,
    link: "http://instagram.com",
  },
  {
    id: 15,
    Icon: IconReddit,
    link: "http://reddit.com",
  },
  {
    id: 16,
    Icon: IconWhatsapp,
    link: "http://whatsapp.com",
  },
  {
    id: 17,
    Icon: IconFbMess,
    link: "http://facebook.com",
  },
];

function SocialIconsList() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2} sx={{maxWidth: '265px'}}>
      {socialIconsListConfig.map(({ id, Icon, link }, index) => (
        <Box gridColumn="span 1" key={id}>
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
          </a>
        </Box>
      ))}
    </Box>
  );
}

export default SocialIconsList;
