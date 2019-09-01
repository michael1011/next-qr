import Head from "next/head";
import React, { Component } from "react";
import styles from "../css/styles.css";
import TextInput from "../components/TextInput";
import ThemeProvider from "../components/ThemeProvider";
import DownloadableQRCode from "../components/DownloadableQRCode";

type State = {
  qrValue: string;
};

class Index extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      qrValue: ""
    };
  }

  render() {
    const { qrValue } = this.state;

    return (
      <ThemeProvider>
        <Head>
          <title>QR-Code generator</title>
        </Head>

        <h1 id={styles.title}>QR-Code generator</h1>

        <div className={styles.wrapper}>
          <DownloadableQRCode value={qrValue} />

          <div className={styles.input}>
            <TextInput
              onChange={newText => {
                this.setState({
                  qrValue: newText
                });
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
