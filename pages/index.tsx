import styles from '../css/styles.css';
import React, { Component } from 'react';
import DownloadableQRCode from '../components/DownloadableQRCode';
import TextInput from '../components/TextInput';

type State = {
  qrValue: string;
};

class Index extends Component<{}, State> {
  render() {
    return (
      <div>
        <h1 id={styles.title}>Generate QR codes</h1>

        <div className={styles.wrapper}>
          <DownloadableQRCode value={this.state !== null ? this.state.qrValue : ''} />
          <TextInput onChange={(newText) => {
            this.setState({
              qrValue: newText,
            });
          }} />
        </div>
      </div>
    );
  }
}

export default Index;
