import styles from '../css/qrStyles.css';
import React, { FunctionComponent } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '@material-ui/core';

const downloadQR = () => {
  const canvas = document.getElementsByTagName('canvas')[0];

  if (canvas) {
    const pngUrl = (canvas as any)
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
    
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr.png'
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
  } else {
    console.log('Could not find QR code element');
  }
};

type Props = {
  value: string;
};

const DownloadableQRCode: FunctionComponent<Props> = ({ value }) => {
  return (
    <div className={styles.qrWrapper}>
      <QRCode value={value} size={250} />
      <Button id={styles.qrButton} onClick={downloadQR} variant={'contained'} color={'default'}>Download QR</Button>
    </div>
  );
};

export default DownloadableQRCode;
