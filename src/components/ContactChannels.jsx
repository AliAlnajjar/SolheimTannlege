import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/ContactChannels.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SvgIcon from '@mui/material/SvgIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactChannels() {
  return (
    <div className={styles.container}>
      <h1> Akutt?</h1>
      <div className={styles.grid}>
        <p> Ring oss: 97 32 67 24</p>
        <Link href='tel:4797326724'>
          <a>
            <PhoneIcon sx={{ fontSize: 50 }} />
          </a>
        </Link>
        <p> Chat med oss på Whatsapp:</p>
        <Link href='https://wa.me/4797326724'>
          <a target='_blank'>
            <WhatsAppIcon sx={{ fontSize: 50, color: '#075E54' }} />
          </a>
        </Link>
        <p> Chat med oss på Messenger:</p>
        <Link href='http://m.me/Solheim.Tannlegevakt'>
          <a target='_blank'>
            <MessengerIcon />
          </a>
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        xmlns='http://www.w3.org/2000/svg'
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path
        xmlns='http://www.w3.org/2000/svg'
        d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z'
      />
    </SvgIcon>
  );
}

function MessengerIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50px'
      height='50px'
      viewBox='48.61 50.201 402.77399999999994 402.77399999999994'
    >
      <linearGradient id='a' x1='50%' x2='50%' y1='0%' y2='100.001%'>
        <stop offset='0' stop-color='#00b2ff' />
        <stop offset='1' stop-color='#006aff' />
      </linearGradient>
      <g fill='none' fill-rule='evenodd'>
        <path
          d='M250 50.201c-112.676 0-200 82.452-200 193.81 0 58.25 23.903 108.582 62.817 143.356 3.26 2.935 5.231 6.995 5.392 11.377l1.087 35.537c.362 11.337 12.072 18.694 22.455 14.151l39.678-17.487a15.974 15.974 0 0 1 10.664-.804c18.229 5.025 37.666 7.678 57.907 7.678 112.676 0 200-82.452 200-193.809S362.676 50.201 250 50.201z'
          fill='url(#a)'
        />
        <path
          d='M129.92 300.693l58.752-93.105c9.336-14.794 29.376-18.493 43.38-8l46.72 35.015a12.022 12.022 0 0 0 14.447-.04l63.099-47.84c8.41-6.391 19.437 3.7 13.762 12.624l-58.712 93.065c-9.336 14.794-29.376 18.493-43.38 8l-46.72-35.015a12.022 12.022 0 0 0-14.447.04l-63.139 47.88c-8.41 6.392-19.437-3.699-13.762-12.624z'
          fill='#fff'
        />
      </g>
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <img
      src='/WhatsappIcon.svg'
      height={96}
      width={96}
      // className={styles.image}
    />
  );
}
