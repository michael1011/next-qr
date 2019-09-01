import Head from 'next/head';
import styles from '../css/styles.css';
import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import DownloadableQRCode from '../components/DownloadableQRCode';

type State = {
  qrValue: string;
};

class Index extends Component<{}, State> {
  render() {
    return (
      <div>
        <Head>
          <title>QR-Code generator</title>
        </Head>

        <h1 id={styles.title}>QR-Code generator</h1>

        <div className={styles.wrapper}>
          <DownloadableQRCode value={this.state !== null ? this.state.qrValue : ''} />

          <div className={styles.config}>
            <TextInput onChange={(newText) => {
              this.setState({
                qrValue: newText,
              });
            }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
