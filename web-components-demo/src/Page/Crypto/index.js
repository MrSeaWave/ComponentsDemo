import React, { useState } from 'react';
import {
  Input, Row, Col, Select, Button,
} from 'antd';
import CryptoJS from 'crypto-js';
import { cryptoType } from './data';

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const width = 180;

const CryptoJsView = () => {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [cryptoHash, setCryptoHash] = useState('');
  const [selectCrypto, setSelectCrypto] = useState(undefined);
  // 加密类型的value映射
  const cryptoValueMap = {};
  const cryptoOptions = cryptoType.map((item) => {
    const { children } = item;
    if (!children) {
      cryptoValueMap[item.value] = { ...item };
      return (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      );
    }
    const options = children.map((child) => {
      cryptoValueMap[child.value] = { ...child };
      return (
        <Option key={child.value} value={child.value}>
          {child.label}
        </Option>
      );
    });
    return (
      <OptGroup key={item.label} lable={item.label}>
        {options}
      </OptGroup>
    );
  });

  const leftOnChange = (e) => {
    setLeftInput(e.target.value);
  };
  const rightOnChange = (e) => {
    setRightInput(e.target.value);
  };
  const selectCryptoChange = (value) => {
    setSelectCrypto(value);
  };
  const cryptoHashOnChange = (e) => {
    setCryptoHash(e.target.value);
  };
  const cryptoOnClick = () => {
    setRightInput(CryptoJS[selectCrypto](leftInput, cryptoHash).toString());
  };

  const showCryptoHash = cryptoValueMap[selectCrypto]?.showHash;
  return (
    <div>
      <Row type="flex" align="middle">
        <Col span={8}>
          <TextArea rows={6} value={leftInput} onChange={leftOnChange} />
        </Col>
        <Col span={8}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Select
              style={{ width, marginBottom: 10 }}
              placeholder="请选择一种加密方式"
              value={selectCrypto}
              showSearch
              onChange={selectCryptoChange}
            >
              {cryptoOptions}
            </Select>
            {showCryptoHash ? (
              <Input
                value={cryptoHash}
                placeholder="请输入密钥"
                style={{ width, marginBottom: 10 }}
                onChange={cryptoHashOnChange}
              />
            ) : null}

            <Button
              type="primary"
              style={{ width }}
              onClick={cryptoOnClick}
              disabled={selectCrypto ? (showCryptoHash ? !cryptoHash : false) : true}
            >
              加密
            </Button>
          </div>
        </Col>
        <Col span={8}>
          <TextArea rows={6} value={rightInput} onChange={rightOnChange} />
        </Col>
      </Row>
    </div>
  );
};

export default CryptoJsView;
