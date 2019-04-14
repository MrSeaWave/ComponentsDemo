export const cryptoType = [
  { label: 'MD5', value: 'MD5', showHash: false },
  {
    label: 'SHA',
    children: [
      { label: 'SHA1', value: 'SHA1', showHash: false },
      { label: 'SHA256', value: 'SHA256', showHash: false },
      { label: 'SHA224', value: 'SHA224', showHash: false },
      { label: 'SHA512', value: 'SHA512', showHash: false },
      { label: 'SHA384', value: 'SHA384', showHash: false },
      { label: 'SHA3', value: 'SHA3', showHash: false },
    ],
  },
  {
    label: 'Hmac',
    children: [
      { label: 'HmacMD5', value: 'HmacMD5', showHash: true },
      { label: 'HmacSHA1', value: 'HmacSHA1', showHash: true },
      { label: 'HmacSHA256', value: 'HmacSHA256', showHash: true },
      { label: 'HmacSHA224', value: 'HmacSHA224', showHash: true },
      { label: 'HmacSHA512', value: 'HmacSHA512', showHash: true },
      { label: 'HmacSHA384', value: 'HmacSHA384', showHash: true },
      { label: 'HmacSHA3', value: 'HmacSHA3', showHash: true },
    ],
  },
];
