import React, { FunctionComponent } from "react";
import QRCode from "qrcode.react";
import { Button } from "@material-ui/core";
import styles from "./DownloadableQRCode.module.css";

const downloadQR = () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  if (canvas) {
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr.png";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  } else {
    console.log("Could not find QR code element");
  }
};

type Props = {
  value: string;
};

const DownloadableQRCode: FunctionComponent<Props> = function ({ value }) {
  return (
    <div className={styles.qrWrapper}>
      <QRCode value={value} size={250} />
      <Button
        id={styles.qrButton}
        onClick={downloadQR}
        variant="contained"
        color="default"
      >
        Download QR
      </Button>
    </div>
  );
};

export default DownloadableQRCode;
