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
    Icon: IconWechat,
    link: "https://www.wechat.com/",
  },
  {
    Icon: IconSkype,
    link: "https://www.skype.com/",
  },
  {
    Icon: IconSnapchat,
    link: "https://www.snapchat.com/",
  },
  {
    Icon: IconViber,
    link: "https://www.viber.com/",
  },
  {
    Icon: IconYoutube,
    link: "https://www.viber.com/",
  },
  {
    Icon: IconFb,
    link: "http://facebook.com",
  },
  {
    Icon: IconTinder,
    link: "http://tinder.com",
  },
  {
    Icon: IconTg,
    link: "http://telegram.com",
  },
  {
    Icon: IconTiktok,
    link: "http://tiktok.com",
  },
  {
    Icon: IconZoom,
    link: "http://zoom.com",
  },
  {
    Icon: IconLine,
    link: "http://line.com",
  },
  {
    Icon: IconSignal,
    link: "http://signal.com",
  },
  {
    Icon: IconKik,
    link: "http://kik.com",
  },
  {
    Icon: IconHangouts,
    link: "http://hangouts.com",
  },
  {
    Icon: IconInstagram,
    link: "http://instagram.com",
  },
  {
    Icon: IconReddit,
    link: "http://reddit.com",
  },
  {
    Icon: IconWhatsapp,
    link: "http://whatsapp.com",
  },
  {
    Icon: IconFbMess,
    link: "http://facebook.com",
  },
];

function SocialIconsList() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2} sx={{maxWidth: '265px'}}>
      {socialIconsListConfig.map(({ Icon, link }, index) => (
        <Box gridColumn="span 1">
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
          </a>
        </Box>
      ))}
    </Box>
  );
}

export default SocialIconsList;
