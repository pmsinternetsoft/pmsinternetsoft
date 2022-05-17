let baseurl = "http://172.16.1.132:1924";
let user = `${baseurl}/api/v1/user`;

const apiConfig = {
  //USER
  connectWallet: `${user}/connectWallet`,
  getProfile: `${user}/getProfile`,
  updateProfile: `${user}/updateProfile`,
};

export default apiConfig;
